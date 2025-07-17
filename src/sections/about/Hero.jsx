"use client";

import { animate } from "@motionone/dom";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AboutHero() {
  // Create refs for all animated elements
  const contentRef = useRef(null);
  const imageContainerRef = useRef(null);
  const badgeRef = useRef(null);
  
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
    if (badgeRef.current) {
      animate(badgeRef.current, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, delay: 0.5 });
    }
  }, []);
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 pt-28 md:pt-32 lg:pt-36 pb-10 lg:pb-32">
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
              Despre <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Level Up</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600 md:text-xl">
              Suntem o școală de limba engleză dedicată excelenței academice, folosind metodologia Cambridge pentru a oferi cursuri de calitate pentru toate vârstele.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                Metodologie Cambridge
              </div>
              <div className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
                Profesori calificați
              </div>
              <div className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                Grupe mici
              </div>
              <div className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
                Rezultate excelente
              </div>
            </div>
          </div>

          <div
            ref={imageContainerRef}
            className="relative opacity-0"
          >
            <div className="relative mx-auto aspect-[4/3] overflow-hidden rounded-2xl shadow-xl md:ml-auto md:mr-0">
              <Image
                src="/images/about/motivational_picture_2.jpg"
                alt="Echipa Level Up"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Floating badge */}
            <div
              ref={badgeRef}
              className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-lg md:-left-10 opacity-0"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Din 2015</p>
                  <p className="text-lg font-bold">Experiență dovedită</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
