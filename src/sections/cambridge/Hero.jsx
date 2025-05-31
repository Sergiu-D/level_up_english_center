"use client";

import { animate } from "@motionone/dom";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function CambridgeHero() {
  // Create refs for animated elements
  const contentRef = useRef(null);
  const imageContainerRef = useRef(null);
  const floatingBadgeRef = useRef(null);
  
  useEffect(() => {
    // Content animation
    if (contentRef.current) {
      animate(contentRef.current, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5 });
    }
    
    // Image container animation
    if (imageContainerRef.current) {
      animate(imageContainerRef.current, { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.5, delay: 0.2 });
    }
    
    // Floating badge animation
    if (floatingBadgeRef.current) {
      animate(floatingBadgeRef.current, { y: [20, 0], opacity: [0, 1] }, { delay: 0.5, duration: 0.5 });
    }
  }, []);
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/4">
        <div className="h-[300px] w-[300px] rounded-full bg-gradient-to-r from-blue-200/30 to-purple-200/30 blur-3xl" />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/4">
        <div className="h-[250px] w-[250px] rounded-full bg-gradient-to-r from-purple-200/30 to-blue-200/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div
            ref={contentRef}
            className="opacity-0"
          >
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Examene <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Cambridge</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600 md:text-xl">
              Pregătire specializată pentru toate nivelurile de examene Cambridge, de la Young Learners până la Proficiency, cu profesori certificați și materiale originale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#exam-types" 
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-medium text-white transition-all hover:shadow-lg"
              >
                Tipuri de examene
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 rounded-full border border-blue-600 bg-white px-6 py-3 font-medium text-blue-600 transition-all hover:bg-blue-50"
              >
                Înscrie-te acum
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-2">
                <Image 
                  src="/images/cambridge/cae.jpg" 
                  alt="Cambridge Assessment English" 
                  width={80} 
                  height={40}
                  className="h-auto w-auto object-contain"
                />
                <span className="text-sm font-medium text-gray-500">Partener oficial</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-500">Rată de promovare 95%</span>
              </div>
            </div>
          </div>

          <div
            ref={imageContainerRef}
            className="relative opacity-0"
          >
            <div className="relative mx-auto aspect-[4/3] overflow-hidden rounded-2xl shadow-xl md:ml-auto md:mr-0">
              <Image
                src="/images/home/cambridge-exam.jpg"
                alt="Examen Cambridge"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-lg font-bold">Certificare internațională</p>
                <p className="text-sm">Recunoscută în peste 25,000 de instituții la nivel global</p>
              </div>
            </div>
            
            {/* Floating badge */}
            <div
              ref={floatingBadgeRef}
              className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-lg md:-left-10 opacity-0"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Pregătire intensivă</p>
                  <p className="text-lg font-bold">8-12 săptămâni</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
