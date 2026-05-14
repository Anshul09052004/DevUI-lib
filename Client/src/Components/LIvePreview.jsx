import React, { useRef, useCallback, useState, useEffect } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { LiveProvider, LiveError, LivePreview as ReactLivePreview } from "react-live";

const LivePreview = ({ code }) => {
    const [refreshKey, setRefreshKey] = useState(0);

    const refreshPreview = () => {
        setRefreshKey((prev) => prev + 1);
    };

    let sanitized = code
        .replace(/import.*from.*;/g, "")
        .replace(/export\s+/g, "");

    sanitized = sanitized.replace(
        /position\s*:\s*["']fixed["']/g,
        'position: "absolute"'
    );

    const match = sanitized.match(/const\s+([A-Z]\w+)/);
    const componentName = match ? match[1] : null;

    const wrappedCode = componentName
        ? `${sanitized}\nrender(<${componentName} />)`
        : sanitized;

    return (
        <div className="flex flex-col w-full rounded-2xl border border-white/10 bg-[#0f172a] shadow-2xl overflow-hidden mt-6">

            {/* Header / Toolbar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-2">
                    {/* macOS style dots */}
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="ml-3 text-sm font-medium text-white/50 tracking-wide">
                        Live Preview
                    </span>
                </div>

                <button
                    onClick={refreshPreview}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all active:scale-95 border border-white/5"
                    title="Refresh Preview"
                >
                    <FiRefreshCw className="text-sm" />
                    <span className="text-xs font-medium">Refresh</span>
                </button>
            </div>

            {/* Live Provider wrapper */}
            <LiveProvider
                key={refreshKey}
                code={wrappedCode}
                scope={{ React, useEffect, useRef, useState, useCallback }}
                noInline
            >
                {/* Render Area */}
                <div className="relative w-full min-h-[400px] bg-[#020617] flex items-center justify-center p-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.04] to-transparent overflow-hidden">
                    <div className="w-full max-w-4xl flex items-center justify-center">
                        <ReactLivePreview className="w-full flex justify-center scale-100 origin-center transition-all" />
                    </div>
                </div>

                {/* Error Display */}
                <LiveError className="bg-red-500/10 text-red-400 font-mono text-sm p-5 border-t border-red-500/20 max-h-[250px] overflow-y-auto whitespace-pre-wrap leading-relaxed" />

                {/* Fallback Message */}
                {!componentName && (
                    <div className="flex items-center justify-center p-4 text-sm font-medium text-yellow-500/80 bg-yellow-500/10 border-t border-yellow-500/20">
                        Preview not available. Please copy and paste your code in the editor.
                    </div>
                )}
            </LiveProvider>
        </div>
    );
};

export default LivePreview;