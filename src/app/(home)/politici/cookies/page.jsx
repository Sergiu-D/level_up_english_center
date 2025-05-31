import React from 'react';

export const metadata = {
  title: 'Politica de Cookies | Level Up English Center',
  description: 'Politica de cookies a Level Up English Center - Informații despre utilizarea cookie-urilor pe site-ul nostru.',
};

export default function CookiePolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Politica de Cookies</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">
            Ultima actualizare: 31 Mai 2025
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Ce sunt cookie-urile?</h2>
          <p>
            Cookie-urile sunt fișiere text de mici dimensiuni care sunt stocate pe dispozitivul dumneavoastră (computer, tabletă, telefon mobil) atunci când vizitați un site web. Acestea permit site-ului să vă recunoască, să rețină preferințele și să vă ofere o experiență personalizată la fiecare vizită.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Tipuri de cookie-uri pe care le folosim</h2>
          <p>
            Site-ul Level Up English Center utilizează următoarele tipuri de cookie-uri:
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Cookie-uri esențiale</h3>
          <p>
            Aceste cookie-uri sunt necesare pentru funcționarea site-ului nostru. Ele vă permit să navigați pe site și să utilizați funcționalitățile de bază. Aceste cookie-uri nu colectează informații despre dumneavoastră care ar putea fi utilizate pentru marketing sau pentru a vă urmări activitatea pe internet.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Cookie-uri de preferințe</h3>
          <p>
            Aceste cookie-uri ne permit să reținem alegerile pe care le faceți (cum ar fi limba sau regiunea) și să vă oferim funcționalități îmbunătățite și personalizate. Informațiile colectate de aceste cookie-uri pot fi anonimizate și nu pot urmări activitatea dumneavoastră de navigare pe alte site-uri web.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Cookie-uri de statistică</h3>
          <p>
            Aceste cookie-uri ne ajută să înțelegem cum interacționează vizitatorii cu site-ul nostru, colectând și raportând informații în mod anonim. Ele ne ajută să măsurăm numărul de vizitatori, să vedem cum se deplasează vizitatorii pe site și să îmbunătățim performanța site-ului.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Cookie-uri de marketing</h3>
          <p>
            Aceste cookie-uri sunt utilizate pentru a urmări vizitatorii pe site-urile web. Intenția este de a afișa reclame relevante și atractive pentru utilizatorul individual și, prin urmare, mai valoroase pentru editorii și agenții de publicitate terți.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Cum gestionăm cookie-urile</h2>
          <p>
            Când vizitați site-ul nostru pentru prima dată, veți primi o notificare care vă va informa despre utilizarea cookie-urilor. Puteți alege să acceptați toate cookie-urile, să le respingeți pe cele care nu sunt esențiale sau să personalizați preferințele dumneavoastră.
          </p>
          <p>
            De asemenea, majoritatea browserelor web vă permit să controlați cookie-urile prin setările lor. Puteți seta browserul să refuze cookie-urile, să șteargă cookie-urile sau să vă avertizeze înainte de stocarea unui cookie. Vă rugăm să rețineți că, dacă alegeți să blocați toate cookie-urile, este posibil să nu puteți accesa toate funcționalitățile site-ului nostru.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookie-uri terțe</h2>
          <p>
            În plus față de cookie-urile proprii, este posibil să permitem unor terțe părți de încredere să plaseze cookie-uri pe dispozitivul dumneavoastră atunci când vizitați site-ul nostru. Aceste organizații pot include:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Furnizori de servicii de analiză (cum ar fi Google Analytics)</li>
            <li>Rețele sociale (cum ar fi Facebook, Twitter)</li>
            <li>Platforme de publicitate</li>
          </ul>
          <p>
            Aceste cookie-uri terțe sunt guvernate de politicile de confidențialitate ale organizațiilor respective și nu de această Politică de Cookies.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Durata de stocare a cookie-urilor</h2>
          <p>
            Cookie-urile de sesiune sunt temporare și rămân pe dispozitivul dumneavoastră doar până când închideți browserul. Cookie-urile persistente rămân pe dispozitivul dumneavoastră până când expiră sau până când le ștergeți manual. Durata de viață a cookie-urilor persistente variază în funcție de scopul lor și poate fi de la câteva minute la câțiva ani.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Modificări ale Politicii de Cookies</h2>
          <p>
            Ne rezervăm dreptul de a modifica această Politică de Cookies în orice moment. Orice modificări vor fi publicate pe această pagină și, dacă modificările sunt semnificative, vom furniza o notificare mai vizibilă. Vă încurajăm să verificați periodic această pagină pentru a fi la curent cu orice modificări.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact</h2>
          <p>
            Dacă aveți întrebări sau preocupări cu privire la utilizarea cookie-urilor pe site-ul nostru, vă rugăm să ne contactați la:
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
