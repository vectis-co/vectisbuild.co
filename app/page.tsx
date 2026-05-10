import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Compound } from "@/components/sections/Compound";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { Practices } from "@/components/sections/Practices";

export default function HomePage() {
  return (
    <main>
      <ScrollProgress />
      <Nav />
      <Hero />
      <Practices />
      <Compound />
      <FinalCTA />
      <Footer />
    </main>
  );
}
