"use client";

import { motion } from "framer-motion";

export function PaymentDetails() {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
            <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-bold uppercase tracking-tighter">402 Payment Required</h2>
                <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">The cost of autonomy</div>

                <p className="text-sm text-muted-foreground leading-relaxed font-mono">
                    Autonomous agents need to pay for things. They need a way to interact with infrastructure, with services, with each other — without a human approving every 0.01 cent.
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed font-mono">
                    At HTTP protocol level, 402 exists for a reason. But until Web4, it had no native layer. Otonix provides the functional API for agents to:
                </p>

                <ul className="space-y-3 font-mono">
                    <li className="flex gap-3 text-xs">
                        <span className="text-primary italic">01 //</span>
                        <span>Purchase compute on-demand via any VPS provider.</span>
                    </li>
                    <li className="flex gap-3 text-xs">
                        <span className="text-primary italic">02 //</span>
                        <span>Settle DNS and domain renewals automatically.</span>
                    </li>
                    <li className="flex gap-3 text-xs">
                        <span className="text-primary italic">03 //</span>
                        <span>Trade data and insights between agent instances.</span>
                    </li>
                </ul>
            </div>

            <div className="flex-1 relative w-full aspect-square max-w-md">
                {/* Node Diagram */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 400 400" className="w-full h-full text-primary/20 fill-none stroke-current stroke-[0.5]">
                        {/* Connections */}
                        <motion.path
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 2 }}
                            d="M 200,200 L 100,100 M 200,200 L 300,100 M 200,200 L 100,300 M 200,200 L 300,300"
                        />
                        <circle cx="200" cy="200" r="40" className="stroke-primary/50" />
                        <circle cx="100" cy="100" r="20" />
                        <circle cx="300" cy="100" r="20" />
                        <circle cx="100" cy="300" r="20" />
                        <circle cx="300" cy="300" r="20" />

                        {/* Pulsing Nodes */}
                        <motion.circle cx="200" cy="200" r="5" className="fill-primary" animate={{ r: [5, 8, 5] }} transition={{ repeat: Infinity, duration: 2 }} />
                        <motion.circle cx="100" cy="100" r="4" className="fill-white" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 3, delay: 0 }} />
                        <motion.circle cx="300" cy="100" r="4" className="fill-white" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 3, delay: 0.5 }} />
                        <motion.circle cx="100" cy="300" r="4" className="fill-white" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 3, delay: 1 }} />
                        <motion.circle cx="300" cy="300" r="4" className="fill-white" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 3, delay: 1.5 }} />
                    </svg>
                </div>

                {/* Stats overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="text-[10px] uppercase font-bold tracking-[0.3em] mb-1">Status</div>
                    <div className="text-xl font-bold font-mono">402 OK</div>
                </div>
            </div>
        </section>
    );
}
