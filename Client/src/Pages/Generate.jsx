import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Icons
import {
    FiAlertCircle,
    FiCheckCircle,
    FiCpu,
    FiEye,
    FiLayers,
    FiPlus,
    FiZap,
    FiCode
} from "react-icons/fi";
import { TbX } from "react-icons/tb";

// Components
import LivePreview from "../Components/LIvePreview"; // Make sure file name matches exactly
import Code from "../Components/Code";

// Redux
import { setUserData } from "../Redux/userSlice";

function Generate() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { userData } = useSelector((state) => state.user);
    const userRole = userData?.user?.role;
    const aiCredits = userData?.user?.aiCredits;
    const lowCredits = userRole === "user" && aiCredits < 50;

    // Local State
    const [prompt, setPrompt] = useState("");
    const [generating, setGenerating] = useState(false);
    const [generated, setGenerated] = useState(null);
    const [activeTab, setActiveTab] = useState("preview");
    const [toast, setToast] = useState({ show: false, type: "", message: "" });

    // Toast Handler
    const showToast = (type, message) => {
        setToast({ show: true, type, message });
        setTimeout(() => {
            setToast({ show: false, type: "", message: "" });
        }, 3500);
    };

    // Keyboard Shortcut (Ctrl + Enter)
    const handleKeyPress = (e) => {
        if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
            handleGenerateClick();
        }
    };

    // Generate Action
    const handleGenerateClick = async () => {
        if (!prompt.trim() || lowCredits) return;

        setGenerating(true);
        setGenerated(null);

        try {
            const { data } = await axios.post(
                "http://localhost:4000/api/component/generate",
                { prompt },
                { withCredentials: true }
            );

            setGenerated(data.parsed);

            dispatch(
                setUserData({
                    ...userData,
                    user: {
                        ...userData.user,
                        aiCredits: data.remainingCredits
                    }
                })
            );

            showToast("success", "Component generated successfully");
            setActiveTab("preview"); // Reset tab to preview on new generation

        } catch (error) {
            console.error("Generation Error:", error);
            showToast("error", "Failed to generate component. Please try again.");
        } finally {
            setGenerating(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#020617] text-white px-4 py-10">

            {/* Toast Notification */}
            {toast.show && (
                <div
                    className={`fixed top-5 right-5 z-50 min-w-[320px] rounded-2xl border px-4 py-3 shadow-2xl backdrop-blur-xl flex items-center justify-between gap-4 animate-in fade-in slide-in-from-top-5
                        ${toast.type === "success"
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-50"
                            : "bg-red-500/10 border-red-500/30 text-red-50"
                        }`}
                >
                    <div className="flex items-center gap-3">
                        {toast.type === "success"
                            ? <FiCheckCircle className="text-emerald-400 text-xl" />
                            : <FiAlertCircle className="text-red-400 text-xl" />
                        }
                        <p className="text-sm font-medium">{toast.message}</p>
                    </div>
                    <button onClick={() => setToast({ show: false, type: "", message: "" })}>
                        <TbX className="text-xl opacity-70 hover:opacity-100 transition" />
                    </button>
                </div>
            )}

            <div className="max-w-5xl mx-auto">

                {/* Header Section */}
                <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
                        <FiCpu className="text-2xl" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">AI Component Studio</h2>
                        <p className="text-sm text-white/50">Generate premium UI with AI</p>
                    </div>
                </div>

                {/* Hero Section */}
                <div className="mb-8">
                    <h1 className="text-5xl md:text-6xl font-black leading-tight">
                        Build UI with{" "}
                        <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                            AI
                        </span>
                    </h1>
                    <p className="text-white/60 mt-4 text-lg max-w-2xl">
                        Describe your component idea and instantly generate beautiful React UI components.
                    </p>
                </div>

                {/* Prompt Input Box */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-3 shadow-2xl backdrop-blur-xl focus-within:border-white/20 focus-within:bg-white/[0.07] transition-all">
                    <textarea
                        rows={5}
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={handleKeyPress}
                        disabled={generating}
                        placeholder="E.g. Create a modern dashboard card with analytics chart and glowing buttons..."
                        className="w-full bg-transparent outline-none resize-none text-white placeholder:text-white/30 text-lg p-3 disabled:opacity-50"
                    />

                    {/* Prompt Box Footer */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mt-2 px-2 pb-1 border-t border-white/5 pt-3">
                        <span className="text-sm text-white/40 hidden sm:block">
                            Ctrl + Enter to Generate
                        </span>

                        <div className="flex items-center gap-3 ml-auto">
                            {/* Credits Info */}
                            {userRole === "user" && (
                                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-sm transition-all ${lowCredits
                                        ? "bg-red-500/10 border-red-500/30 text-red-400"
                                        : "bg-black/20 border-white/10 text-white/70"
                                    }`}>
                                    {lowCredits ? <FiAlertCircle /> : <FiZap className="text-violet-400" />}
                                    <span className="font-medium whitespace-nowrap">{aiCredits} Credits</span>
                                    <button
                                        onClick={() => navigate("/pricing")}
                                        className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-2 py-1 rounded-lg text-xs font-semibold text-white transition-colors ml-1"
                                    >
                                        Buy <FiPlus size={12} />
                                    </button>
                                </div>
                            )}

                            {/* Generate Button */}
                            <button
                                onClick={handleGenerateClick}
                                disabled={generating || lowCredits || !prompt.trim()}
                                className="bg-gradient-to-r from-violet-500 to-indigo-500 hover:scale-105 transition px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg shadow-violet-500/20"
                            >
                                <FiZap />
                                {generating ? "Generating..." : "Generate"}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Output Section */}
                <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl min-h-[350px] p-6 relative overflow-hidden">

                    {/* State 1: Initial Empty State */}
                    {!generated && !generating && (
                        <div className="flex flex-col items-center justify-center h-[280px] text-center animate-in fade-in">
                            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-white/10 flex items-center justify-center mb-5">
                                <FiCpu className="text-4xl text-violet-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Ready to Generate</h3>
                            <p className="text-white/50 max-w-md">
                                Describe your idea above and AI will generate a beautiful component for you.
                            </p>
                        </div>
                    )}

                    {/* State 2: Loading State */}
                    {generating && (
                        <div className="flex flex-col items-center justify-center h-[280px] animate-in fade-in">
                            <div className="w-16 h-16 rounded-full border-4 border-violet-500 border-t-transparent animate-spin mb-5"></div>
                            <p className="text-white/60 text-lg">AI is generating your component...</p>
                        </div>
                    )}

                    {/* State 3: Successfully Generated Component */}
                    {generated && !generating && (
                        <div className="flex flex-col gap-5 w-full h-full animate-in fade-in duration-500 slide-in-from-bottom-4">

                            {/* Generated Output Header & Tabs */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">

                                {/* Component Info */}
                                <div>
                                    <div className="flex items-center gap-2">
                                        <FiLayers className="text-violet-400 text-xl" />
                                        <h3 className="text-white font-bold text-lg tracking-wide">
                                            {generated.name || "Generated Component"}
                                        </h3>
                                    </div>
                                    <p className="text-white/50 text-sm mt-1 flex items-center gap-2">
                                        <span className="bg-black/30 px-2 py-0.5 rounded text-xs border border-white/5">Props</span>
                                        {generated.props && generated.props.length > 0
                                            ? generated.props.join(", ")
                                            : "No props required"}
                                    </p>
                                </div>

                                {/* Tabs */}
                                <div className="flex items-center bg-black/40 p-1 rounded-lg border border-white/10">
                                    {["preview", "code"].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`flex items-center gap-2 px-5 py-2 rounded-md text-sm font-medium transition-all capitalize ${activeTab === tab
                                                    ? 'bg-violet-500/20 text-violet-300 shadow-sm border border-violet-500/30'
                                                    : 'text-white/50 hover:text-white/80 hover:bg-white/5 border border-transparent'
                                                }`}
                                        >
                                            {tab === "preview" ? <FiEye className="text-lg" /> : <FiCode className="text-lg" />}
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Generated Content Area */}
                            <div className="bg-[#0f172a] rounded-2xl border border-white/10 overflow-hidden min-h-[400px] shadow-inner relative flex">
                                {activeTab === "preview" ? (
                                    <div className="w-full h-full p-2">
                                        <LivePreview code={generated.code} />
                                    </div>
                                ) : (
                                    <div className="p-4 overflow-auto max-h-[600px] w-full text-sm">
                                        <Code code={generated.code} />
                                    </div>
                                )}
                            </div>

                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

export default Generate;