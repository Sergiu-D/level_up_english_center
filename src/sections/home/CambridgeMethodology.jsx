"use client";

import Image from "next/image";
import Link from "next/link";
import { animate, inView } from "@motionone/dom";
import { useEffect, useRef } from "react";

const features = [
  {
    title: "Abordare centrată pe elev",
    description: "Metodologia Cambridge pune elevul în centrul procesului de învățare, adaptându-se la nevoile și ritmul fiecăruia.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Dezvoltarea competențelor de comunicare",
    description: "Accentul se pune pe dezvoltarea abilităților practice de comunicare în limba engleză, nu doar pe teorie.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    title: "Materiale autentice și interactive",
    description: "Utilizăm materiale autentice și interactive care stimulează interesul și motivația elevilor.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Evaluare continuă și feedback",
    description: "Oferim evaluare continuă și feedback constructiv pentru a monitoriza progresul și a identifica ariile de îmbunătățire.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
];

export default function CambridgeMethodology() {
  // Create refs for animated elements
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const featureRefs = useRef([]);
  const ctaRef = useRef(null);
  
  useEffect(() => {
    // Title animation
    if (titleRef.current) {
      inView(titleRef.current, () => {
        animate(titleRef.current, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 });
        return () => {};
      });
    }
    
    // Description animation
    if (descriptionRef.current) {
      inView(descriptionRef.current, () => {
        animate(descriptionRef.current, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6, delay: 0.1 });
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
    
    // Features animation
    if (featureRefs.current.length > 0) {
      featureRefs.current.forEach((ref, index) => {
        if (ref) {
          inView(ref, () => {
            animate(ref, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, delay: index * 0.1 });
            return () => {};
          });
        }
      });
    }
    
    // CTA animation
    if (ctaRef.current) {
      inView(ctaRef.current, () => {
        animate(ctaRef.current, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, delay: 0.5 });
        return () => {};
      });
    }
  }, []);
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 opacity-0"
          >
            De ce metodologia <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Cambridge</span>?
          </h2>
          <p 
            ref={descriptionRef}
            className="text-lg text-gray-600 max-w-3xl mx-auto opacity-0"
          >
            Metodologia Cambridge este recunoscută la nivel mondial pentru eficiența sa în predarea limbii engleze. 
            La Level Up, am adoptat această metodologie pentru a oferi elevilor noștri cea mai bună experiență de învățare.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div 
            ref={imageRef}
            className="relative opacity-0"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/cambridge-methodology.jpg"
                alt="Metodologia Cambridge la Level Up"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6">
                  <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-3">
                    Certificare internațională
                  </div>
                  <h3 className="text-white text-xl font-semibold">
                    Pregătire pentru examene Cambridge KET, PET și alte niveluri
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                ref={el => featureRefs.current[index] = el}
                className="flex gap-4 opacity-0"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}

            <div 
              ref={ctaRef}
              className="mt-8 opacity-0"
            >
              <Link 
                href="/cambridge" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Află mai multe despre metodologia Cambridge
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
