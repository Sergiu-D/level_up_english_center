import AboutHero from "@/sections/about/Hero";
import WhoWeAre from "@/sections/about/WhoWeAre";
import Gallery from "@/sections/about/Gallery";
import Team from "@/sections/about/Team";

export const metadata = {
  title: "Despre noi | Level Up - Școală de Engleză Cambridge",
  description: "Află mai multe despre Level Up, școala de engleză care folosește metodologia Cambridge pentru a oferi cursuri de calitate pentru copii, adolescenți și adulți.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <WhoWeAre />
      <Gallery />
      <Team />
    </main>
  );
}
