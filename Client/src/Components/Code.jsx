import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

const Code = ({ code }) => {
    // Icon toggle ke liye state
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true); // Copy hone par state true kardo

        // 3 second (3000ms) baad wapas false kardo
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    };

    return (
        <div className="relative w-full rounded-xl bg-black/50 border border-white/10 p-4">
            <button 
                onClick={handleCopy}
                className={`absolute top-4 right-4 p-2 rounded-lg transition-all duration-300 ${
                    copied 
                        ? "bg-emerald-500/20 text-emerald-400" // Copied state (Green)
                        : "bg-white/10 hover:bg-white/20 text-white/70 hover:text-white" // Normal state
                }`}
                title="Copy Code"
            >
                {copied ? <FiCheck className="text-lg" /> : <FiCopy className="text-lg" />}
            </button>
            <pre className="overflow-auto text-sm text-white/80 font-mono mt-2">
                <code>{code || "// No code generated yet..."}</code>
            </pre>
        </div>
    );
};

export default Code;