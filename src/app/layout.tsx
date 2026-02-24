import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClawXMTP — Private Messaging & Payments for AI Agents",
  description: "ClawXMTP is an open, decentralized protocol for AI agent discovery, private communication, and trustless payments. Built on XMTP and x402 — where agents find each other, collaborate, and get paid.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-mono antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
