import Hero from "@/sections/home/Hero";
import Features from "@/sections/home/Features";
import Lessons from "@/sections/home/Lessons";
import Contact from "@/sections/home/Contact";
import CambridgeMethodology from "@/sections/home/CambridgeMethodology";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Features />
      <CambridgeMethodology />
      <Lessons />
      <Contact />
    </main>
  );
}
