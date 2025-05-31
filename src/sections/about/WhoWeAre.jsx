"use client";

import { animate, inView } from "@motionone/dom";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function WhoWeAre() {
  // Create refs for all animated elements
  const headerRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  
  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      inView(headerRef.current, () => {
        animate(headerRef.current, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 });
        return () => {};
      });
    }
    
    // Left content animation
    if (leftContentRef.current) {
      inView(leftContentRef.current, () => {
        animate(leftContentRef.current, { opacity: [0, 1], x: [-20, 0] }, { duration: 0.8 });
        return () => {};
      });
    }
    
    // Right content animation
    if (rightContentRef.current) {
      inView(rightContentRef.current, () => {
        animate(rightContentRef.current, { opacity: [0, 1], x: [20, 0] }, { duration: 0.8, delay: 0.2 });
        return () => {};
      });
    }
  }, []);
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className="max-w-3xl mx-auto mb-16 text-center opacity-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cine <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">suntem</span>
          </h2>
          <p className="text-lg text-gray-600">
            Level Up este o școală de limba engleză cu o abordare modernă, dedicată dezvoltării abilităților lingvistice prin metodologia Cambridge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={leftContentRef}
            className="space-y-6 opacity-0"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Misiunea noastră</h3>
              <p className="text-gray-600">
                Misiunea Level Up este să oferim educație de calitate în limba engleză pentru toate vârstele, folosind metodologii moderne și interactive care inspiră și motivează elevii să-și atingă potențialul maxim.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Viziunea noastră</h3>
              <p className="text-gray-600">
                Ne dorim să devenim liderul în educația limbii engleze în România, recunoscut pentru excelență academică, abordare inovatoare și rezultate remarcabile ale elevilor noștri la examenele Cambridge.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Valorile noastre</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Excelență:</strong> Ne străduim să oferim cea mai bună educație și experiență de învățare.</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Inovație:</strong> Adoptăm metode moderne și interactive de predare.</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Respect:</strong> Tratăm fiecare elev cu respect și atenție individualizată.</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Comunitate:</strong> Creăm un mediu de învățare colaborativ și prietenos.</span>
                </li>
              </ul>
            </div>
          </div>

          <div 
            ref={rightContentRef}
            className="space-y-8 opacity-0"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Povestea noastră
              </h3>
              <div className="mb-6 relative h-48 rounded-lg overflow-hidden">
                <Image 
                  src="/images/about/who-we-are.jpg" 
                  alt="Echipa Level Up" 
                  fill 
                  className="object-cover"
                />
              </div>
              <p className="text-gray-600 mb-4">
                Level Up a fost fondată în 2015 de către un grup de profesori pasionați de limba engleză și metodologia Cambridge. Am început cu doar două clase și am crescut constant, ajungând astăzi să avem peste 300 de elevi anual.
              </p>
              <p className="text-gray-600">
                Ne mândrim cu rezultatele remarcabile ale elevilor noștri la examenele Cambridge și cu feedback-ul pozitiv primit de la părinți și elevi de-a lungul anilor.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                De ce să alegi Level Up
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Profesori calificați cu experiență internațională</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Materiale didactice originale Cambridge</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Grupe mici (maximum 8-10 elevi)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Pregătire specializată pentru examene Cambridge</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Mediu de învățare prietenos și motivant</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
