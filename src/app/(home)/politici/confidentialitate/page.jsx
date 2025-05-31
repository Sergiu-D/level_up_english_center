import React from 'react';

export const metadata = {
  title: 'Politica de Confidențialitate | Level Up English Center',
  description: 'Politica de confidențialitate a Level Up English Center - Află cum protejăm datele tale personale.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Politica de Confidențialitate</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">
            Ultima actualizare: 31 Mai 2025
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introducere</h2>
          <p>
            Level Up English Center ("noi", "nouă", "al nostru") se angajează să protejeze confidențialitatea datelor dumneavoastră personale. Această Politică de Confidențialitate descrie modul în care colectăm, utilizăm și protejăm informațiile personale pe care ni le furnizați prin intermediul site-ului nostru web și al serviciilor noastre.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Informațiile pe care le colectăm</h2>
          <p>
            Putem colecta următoarele tipuri de informații personale:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Informații de identificare (nume, prenume)</li>
            <li>Informații de contact (adresă de e-mail, număr de telefon)</li>
            <li>Informații demografice (vârstă, nivel de educație)</li>
            <li>Informații despre progresul educațional</li>
            <li>Date de utilizare a site-ului web</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Cum utilizăm informațiile dumneavoastră</h2>
          <p>
            Utilizăm informațiile personale colectate pentru:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Furnizarea serviciilor educaționale solicitate</li>
            <li>Comunicarea cu dumneavoastră despre cursuri, evenimente și oferte</li>
            <li>Procesarea plăților și gestionarea contului dumneavoastră</li>
            <li>Îmbunătățirea serviciilor și a experienței utilizatorilor</li>
            <li>Respectarea obligațiilor legale</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Temeiul legal pentru prelucrare</h2>
          <p>
            Prelucrăm datele dumneavoastră personale în baza următoarelor temeiuri legale:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Executarea contractului de prestări servicii educaționale</li>
            <li>Consimțământul dumneavoastră explicit</li>
            <li>Interesele noastre legitime, atât timp cât acestea nu afectează drepturile și libertățile dumneavoastră</li>
            <li>Conformitatea cu obligațiile legale</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Păstrarea și securitatea datelor</h2>
          <p>
            Păstrăm datele dumneavoastră personale doar atât timp cât este necesar pentru scopurile pentru care au fost colectate sau conform cerințelor legale. Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele dumneavoastră împotriva accesului neautorizat, pierderii sau distrugerii accidentale.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Drepturile dumneavoastră</h2>
          <p>
            În conformitate cu legislația privind protecția datelor, aveți următoarele drepturi:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Dreptul de acces la datele personale</li>
            <li>Dreptul la rectificarea datelor inexacte</li>
            <li>Dreptul la ștergerea datelor ("dreptul de a fi uitat")</li>
            <li>Dreptul la restricționarea prelucrării</li>
            <li>Dreptul la portabilitatea datelor</li>
            <li>Dreptul de a vă opune prelucrării</li>
            <li>Dreptul de a nu face obiectul unei decizii bazate exclusiv pe prelucrarea automată</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Transferuri internaționale de date</h2>
          <p>
            În general, stocăm și prelucrăm datele dumneavoastră personale în România. Cu toate acestea, anumite servicii terțe pe care le utilizăm pot transfera și procesa datele în afara Spațiului Economic European (SEE). În astfel de cazuri, ne asigurăm că transferurile se realizează în conformitate cu reglementările aplicabile privind protecția datelor.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Modificări ale Politicii de Confidențialitate</h2>
          <p>
            Ne rezervăm dreptul de a actualiza această Politică de Confidențialitate periodic pentru a reflecta modificările practicilor noastre de prelucrare a datelor sau pentru a respecta noi cerințe legale. Vă încurajăm să verificați periodic această pagină pentru a fi la curent cu ultimele informații.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact</h2>
          <p>
            Dacă aveți întrebări sau preocupări cu privire la această Politică de Confidențialitate sau la modul în care prelucrăm datele dumneavoastră personale, vă rugăm să ne contactați la:
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
