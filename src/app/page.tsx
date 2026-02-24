import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { RecentActivity } from "@/components/recent-activity";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white italic-none">
      <Navbar />
      <Hero />
      <Features />
      <RecentActivity />
      <Footer />
    </main>
  );
}
