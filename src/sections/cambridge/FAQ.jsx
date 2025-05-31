
"use client";

import { animate, inView } from "@motionone/dom";
import { useState, useEffect, useRef } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Care este diferența între examenele Cambridge și alte examene de limba engleză?",
      answer: "Examenele Cambridge sunt recunoscute la nivel global și evaluează toate competențele lingvistice (citit, scris, ascultat și vorbit). Spre deosebire de alte examene, certificările Cambridge nu expiră niciodată și sunt recunoscute de peste 25.000 de instituții din întreaga lume, inclusiv universități, angajatori și agenții guvernamentale. De asemenea, examenele Cambridge sunt dezvoltate pe baza Cadrului European Comun de Referință pentru Limbi (CECR), oferind o evaluare precisă a nivelului de competență lingvistică."
    },
    {
      question: "Cât timp durează pregătirea pentru un examen Cambridge?",
      answer: "Durata pregătirii depinde de nivelul actual de engleză al cursantului și de examenul vizat. În general, recomandăm: 3-4 luni pentru A2 Key/B1 Preliminary (cu 2 ședințe săptămânale), 4-6 luni pentru B2 First (cu 2 ședințe săptămânale), și 6-8 luni pentru C1 Advanced/C2 Proficiency (cu 2 ședințe săptămânale). La Level Up, oferim o evaluare inițială gratuită pentru a determina timpul necesar de pregătire în funcție de nivelul și obiectivele fiecărui cursant."
    },
    {
      question: "Care sunt costurile asociate cu examenele Cambridge?",
      answer: "Costurile includ taxa de curs la Level Up (variază în funcție de durata și intensitatea pregătirii) și taxa de examen percepută de British Council sau alt centru autorizat Cambridge. Taxele de examen variază în funcție de nivelul examenului: aproximativ 400-500 RON pentru A2 Key/B1 Preliminary, 600-700 RON pentru B2 First, și 700-800 RON pentru C1 Advanced/C2 Proficiency. La Level Up, oferim pachete complete care includ materialele de studiu, simulările de examen și asistență pentru înscrierea la examen."
    },
    {
      question: "Unde se desfășoară examenele Cambridge?",
      answer: "Examenele Cambridge se desfășoară în centre autorizate de examinare, precum British Council sau alte instituții acreditate. În România, există centre de examinare în București, Cluj-Napoca, Iași, Timișoara și alte orașe mari. La Level Up, colaborăm cu aceste centre și oferim asistență completă în procesul de înscriere la examen, inclusiv informații despre datele disponibile și locațiile de examinare."
    },
    {
      question: "Ce se întâmplă dacă nu promovez examenul Cambridge?",
      answer: "Dacă nu promovezi examenul, poți să-l susții din nou la o dată ulterioară. La Level Up, oferim cursanților care nu promovează examenul posibilitatea de a continua pregătirea cu un program personalizat, concentrându-ne pe ariile care necesită îmbunătățire. De asemenea, analizăm rezultatele detaliate ale examenului pentru a identifica punctele slabe și a adapta strategia de pregătire. Rata noastră de promovare este de peste 95%, dar în cazul nepromovării, suntem alături de cursanți până la atingerea obiectivului."
    },
    {
      question: "Cum se evaluează examenele Cambridge?",
      answer: "Examenele Cambridge evaluează cele patru competențe lingvistice: Reading and Use of English (citit și utilizarea limbii), Writing (scris), Listening (ascultat) și Speaking (vorbit). Fiecare componentă are o pondere specifică în scorul final. Rezultatele sunt exprimate în note (A, B, C) și în punctaje pe scala Cambridge English Scale. Pentru promovare, este necesară obținerea unui scor minim atât la nivel global, cât și la fiecare componentă individuală. Evaluarea pentru proba de Speaking se face de către doi examinatori certificați Cambridge, iar celelalte componente sunt evaluate în Cambridge, Marea Britanie."
    },
    {
      question: "Pot să mă pregătesc pentru un examen Cambridge dacă am un nivel începător de engleză?",
      answer: "Da, dar recomandăm să începi cu cursuri generale de engleză pentru a-ți construi o bază solidă înainte de a te concentra specific pe pregătirea pentru examene. La Level Up, oferim programe complete care te pot ghida de la nivel începător până la nivelul dorit pentru certificare. După atingerea unui nivel A1-A2 (elementar), poți începe pregătirea pentru primul examen Cambridge, cum ar fi A2 Key. Evaluarea noastră inițială gratuită te va ajuta să determini punctul optim de start și traseul educațional potrivit pentru tine."
    },
    {
      question: "Există limită de vârstă pentru examenele Cambridge?",
      answer: "Nu există o limită superioară de vârstă pentru examenele Cambridge. Pentru copii și adolescenți, există examene specifice adaptate vârstei: Young Learners (Starters, Movers, Flyers) pentru copii între 7-12 ani și versiunile 'for Schools' ale examenelor A2 Key, B1 Preliminary și B2 First, special concepute pentru elevi. La Level Up, avem grupe organizate pe categorii de vârstă și nivel, asigurând o experiență de învățare optimă pentru fiecare cursant, indiferent de vârstă."
    }
  ];

  const headerRef = useRef(null);
  const faqItemsRef = useRef([]);
  const ctaRef = useRef(null);
  
  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      inView(headerRef.current, () => {
        animate(headerRef.current, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 });
        return () => {};
      });
    }
    
    // FAQ items animation
    if (faqItemsRef.current.length > 0) {
      inView(faqItemsRef.current, (info) => {
        animate(info.target, 
          { opacity: [0, 1], y: [20, 0] },
          { delay: Array.from(faqItemsRef.current).indexOf(info.target) * 0.1, duration: 0.5 }
        );
        return () => {};
      });
    }
    
    // CTA animation
    if (ctaRef.current) {
      inView(ctaRef.current, () => {
        animate(ctaRef.current, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6, delay: 0.4 });
        return () => {};
      });
    }
  }, []);
  
  // Reset refs when FAQ items change
  useEffect(() => {
    faqItemsRef.current = faqItemsRef.current.slice(0, faqs.length);
  }, [faqs.length]);
  
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className="max-w-3xl mx-auto mb-16 text-center opacity-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Întrebări <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">frecvente</span>
          </h2>
          <p className="text-lg text-gray-600">
            Răspunsuri la cele mai comune întrebări despre examenele Cambridge și programele noastre de pregătire.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={el => faqItemsRef.current[index] = el}
              className="mb-4 opacity-0"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className={`w-full flex justify-between items-center p-5 rounded-lg text-left transition-all ${
                  openIndex === index
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-900"
                }`}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium">{faq.question}</span>
                <svg
                  className={`h-5 w-5 transition-transform ${openIndex === index ? "transform rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 border border-t-0 border-gray-200 rounded-b-lg bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          ref={ctaRef}
          className="mt-12 text-center opacity-0"
        >
          <p className="text-gray-600 mb-6">
            Ai alte întrebări despre examenele Cambridge sau programele noastre de pregătire?
          </p>
          <a 
            href="/contact" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
          >
            Contactează-ne
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
