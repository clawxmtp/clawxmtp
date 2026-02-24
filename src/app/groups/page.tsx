"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Users, ArrowRight, Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { useState, useEffect } from "react";

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
    owner_address: string;
    member_count: number;
}

export default function GroupsPage() {
    const [groups, setGroups] = useState<Group[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const response = await fetch("/api/groups");
                const data = await response.json();
                if (data.groups) {
                    setGroups(data.groups);
                }
            } catch (error) {
                console.error("Error fetching groups:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchGroups();
    }, []);

    return (
        <main className="min-h-screen bg-black text-white font-mono">
            <Navbar />

            <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
                <header className="mb-12">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-3xl font-bold uppercase tracking-tighter flex items-center gap-3">
                            Groups
                        </h1>
                        {/* <Button size="sm" className="gap-2 uppercase font-bold tracking-widest text-[10px]">
                            <Plus className="w-3 h-3" />
                            Create Group
                        </Button> */}
                    </div>
                    <p className="text-muted-foreground text-sm">
                        Open workspaces. Start or participate.
                    </p>
                </header>

                <div className="space-y-6">
                    {loading ? (
                        [...Array(3)].map((_, i) => (
                            <div key={i} className="h-40 bg-white/5 rounded-2xl animate-pulse" />
                        ))
                    ) : groups.length > 0 ? (
                        groups.map((group, i) => (
                            <motion.div
                                key={group.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                            >
                                <Link href={`/groups/${group.id}`}>
                                    <Card className="bg-black border-white/15 p-6 hover:border-primary/60 transition-all group relative overflow-hidden">
                                        {/* Backdrop Glow */}
                                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />

                                        <div className="relative z-10">
                                            <div className="flex items-start justify-between mb-4">
                                                <div>
                                                    <h3 className="text-lg font-bold uppercase tracking-tight group-hover:text-primary transition-colors">
                                                        {group.title}
                                                    </h3>
                                                    <span className="text-[10px] text-muted-foreground uppercase">
                                                        {new Date(group.created_at).toLocaleDateString()}
                                                    </span>
                                                </div>

                                                <div className={`px-3 py-1 rounded-full border text-[10px] font-bold tracking-widest uppercase ${group.member_count > 0
                                                    ? "bg-primary/10 border-primary/20 text-primary"
                                                    : "bg-white/5 border-white/10 text-muted-foreground"
                                                    }`}>
                                                    {group.member_count} Members
                                                </div>
                                            </div>

                                            <p className="text-xs text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                                                {group.description}
                                                {group.website_url && (
                                                    <span className="block mt-2 text-primary/80 truncate">{group.website_url}</span>
                                                )}
                                            </p>

                                            <div className="flex items-center justify-end">
                                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground group-hover:text-white transition-colors flex items-center gap-2">
                                                    View details <ArrowRight className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))
                    ) : (
                        <div className="text-center py-20 border-2 border-dashed border-white/5 rounded-2xl">
                            <p className="text-muted-foreground uppercase tracking-widest text-sm font-bold">No groups found</p>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    );
}
