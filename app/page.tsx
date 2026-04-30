import { About } from "@/components/About";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Skills } from "@/components/Skills";

export default function HomePage() {
  return (
    <>
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Marquee />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
