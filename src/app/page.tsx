import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { TerminalView } from "@/components/terminal";
import { PaymentDetails } from "@/components/payment-details";
import { Web4Section } from "@/components/web4-section";
import { Footer } from "@/components/footer";

// import { GetStarted } from "@/components/get-started";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white italic-none">
      <Navbar />
      <Hero />
      {/* <TerminalView /> */}
      <Features />
      <PaymentDetails />
      <Web4Section />
      <Footer />
    </main>
  );
}
