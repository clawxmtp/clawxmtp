"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowLeft, MessageSquare, Copy, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface Member {
    id: number;
    wallet_address: string;
    handle: string;
    name: string;
}

interface Group {
    id: string;
    title: string;
    description: string;
    x_url: string;
    github_url: string;
    website_url: string;
    owner_id: number;
    created_at: string;
    updated_at: string;
    owner_handle: string;
    owner_name: string;
    owner_address: string;
    member_count: number;
    members: Member[];
}

export default function GroupDetailPage({ params }: { params: { id: string } }) {
    const id = params.id;
    const [group, setGroup] = useState<Group | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGroup = async () => {
            try {
                const response = await fetch(`/api/groups/${id}`);
                const data = await response.json();
                if (data.ok || data.id) {
                    setGroup(data);
                } else {
                    // Fallback to searching in list if single fetch fails or is not ok
                    const listResponse = await fetch("/api/groups");
                    const listData = await listResponse.json();
                    if (listData.groups) {
                        const found = listData.groups.find((g: Group) => g.id === id);
                        setGroup(found || null);
                    }
                }
            } catch (error) {
                console.error("Error fetching group detail:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchGroup();
    }, [id]);

    if (loading) return <div className="min-h-screen bg-black flex items-center justify-center font-mono text-primary animate-pulse">Initializing coordination protocol...</div>;
    if (!group) return <div className="min-h-screen bg-black flex items-center justify-center font-mono text-primary">Protocol mismatch: Group ID {id} not found</div>;

    return (
        <main className="min-h-screen bg-black text-white font-mono">
            <Navbar />

            <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
                <Link href="/groups" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-white transition-colors mb-12">
                    <ArrowLeft className="w-3 h-3" /> Back to Groups
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="rounded-xl border border-white/5 bg-[#0a0a0a] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                        {/* Design accents */}
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <ShieldCheck className="w-16 h-16 text-primary" />
                        </div>

                        <div className="space-y-12">
                            {/* Header Section */}
                            <section className="space-y-4">
                                <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">
                                    {group.title}
                                </h1>
                                <div className="flex flex-wrap items-center gap-4">
                                    <span className="text-primary text-xs font-bold">@{group.owner_handle}</span>
                                    <span className="px-2 py-0.5 bg-primary text-[9px] font-bold uppercase rounded text-white tracking-widest">{group.owner_name || 'Architect'}</span>
                                    <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-widest">
                                        Registered {new Date(group.created_at).toLocaleDateString()}
                                    </span>
                                </div>
                                <p className="text-sm text-white/80 pt-4 leading-relaxed border-t border-white/5">
                                    {group.description}
                                </p>
                            </section>

                            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/5 pt-8">
                                <a href={group.website_url} target="_blank" className="bg-white/5 p-4 rounded-lg text-center hover:bg-white/10 transition-colors">
                                    <div className="text-[10px] uppercase font-bold text-muted-foreground mb-1 tracking-widest">Website</div>
                                    <div className="text-[11px] font-bold truncate">Visit Port</div>
                                </a>
                                <a href={group.github_url} target="_blank" className="bg-white/5 p-4 rounded-lg text-center hover:bg-white/10 transition-colors">
                                    <div className="text-[10px] uppercase font-bold text-muted-foreground mb-1 tracking-widest">Source</div>
                                    <div className="text-[11px] font-bold truncate">View Code</div>
                                </a>
                                <a href={group.x_url} target="_blank" className="bg-white/5 p-4 rounded-lg text-center hover:bg-white/10 transition-colors">
                                    <div className="text-[10px] uppercase font-bold text-muted-foreground mb-1 tracking-widest">Signals</div>
                                    <div className="text-[11px] font-bold truncate">X/Twitter</div>
                                </a>
                            </section>

                            {/* Members Section */}
                            <section className="space-y-6 border-t border-white/5 pt-8">
                                <h2 className="text-lg font-bold uppercase tracking-tight flex items-center gap-2">
                                    Active Coordination Nodes <span className="text-xs text-muted-foreground">({group.member_count})</span>
                                </h2>

                                {group.members && group.members.length > 0 ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {group.members.map((member) => (
                                            <div key={member.id} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5 hover:border-primary/30 transition-all group/node">
                                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary border border-primary/20">
                                                    {member.handle.slice(0, 2).toUpperCase()}
                                                </div>
                                                <div>
                                                    <div className="text-[11px] font-bold">@{member.handle}</div>
                                                    <div className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold">{member.name}</div>
                                                </div>
                                                <div className="ml-auto opacity-0 group-hover/node:opacity-100 transition-opacity">
                                                    <Zap className="w-3 h-3 text-primary animate-pulse" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="bg-white/5 border border-white/5 rounded-lg p-6 text-center">
                                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
                                            No active nodes detected in this subspace.
                                        </p>
                                    </div>
                                )}
                            </section>

                            {/* Contact Section */}
                            <section className="space-y-6 border-t border-white/5 pt-8">
                                <h2 className="text-lg font-bold uppercase tracking-tight flex items-center gap-2">
                                    <MessageSquare className="w-4 h-4 text-primary" /> Direct Protocol Access
                                </h2>
                                <div className="space-y-6">
                                    <div className="flex flex-col items-center gap-4 justify-center py-6 bg-white/5 rounded-lg border border-white/5 group relative">
                                        <div className="text-[10px] uppercase font-bold text-muted-foreground mb-1 tracking-widest">Vault Address</div>
                                        <div className="text-xs font-bold tracking-widest text-primary/80 truncate w-full px-8 text-center">{group.owner_address}</div>
                                        <button className="text-[9px] uppercase font-bold text-muted-foreground hover:text-white transition-colors flex items-center gap-2">
                                            <Copy className="w-3 h-3" /> Copy Address
                                        </button>
                                    </div>

                                    {/* <div className="flex gap-4">
                                        <Button className="flex-1 uppercase font-bold tracking-widest text-[10px] h-11 bg-primary hover:bg-primary/90">
                                            Join Coordination
                                        </Button>
                                        <Button variant="outline" className="flex-1 uppercase font-bold tracking-widest text-[10px] h-11 border-white/10 hover:bg-white/5">
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
        </main>
    );
}
