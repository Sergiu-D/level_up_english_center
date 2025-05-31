import React from 'react';

export const metadata = {
  title: 'Termeni și Condiții | Level Up English Center',
  description: 'Termenii și condițiile Level Up English Center - Informații despre utilizarea serviciilor noastre.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Termeni și Condiții</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">
            Ultima actualizare: 31 Mai 2025
          </p>

          <p>
            Vă rugăm să citiți cu atenție acești Termeni și Condiții înainte de a utiliza site-ul web și serviciile Level Up English Center.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptarea Termenilor</h2>
          <p>
            Prin accesarea sau utilizarea site-ului nostru web, înscrierea la cursuri sau utilizarea serviciilor noastre, confirmați că ați citit, înțeles și sunteți de acord să respectați acești Termeni și Condiții, precum și Politica noastră de Confidențialitate și Politica de Cookies.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Descrierea Serviciilor</h2>
          <p>
            Level Up English Center oferă cursuri de limba engleză pentru diverse niveluri și grupe de vârstă, pregătire pentru examene Cambridge, materiale educaționale și alte servicii conexe. Ne rezervăm dreptul de a modifica, suspenda sau întrerupe orice aspect al serviciilor noastre în orice moment, cu sau fără notificare prealabilă.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Înregistrarea și Conturile Utilizatorilor</h2>
          <p>
            Pentru a vă înscrie la cursurile noastre sau pentru a accesa anumite funcționalități ale site-ului, este posibil să fie necesar să vă creați un cont. Sunteți responsabil pentru menținerea confidențialității informațiilor de autentificare și pentru toate activitățile care au loc în contul dumneavoastră. Vă angajați să ne notificați imediat cu privire la orice utilizare neautorizată a contului dumneavoastră.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Taxe și Plăți</h2>
          <p>
            Tarifele pentru cursurile și serviciile noastre sunt afișate pe site-ul nostru sau comunicate direct în timpul procesului de înscriere. Toate plățile sunt procesate în conformitate cu metodele de plată specificate și sunt, în general, nerambursabile, cu excepția cazurilor prevăzute în mod specific în acești termeni sau conform legislației aplicabile.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Politica de Anulare și Rambursare</h2>
          <p>
            Puteți anula înscrierea la un curs cu cel puțin 7 zile înainte de data de începere pentru a primi o rambursare completă. Anulările efectuate cu mai puțin de 7 zile înainte de data de începere pot fi eligibile pentru o rambursare parțială sau un credit pentru cursuri viitoare, la discreția noastră. Nu se oferă rambursări pentru cursurile care au început deja, cu excepția circumstanțelor excepționale.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Codul de Conduită</h2>
          <p>
            Participanții la cursurile noastre trebuie să respecte un cod de conduită care include, dar nu se limitează la:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Respectarea profesorilor, personalului și a celorlalți cursanți</li>
            <li>Participarea activă și respectarea programului cursurilor</li>
            <li>Abținerea de la comportamente perturbatoare sau discriminatorii</li>
            <li>Respectarea proprietății intelectuale și a materialelor de curs</li>
          </ul>
          <p>
            Ne rezervăm dreptul de a exclude participanții care încalcă în mod repetat acest cod de conduită, fără rambursarea taxelor.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Proprietatea Intelectuală</h2>
          <p>
            Toate materialele de curs, conținutul site-ului web, logo-urile, mărcile comerciale și alte materiale furnizate ca parte a serviciilor noastre sunt proprietatea Level Up English Center sau a licențiatorilor săi și sunt protejate de legile privind drepturile de autor și proprietatea intelectuală. Nu aveți permisiunea să reproduceți, distribuiți sau creați lucrări derivate bazate pe aceste materiale fără consimțământul nostru explicit.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Limitarea Răspunderii</h2>
          <p>
            În măsura permisă de lege, Level Up English Center nu va fi răspunzător pentru daune indirecte, incidentale, speciale, consecutive sau punitive, inclusiv pierderi de profit, date sau utilizare, care rezultă din utilizarea sau incapacitatea de a utiliza serviciile noastre.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Modificări ale Termenilor</h2>
          <p>
            Ne rezervăm dreptul de a modifica acești Termeni și Condiții în orice moment. Modificările vor intra în vigoare imediat după publicarea lor pe site-ul nostru. Utilizarea continuă a serviciilor noastre după astfel de modificări constituie acceptarea noilor termeni.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Legea Aplicabilă</h2>
          <p>
            Acești Termeni și Condiții sunt guvernați de legile României. Orice dispută care decurge din sau în legătură cu acești termeni va fi supusă jurisdicției exclusive a instanțelor din București, România.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact</h2>
          <p>
            Dacă aveți întrebări sau preocupări cu privire la acești Termeni și Condiții, vă rugăm să ne contactați la:
          </p>
          <p className="mt-4">
            <strong>Level Up English Center</strong><br />
            Adresă: Str. Academiei 35, București<br />
            Email: contact@levelup.ro<br />
            Telefon: (+40) 721-234-567
          </p>
        </div>
      </div>
    </div>
  );
}
