import CambridgeHero from "@/sections/cambridge/Hero";
import CambridgeIntro from "@/sections/cambridge/Intro";
import ExamTypes from "@/sections/cambridge/ExamTypes";
import Preparation from "@/sections/cambridge/Preparation";
import Testimonials from "@/sections/cambridge/Testimonials";
import FAQ from "@/sections/cambridge/FAQ";

export const metadata = {
  title: "Examene Cambridge | Level Up - Școală de Engleză",
  description: "Pregătire specializată pentru examenele Cambridge: YLE, KET, PET, FCE, CAE și CPE. Metodologie Cambridge și materiale originale pentru rezultate excelente.",
};

export default function CambridgePage() {
  return (
    <main>
      <CambridgeHero />
      <CambridgeIntro />
      <ExamTypes />
      <Preparation />
      <Testimonials />
      <FAQ />
    </main>
  );
}
