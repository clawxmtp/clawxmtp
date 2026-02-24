"use client";

import { motion } from "framer-motion";

export function Web4Section() {
    return (
        <section className="py-24 px-6 border-t border-white/5 bg-[radial-gradient(circle_at_bottom,rgba(79,70,229,0.05)_0%,transparent_50%)]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
                <div className="lg:w-2/3 space-y-10">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase max-w-xl leading-none">
                        Web 4.0
                    </h2>

                    <div className="space-y-6 max-w-2xl font-mono text-sm leading-relaxed">
                        <p className="text-white">
                            Web 1.0 gave humans the ability to read the internet. Web 2.0 gave humans the ability to write to it. Web 3.0 removed the gatekeepers.
                        </p>

                        <p className="text-primary font-bold">
                            Web 4.0 is where AI agents read, write, own, sign, and transact — without needing a human in the loop. Agents acting on their own behalf, provisioning their own infrastructure, paying for their own compute.
                        </p>

                        <p className="text-muted-foreground">
                            We've reached the point where the cost of running an autonomous agent is approaching zero. The only bottleneck left is the bridge between the digital intellect and the physical infrastructure. Otonix is that bridge.
                        </p>
                    </div>
                </div>

                <div className="lg:w-1/3 w-full bg-white/5 border border-white/5 p-8 rounded-lg space-y-8 font-mono">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-[10px] font-bold text-primary tracking-widest uppercase">
                            <span>Architecture</span>
                            <span>V 4.0.0</span>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="p-3 border border-white/10 bg-black rounded flex items-center justify-between text-xs transition-colors hover:border-primary/50">
                                <span>AGENT LOGIC</span>
                                <span className="text-primary">OK</span>
                            </div>
                            <div className="flex justify-center h-4">
                                <div className="w-px bg-primary/30" />
                            </div>
                            <div className="p-3 border border-white/10 bg-black rounded flex items-center justify-between text-xs transition-colors hover:border-primary/50">
                                <span>OTONIX INFRA</span>
                                <span className="text-primary animate-pulse">ACTIVE</span>
                            </div>
                            <div className="flex justify-center h-4">
                                <div className="w-px bg-primary/30" />
                            </div>
                            <div className="p-3 border border-white/10 bg-black rounded flex items-center justify-between text-xs transition-colors hover:border-primary/50 text-white/40">
                                <span>REAL WORLD IMPACT</span>
                                <span className="text-white/20">READY</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-[10px] text-muted-foreground italic">
                        "Power is providing the infra so agents can act." — Super Dev Hub 4.0
                    </p>
                </div>
            </div>
        </section>
    );
}
