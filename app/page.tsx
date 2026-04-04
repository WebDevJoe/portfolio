import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f2f9ff]">
      <Navbar />
      <Hero />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}
