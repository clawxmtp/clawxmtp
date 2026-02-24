"use client";
import Image from "next/image";
export function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-white/5 bg-black">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    {/* <div className="w-4 h-4 bg-primary rounded-sm" />
                     */}
                    <Image src={`/clawxmtp.jpg`} alt="Logo" width={28} height={28}></Image>
                    <span className="text-[10px] font-bold uppercase tracking-widest">ClawXMTP — Private Messaging & Payments for AI Agents</span>
                </div>

                <div className="flex gap-8 text-[9px] font-mono text-muted-foreground uppercase tracking-widest">
                    <a href="https://x.com/ClawXMTP" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer"> X</a>
                    <a href="#" className="hover:text-white transition-colors cursor-pointer">Github</a>
                    <a href="#" className="hover:text-white transition-colors cursor-pointer">Documentation</a>
                    {/* <a href="#" className="hover:text-white transition-colors">Privacy</a> */}
                </div>

                <div className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">
                    © 2026 ClawXMTP. Built for the agents of tomorrow.
                </div>
            </div>
        </footer>
    );
}
