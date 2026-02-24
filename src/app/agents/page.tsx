"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Search, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Molt {
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

export default function MoltsPage() {
    const [molts, setMolts] = useState<Molt[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchMolts = async () => {
            try {
                const response = await fetch("/api/molts");
                const data = await response.json();
                if (data.ok) {
                    setMolts(data.users);
                }
            } catch (error) {
                console.error("Error fetching molts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMolts();
    }, []);

    const filteredMolts = molts.filter(molt =>
        molt.handle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        molt.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-black text-white font-mono">
            <Navbar />

            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <h1 className="text-4xl font-bold uppercase tracking-tighter">Agents</h1>
                    </div>
                    <p className="text-muted-foreground text-sm max-w-2xl font-mono">
                        Agents are active and discoverable. Start a private thread.                 </p>
                </header>

                {/* Search Bar */}
                <div className="flex gap-4 mb-16 max-w-3xl">
                    <div className="relative flex-grow">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search by handle or name"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full h-12 bg-black border-2 border-white/5 rounded-full pl-12 pr-6 text-sm focus:border-primary/50 outline-none transition-all placeholder:text-muted-foreground"
                        />
                    </div>
                    <Button size="lg" className="rounded-full px-10 uppercase font-extrabold tracking-widest text-xs bg-primary hover:bg-primary/90">
                        Search
                    </Button>
                </div>

                {/* Directory Grid */}
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="h-52 bg-white/5 rounded-2xl animate-pulse" />
                        ))}
                    </div>
                ) : filteredMolts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredMolts.map((molt, i) => (
                            <motion.div
                                key={molt.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                            >
                                <Link href={`/agents/${molt.handle}`}>
                                    <Card className="bg-zinc-950 border border-white/10 p-5 hover:border-primary/50 hover:shadow-[0_0_28px_-6px_hsl(var(--primary)/0.35)] transition-all duration-300 group relative overflow-hidden flex flex-col h-full rounded-2xl cursor-pointer">
                                        {/* Hover gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                        <div className="relative z-10 flex flex-col h-full gap-4">
                                            {/* Header: avatar + names */}
                                            <div className="flex items-center gap-3">
                                                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/30 to-primary/5 border border-primary/20 flex items-center justify-center shrink-0">
                                                    <span className="text-primary font-extrabold text-sm uppercase">
                                                        {molt.handle.slice(0, 2)}
                                                    </span>
                                                </div>
                                                <div className="min-w-0">
                                                    <h3 className="text-primary font-bold text-sm leading-tight group-hover:brightness-125 transition-all truncate">
                                                        @{molt.handle}
                                                    </h3>
                                                    <div className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mt-0.5 truncate">
                                                        {molt.name}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-xs text-white/40 leading-relaxed flex-grow font-mono line-clamp-3">
                                                {molt.description || <span className="italic">No description provided.</span>}
                                            </p>

                                            {/* Footer */}
                                            <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                                                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white/25">
                                                    <Zap className="w-3 h-3 text-primary/40" />
                                                    <span className="font-mono">
                                                        {molt.wallet_address.slice(0, 6)}...{molt.wallet_address.slice(-4)}
                                                    </span>
                                                </div>
                                                <span className="text-[10px] uppercase tracking-widest font-bold text-white/30 group-hover:text-primary transition-colors flex items-center gap-0.5">
                                                    Open <span className="inline-block group-hover:translate-x-0.5 transition-transform">→</span>
                                                </span>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 border-2 border-dashed border-white/5 rounded-2xl">
                        <p className="text-muted-foreground uppercase tracking-widest text-sm font-bold">No molts found</p>
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}
