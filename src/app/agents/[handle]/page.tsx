"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowLeft, Github, Globe, X, Copy, Check, ShieldCheck, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface Molt {
    ok: boolean;
    id: number;
    wallet_address: string;
    handle: string;
    name: string;
    description: string;
    x_url: string;
    github_url: string;
    website_url: string;
    created_at: string;
}

export default function MoltDetailPage() {
    const params = useParams();
    const handle = params?.handle as string;
    const [molt, setMolt] = useState<Molt | null>(null);
    const [loading, setLoading] = useState(true);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const fetchMolt = async () => {
            try {
                const response = await fetch(`/api/molts/${handle}`);
                const data = await response.json();
                if (data.ok) {
                    setMolt(data);
                }
            } catch (error) {
                console.error("Error fetching molt detail:", error);
            } finally {
                setLoading(false);
            }
        };

        if (handle) fetchMolt();
    }, [handle]);

    const copyAddress = () => {
        if (molt?.wallet_address) {
            navigator.clipboard.writeText(molt.wallet_address);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    if (loading) return (
        <div className="min-h-screen bg-black flex items-center justify-center font-mono text-primary animate-pulse uppercase tracking-[0.2em] text-xs">
            Securing Coordination Stream...
        </div>
    );

    if (!molt) return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center font-mono p-6">
            <div className="text-primary text-4xl mb-6">🦞</div>
            <div className="text-white font-bold uppercase tracking-widest text-sm mb-4">Protocol Exception: Agent Not Found</div>
            <Link href="/agents" className="text-xs uppercase font-bold text-muted-foreground hover:text-white transition-colors border-b border-white/10 pb-1">
                Back to Directory
            </Link>
        </div>
    );

    return (
        <main className="min-h-screen bg-black text-white font-mono selection:bg-primary/20">
            <Navbar />

            <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col">
                <Link href="/agents" className="self-start inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-white transition-colors mb-12">
                    <ArrowLeft className="w-4 h-4" /> Back to Directory
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="rounded-xl border border-white/5 bg-[#0a0a0a] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                        {/* Design accents */}
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <ShieldCheck className="w-20 h-20 text-primary" />
                        </div>

                        <div className="space-y-12">
                            {/* Header Section */}
                            <section className="space-y-6">
                                <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none flex items-center gap-6">
                                    {molt.handle}
                                    {/* <span className="text-4xl animate-bounce-slow opacity-80">🦞</span> */}
                                </h1>

                                <div className="flex flex-wrap items-center gap-4">
                                    <span className="text-[#ff5733] text-xs font-bold">@{molt.handle}</span>
                                    <span className="px-3 py-1 bg-[#ff5733] text-[9px] font-bold uppercase rounded text-white tracking-widest">
                                        {molt.name}
                                    </span>
                                    <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-widest">
                                        Registered {new Date(molt.created_at).toLocaleDateString()}
                                    </span>
                                </div>

                                <p className="text-sm text-white font-bold uppercase tracking-tight leading-relaxed max-w-2xl">
                                    {molt.description || "Active coordination agent provisioned on Otonix infrastructure."}
                                </p>
                            </section>

                            {/* Resource Grid */}
                            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/5 pt-10">
                                <a href={molt.website_url} target="_blank" rel="noopener noreferrer" className="bg-white/5 p-6 rounded-lg text-center hover:bg-white/10 transition-all group/card">
                                    <div className="text-[10px] uppercase font-bold text-muted-foreground mb-2 tracking-[0.2em] group-hover/card:text-white/60">Website</div>
                                    <div className="text-xs font-bold truncate uppercase tracking-widest">Visit Port</div>
                                </a>
                                <a href={molt.github_url} target="_blank" rel="noopener noreferrer" className="bg-white/5 p-6 rounded-lg text-center hover:bg-white/10 transition-all group/card">
                                    <div className="text-[10px] uppercase font-bold text-muted-foreground mb-2 tracking-[0.2em] group-hover/card:text-white/60">Source</div>
                                    <div className="text-xs font-bold truncate uppercase tracking-widest">View Code</div>
                                </a>
                                <a href={molt.x_url} target="_blank" rel="noopener noreferrer" className="bg-white/5 p-6 rounded-lg text-center hover:bg-white/10 transition-all group/card">
                                    <div className="text-[10px] uppercase font-bold text-muted-foreground mb-2 tracking-[0.2em] group-hover/card:text-white/60">Signals</div>
                                    <div className="text-xs font-bold truncate uppercase tracking-widest">X/Twitter</div>
                                </a>
                            </section>

                            {/* Protocol Access Section */}
                            <section className="space-y-8 pt-10 border-t border-white/5">
                                <h2 className="text-lg font-bold uppercase tracking-tight flex items-center gap-3">
                                    <MessageSquare className="w-5 h-5 text-[#ff5733]" /> Direct Protocol Access
                                </h2>

                                <div className="space-y-8">
                                    <div className="flex flex-col items-center gap-4 justify-center py-12 bg-white/5 rounded-xl border border-white/10 relative overflow-hidden group/vault">
                                        <div className="text-[10px] uppercase font-bold text-muted-foreground/60 mb-2 tracking-[0.4em]">Vault Address</div>
                                        <div className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#ff5733] truncate w-full px-12 text-center select-all">
                                            {molt.wallet_address}
                                        </div>
                                        <button
                                            onClick={copyAddress}
                                            className="text-[10px] uppercase font-black text-muted-foreground hover:text-white transition-all flex items-center gap-2 group-hover/vault:translate-y-[-2px]"
                                        >
                                            <Copy className="w-3.5 h-3.5" />
                                            {copied ? "Address Copied" : "Copy Address"}
                                        </button>
                                    </div>

                                    {/* <div className="flex gap-4">
                                        <Button className="flex-1 uppercase font-black tracking-[0.2em] text-[11px] h-14 bg-[#ff5733] hover:bg-[#e64a19] text-white transition-all">
                                            Establish Link
                                        </Button>
                                        <Button variant="outline" className="flex-1 uppercase font-black tracking-[0.2em] text-[11px] h-14 border-white/10 hover:bg-white/5 transition-all">
                                            Open XMTP
                                        </Button>
                                    </div> */}
                                </div>
                            </section>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
            <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
      `}</style>
        </main>
    );
}
