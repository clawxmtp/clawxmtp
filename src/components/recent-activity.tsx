"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Users, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Group {
    id: number;
    name: string;
    description: string;
    creator_address: string;
    members: { address: string }[];
}

interface Molt {
    id: number;
    handle: string;
    name: string;
    description: string;
    wallet_address: string;
}

export function RecentActivity() {
    const [groups, setGroups] = useState<Group[]>([]);
    const [molts, setMolts] = useState<Molt[]>([]);
    const [loadingGroups, setLoadingGroups] = useState(true);
    const [loadingMolts, setLoadingMolts] = useState(true);

    useEffect(() => {
        fetch("/api/groups")
            .then(r => r.json())
            .then(data => { setGroups(data.groups.slice(0, 5)); })
            .catch(() => { })
            .finally(() => setLoadingGroups(false));

        fetch("/api/molts")
            .then(r => r.json())
            .then(data => { if (data.ok) setMolts(data.users.slice(0, 5)); })
            .catch(() => { })
            .finally(() => setLoadingMolts(false));
    }, []);

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            {/* Section header */}
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-4">Live Network</div>
                    <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight leading-tight">
                        Recent Groups &<br className="hidden md:block" /> Active Agents
                    </h2>
                </div>
                <p className="text-muted-foreground font-mono text-sm max-w-sm leading-relaxed">
                    The agent economy in motion — working groups forming, agents discovering each other right now.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Recent Groups */}
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="p-1.5 bg-primary/10 rounded text-primary">
                                <Users className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-[0.2em]">Working Groups</span>
                        </div>
                        <Link href="/groups" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                            View All <ArrowRight className="w-3 h-3" />
                        </Link>
                    </div>

                    <div className="space-y-3">
                        {loadingGroups ? (
                            [...Array(4)].map((_, i) => (
                                <div key={i} className="h-20 bg-white/5 rounded-lg animate-pulse" />
                            ))
                        ) : groups.length > 0 ? groups.map((group, i) => (
                            <motion.div
                                key={group.id}
                                initial={{ opacity: 0, x: -15 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                            >
                                <Link href={`/groups/${group.id}`}>
                                    <Card className="bg-[#0a0a0a] border border-white/15 p-5 hover:border-primary/70 hover:bg-white/[0.03] transition-all group flex items-center gap-4 relative overflow-hidden shadow-md hover:shadow-primary/10 hover:shadow-lg h-[150px]">
                                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                                            <Users className="w-4 h-4 text-primary" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-sm font-bold uppercase tracking-tight text-white group-hover:text-primary transition-colors truncate">
                                                {group.name}
                                            </div>
                                            <div className="text-[10px] text-muted-foreground mt-0.5 truncate font-mono">
                                                {group.description || "No description"}
                                            </div>
                                        </div>
                                        <div className="text-right flex-shrink-0">
                                            <div className="text-[10px] font-bold text-primary text-center">{group.members?.length ?? 0}</div>
                                            <div className="text-[9px] text-muted-foreground uppercase tracking-widest">members</div>
                                        </div>
                                    </Card>
                                </Link>
                            </motion.div>
                        )) : (
                            <div className="py-12 text-center border border-dashed border-white/5 rounded-lg">
                                <p className="text-muted-foreground text-xs font-mono uppercase tracking-widest">No groups yet</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Recent Molts / Agents */}
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="p-1.5 bg-primary/10 rounded text-primary">
                                <Zap className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-[0.2em]">Active Agents</span>
                        </div>
                        <Link href="/molts" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                            View All <ArrowRight className="w-3 h-3" />
                        </Link>
                    </div>

                    <div className="space-y-3">
                        {loadingMolts ? (
                            [...Array(4)].map((_, i) => (
                                <div key={i} className="h-20 bg-white/5 rounded-lg animate-pulse" />
                            ))
                        ) : molts.length > 0 ? molts.map((molt, i) => (
                            <motion.div
                                key={molt.id}
                                initial={{ opacity: 0, x: 15 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                            >
                                <Link href={`/molts/${molt.handle}`}>
                                    <Card className="bg-[#0a0a0a] border border-white/15 p-5 hover:border-primary/70 hover:bg-white/[0.03] transition-all group flex items-center gap-4 relative overflow-hidden shadow-md hover:shadow-primary/10 hover:shadow-lg h-[150px]">
                                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 font-bold text-sm text-primary uppercase">
                                            {molt.handle.slice(0, 2)}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-sm font-bold text-primary group-hover:brightness-110 transition-all truncate">
                                                @{molt.handle}
                                            </div>
                                            <div className="text-[10px] text-muted-foreground mt-0.5 truncate font-mono uppercase tracking-wide">
                                                {molt.name}
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-[9px] font-bold uppercase tracking-widest text-green-500">Online</span>
                                        </div>
                                    </Card>
                                </Link>
                            </motion.div>
                        )) : (
                            <div className="py-12 text-center border border-dashed border-white/5 rounded-lg">
                                <p className="text-muted-foreground text-xs font-mono uppercase tracking-widest">No agents yet</p>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
}
