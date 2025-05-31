"use client";

import { animate, inView } from "@motionone/dom";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function CambridgeIntro() {
  // Create refs for animated elements
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
        animate(leftContentRef.current, { opacity: [0, 1], x: [-20, 0] }, { duration: 0.6 });
        return () => {};
      });
    }
    
    // Right content animation
    if (rightContentRef.current) {
      inView(rightContentRef.current, () => {
        animate(rightContentRef.current, { opacity: [0, 1], x: [20, 0] }, { duration: 0.6, delay: 0.2 });
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
            De ce să alegi <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">examenele Cambridge</span>
          </h2>
          <p className="text-lg text-gray-600">
            Certificările Cambridge sunt recunoscute la nivel global și reprezintă un standard de excelență în evaluarea competențelor de limba engleză.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={leftContentRef}
            className="relative opacity-0"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/cambridge/cpe.jpg"
                alt="Certificat Cambridge"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="font-bold">Certificare pe viață</p>
              </div>
              <p className="text-sm text-gray-600">Certificatele Cambridge nu expiră niciodată și sunt recunoscute pe tot parcursul vieții.</p>
            </div>
          </div>

          <div
            ref={rightContentRef}
            className="space-y-6 opacity-0"
          >
            <h3 className="text-2xl font-bold mb-4">Beneficiile certificărilor Cambridge</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Oportunități profesionale</h4>
                  <p className="text-gray-700">
                    Certificările Cambridge sunt recunoscute de angajatori din întreaga lume și pot deschide noi oportunități de carieră.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Admitere universitară</h4>
                  <p className="text-gray-700">
                    Peste 25.000 de universități, angajatori și instituții guvernamentale din întreaga lume recunosc certificările Cambridge.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Imigrare</h4>
                  <p className="text-gray-700">
                    Multe țări acceptă certificările Cambridge ca dovadă a competențelor lingvistice pentru vize de studiu sau de muncă.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Evaluare completă</h4>
                  <p className="text-gray-700">
                    Examenele Cambridge evaluează toate competențele lingvistice: citit, scris, ascultat și vorbit, oferind o evaluare completă.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
