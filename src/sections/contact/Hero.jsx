"use client";

import { animate } from "@motionone/dom";
import { useEffect, useRef } from "react";

export default function ContactHero() {
  // Create ref for the animated content
  const contentRef = useRef(null);
  
  useEffect(() => {
    // Content animation
    if (contentRef.current) {
      animate(contentRef.current, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5 });
    }
  }, []);
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 md:py-20">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/4">
        <div className="h-[300px] w-[300px] rounded-full bg-gradient-to-r from-blue-200/30 to-purple-200/30 blur-3xl" />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/4">
        <div className="h-[250px] w-[250px] rounded-full bg-gradient-to-r from-purple-200/30 to-blue-200/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div
          ref={contentRef}
          className="max-w-3xl mx-auto text-center opacity-0"
        >
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Contactează-ne</span>
          </h1>
          <p className="mb-8 text-lg text-gray-600 md:text-xl">
            Suntem aici pentru a răspunde întrebărilor tale și pentru a te ajuta să găsești cursul potrivit pentru tine sau copilul tău.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+40721234567" 
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition-all hover:bg-blue-700"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Sună-ne acum
            </a>
            <a 
              href="#contact-form" 
              className="inline-flex items-center gap-2 rounded-full border border-blue-600 bg-white px-6 py-3 font-medium text-blue-600 transition-all hover:bg-blue-50"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Trimite un mesaj
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
