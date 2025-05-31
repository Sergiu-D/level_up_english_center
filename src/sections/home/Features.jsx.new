"use client";

import Image from "next/image";
import { animate, inView } from "@motionone/dom";
import { useEffect, useRef } from "react";

export default function Features() {
  // Create refs for all animated elements
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const featureRefs = useRef([]);
  
  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      inView(headerRef.current, () => {
        animate(headerRef.current, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 });
        return () => {};
      });
    }
    
    // Image animation
    if (imageRef.current) {
      inView(imageRef.current, () => {
        animate(imageRef.current, { opacity: [0, 1], x: [-20, 0] }, { duration: 0.8 });
        return () => {};
      });
    }
    
    // Feature cards animation
    if (featureRefs.current.length > 0) {
      featureRefs.current.forEach((ref, index) => {
        if (ref) {
          inView(ref, () => {
            animate(ref, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, delay: 0.1 * (index + 1) });
            return () => {};
          });
        }
      });
    }
  }, []);
  
  // Reset refs when component updates
  useEffect(() => {
    featureRefs.current = featureRefs.current.slice(0, 4); // We have 4 feature cards
  }, []);
  
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div 
          ref={headerRef}
          className="text-center mb-16 opacity-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            De ce să alegi <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Level Up</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Misiunea noastră este să cultivăm pasiunea pentru învățarea limbii engleze și să pregătim cursanți pentru a deveni cetățeni globali, informați și responsabili.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div 
            ref={imageRef}
            className="relative opacity-0"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/why-level-up.jpg"
                alt="Elevi la cursurile Level Up"
                className="w-full h-auto object-cover"
                width={600}
                height={500}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6">
                  <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-3">
                    Experiență dovedită
                  </div>
                  <h3 className="text-white text-xl font-semibold">
                    Peste 5 ani de excelență în predarea limbii engleze
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Feature Cards */}
            <div 
              ref={el => featureRefs.current[0] = el}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-0"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">
                    Profesori calificați și experimentați
                  </h3>
                  <p className="text-gray-600">
                    Echipa noastră este formată din profesori calificați, cu experiență internațională și certificări Cambridge, dedicați succesului elevilor noștri.
                  </p>
                </div>
              </div>
            </div>

            <div 
              ref={el => featureRefs.current[1] = el}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-0"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">
                    Grupe mici de studiu
                  </h3>
                  <p className="text-gray-600">
                    Grupăm elevii în funcție de vârstă și nivel de cunoștințe, în clase de maximum 8-10 elevi, pentru a asigura atenție personalizată fiecărui cursant.
                  </p>
                </div>
              </div>
            </div>

            <div 
              ref={el => featureRefs.current[2] = el}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-0"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">
                    Materiale didactice de calitate
                  </h3>
                  <p className="text-gray-600">
                    Utilizăm manuale și resurse Cambridge originale, completate cu materiale interactive și moderne, adaptate nivelului și intereselor elevilor.
                  </p>
                </div>
              </div>
            </div>

            <div 
              ref={el => featureRefs.current[3] = el}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-0"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">
                    Rezultate dovedite
                  </h3>
                  <p className="text-gray-600">
                    Elevii noștri obțin rezultate excelente la examenele Cambridge, cu o rată de promovabilitate de peste 95% și progres vizibil în comunicarea în limba engleză.
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
