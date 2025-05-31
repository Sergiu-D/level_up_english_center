import ContactHero from "@/sections/contact/Hero";
import ContactForm from "@/sections/contact/ContactForm";
import ContactInfo from "@/sections/contact/ContactInfo";
import Map from "@/sections/contact/Map";

export const metadata = {
  title: "Contact | Level Up - Școală de Engleză Cambridge",
  description: "Contactează-ne pentru a afla mai multe despre cursurile noastre de engleză sau pentru a te înscrie. Găsește-ne în București, Str. Academiei 35.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <div className="grid md:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
      <Map />
    </main>
  );
}
