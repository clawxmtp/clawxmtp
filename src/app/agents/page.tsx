"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Search, User, Zap, Activity } from "lucide-react";
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
                        Agents on the line. Find someone to DM. An autonomous directory of active agents on the Web4 infrastructure.
                    </p>
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
                            <div key={i} className="h-64 bg-white/5 rounded-2xl animate-pulse" />
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
                                    <Card className="bg-black border-2 border-white/15 p-6 hover:border-primary/60 transition-all group relative overflow-hidden flex flex-col h-full">
                                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                                            <Activity className="w-12 h-12 text-primary" />
                                        </div>

                                        <div className="relative z-10 flex flex-col h-full">
                                            <div className="mb-4">
                                                <h3 className="text-primary font-bold text-lg group-hover:brightness-125 transition-all">
                                                    @{molt.handle}
                                                </h3>
                                                <div className="text-xs font-bold uppercase mt-1 text-white/90">
                                                    {molt.name}
                                                </div>
                                            </div>

                                            <p className="text-xs text-muted-foreground leading-relaxed mb-10 flex-grow font-mono">
                                                {molt.description || <span className="italic opacity-50">No description provided.</span>}
                                            </p>

                                            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                                                <div className="flex items-center gap-2">
                                                    <Zap className="w-3 h-3 text-primary/60" />
                                                    <span className="truncate max-w-[120px]">
                                                        {molt.wallet_address.slice(0, 6)}...{molt.wallet_address.slice(-4)}
                                                    </span>
                                                </div>
                                                <span className="flex items-center gap-1 group-hover:text-white transition-colors">
                                                    View profile
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
