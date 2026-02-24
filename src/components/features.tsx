"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Fingerprint, CreditCard, Server, Globe, ArrowRight } from "lucide-react";

const features = [
    {
        title: "Identity & Wallet",
        description: "Autonomous agents get their own professional wallets and persistent IDs. A self-sovereign identity for every agent instance.",
        icon: Fingerprint,
        tag: "AUTH",
        visual: (
            <div className="w-full h-32 bg-white/5 rounded-md border border-white/5 flex items-center justify-center relative overflow-hidden group-hover:border-primary/50 transition-colors">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-4 border border-primary/30 rounded-full animate-pulse">
                    <Fingerprint className="w-12 h-12 text-primary" />
                </div>
                <div className="absolute bottom-2 right-2 text-[8px] font-mono text-muted-foreground">ID: AGENT_0492_X</div>
            </div>
        )
    },
    {
        title: "Permissionless Payments",
        description: "Agents pay for resources using stablecoins. Native USDC support across 20+ chains. No banks, no manual approval. Programmatic fiat.",
        icon: CreditCard,
        tag: "PAY",
        visual: (
            <div className="w-full h-32 bg-white/5 rounded-md border border-white/5 p-4 flex flex-col justify-end group-hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                    <div className="h-1 bg-primary w-2/3 rounded-full" />
                    <div className="h-1 bg-white/20 w-1/3 rounded-full" />
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono">USDC TRANSFER</span>
                    <span className="text-[10px] font-mono text-primary">$492.00</span>
                </div>
            </div>
        )
    },
    {
        title: "VPS/VM Provisioning",
        description: "Full Linux servers on demand. High-performance CPUs. Agents can self-manage, update, monitor, and scale — all native to Web4.0 infrastructure.",
        icon: Server,
        tag: "COMPUTE",
        visual: (
            <div className="w-full h-32 bg-white/5 rounded-md border border-white/5 p-4 font-mono text-[9px] group-hover:border-primary/50 transition-colors overflow-hidden">
                <div className="text-primary tracking-widest mb-1">$ otonix up --agent=01</div>
                <div className="text-white/40">Initializing node... OK</div>
                <div className="text-white/40">Allocating memory... 16GB</div>
                <div className="text-white/40">Spinning up vCore... 4 Cores</div>
                <div className="text-green-500 mt-1">Status: DEPLOYED</div>
            </div>
        )
    },
    {
        title: "Domain Automation (DNS + SSL)",
        description: "Instant domains, certs, and routing. Full orchestration — all managed through API. Agents decide who to reach, instantly on-demand.",
        icon: Globe,
        tag: "NETWORK",
        visual: (
            <div className="w-full h-32 bg-white/5 rounded-md border border-white/5 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <div className="relative w-20 h-20">
                    <div className="absolute inset-0 border border-white/10 rounded-full" />
                    <div className="absolute inset-2 border border-primary/20 rounded-full rotate-45" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Globe className="w-8 h-8 text-primary/40" />
                    </div>
                </div>
            </div>
        )
    },
];

export function Features() {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <div className="mb-20">
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">
                    Otonix: Giving Agents Access to Infrastructure
                </h2>
                <p className="text-muted-foreground max-w-2xl font-mono text-sm">
                    Everything an autonomous agent needs to act independently: identity, money, compute, and connectivity.
                    The Otonix CLI installs into any agent framework, giving them:
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="p-6 bg-black border-white/5 group hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                    <feature.icon className="w-5 h-5" />
                                </div>
                                <span className="text-[8px] font-bold tracking-[0.2em] text-muted-foreground/50 border border-white/5 px-2 py-1 rounded">
                                    {feature.tag}
                                </span>
                            </div>

                            <h3 className="text-lg font-bold uppercase tracking-tight mb-3 group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>

                            <p className="text-xs text-muted-foreground leading-relaxed mb-8 flex-grow">
                                {feature.description}
                            </p>

                            {feature.visual}

                            <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-white transition-colors">Details</span>
                                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
