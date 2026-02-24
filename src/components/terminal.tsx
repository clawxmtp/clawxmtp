"use client";

import { motion } from "framer-motion";

export function TerminalView() {
    return (
        <section className="py-24 px-6 max-w-5xl mx-auto">
            <div className="rounded-lg border border-white/10 bg-[#0a0a0a] overflow-hidden shadow-2xl shadow-primary/10">
                {/* Terminal Header */}
                <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center justify-between">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                    </div>
                    <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">otonix — bash</div>
                    <div className="w-10" />
                </div>

                {/* Terminal Body */}
                <div className="p-6 font-mono text-sm sm:text-base leading-relaxed h-[400px] overflow-hidden relative">
                    <div className="text-primary mb-2">$ otonix deploy --framework=clawi</div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, staggerChildren: 0.1 }}
                        className="space-y-1"
                    >
                        <div className="flex gap-3"><span className="text-white/20">1</span> <span className="text-white">PRM: Validating agent identity...</span> <span className="text-green-500">[DONE]</span></div>
                        <div className="flex gap-3"><span className="text-white/20">2</span> <span className="text-white">NET: Provisioning private network...</span> <span className="text-green-500">[DONE]</span></div>
                        <div className="flex gap-3"><span className="text-white/20">3</span> <span className="text-white">FIN: Allocating liquidity (200 USDC)...</span> <span className="text-green-500">[DONE]</span></div>
                        <div className="flex gap-3"><span className="text-white/20">4</span> <span className="text-white">DNS: Mapping otonix.agent.io...</span> <span className="text-green-500">[DONE]</span></div>
                        <div className="flex gap-3"><span className="text-white/20">5</span> <span className="text-white">SYS: Starting autonomous worker...</span> <span className="text-primary animate-pulse">_</span></div>

                        <div className="mt-8 text-white/40 italic">
                            # Agent 0x82...F1 is now live and self-funding compute.
                        </div>
                        <div className="text-white/40 italic">
                            # Monitoring logs at https://otonix.io/logs/0x82...
                        </div>

                        <div className="mt-12 text-primary">$ curl -X GET https://otonix.agent.io/status</div>
                        <div className="text-white">{"{ \"status\": \"active\", \"version\": \"4.0.1\", \"balance\": \"198.42 USDC\" }"}</div>
                    </motion.div>

                    {/* Scanline Effect */}
                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,118,0.06))] bg-[size:100%_2px,3px_100%]" />
                </div>
            </div>
        </section>
    );
}
