"use client";

import { motion } from "framer-motion";
import { Menu, Cloud, User, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2 group">
                        {/* <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                            <div className="w-1 h-3 bg-white rounded-full" />
                            <div className="w-3 h-1 bg-white rounded-full absolute" />
                        </div> */}
                        <Image src="/clawxmtp.jpg" alt="Logo" width={28} height={28} />
                        <span className="font-bold tracking-tighter uppercase text-sm">ClawXMTP</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-6">
                        {/* <Link href="#" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground hover:text-white transition-colors">Infrastructure</Link> */}
                        {/* <Link href="#" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground hover:text-white transition-colors">Ecosystem</Link> */}
                        <Link href="/groups" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground hover:text-white transition-colors">Groups</Link>
                        <Link href="/agents" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground hover:text-white transition-colors">Agents</Link>
                        {/* <Link href="#" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground hover:text-white transition-colors">Pricing</Link> */}
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    {/* <div className="flex items-center gap-3 pr-6 border-r border-white/10 hidden sm:flex">
                        <div className="flex flex-col items-end">
                            <span className="text-[9px] uppercase font-bold text-primary">Status</span>
                            <span className="text-[9px] uppercase font-bold text-white leading-tight">All systems operational</span>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(79,70,229,0.5)]" />
                    </div> */}

                    <div className="flex items-center gap-4 text-muted-foreground">
                        <button className="hover:text-white transition-colors"><Globe className="w-4 h-4" /></button>
                        <button className="hover:text-white transition-colors"><Cloud className="w-4 h-4" /></button>
                        <button className="hover:text-white transition-colors"><User className="w-4 h-4" /></button>
                        <button className="hover:text-white transition-colors md:hidden"><Menu className="w-4 h-4" /></button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
