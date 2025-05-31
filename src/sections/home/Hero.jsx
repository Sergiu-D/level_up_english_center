"use client";

import Image from "next/image";
import Link from "next/link";
import { animate } from "@motionone/dom";
import { useEffect, useRef } from "react";

export default function Hero() {
  // Create refs for all animated elements
  const textContentRef = useRef(null);
  const imageContainerRef = useRef(null);
  const badgeBottomRef = useRef(null);
  const badgeTopRef = useRef(null);
  
  useEffect(() => {
    // Text content animation
    if (textContentRef.current) {
      animate(textContentRef.current, { opacity: [0, 1], y: [20, 0] }, { duration: 0.8 });
    }
    
    // Image container animation
    if (imageContainerRef.current) {
      animate(imageContainerRef.current, { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.8, delay: 0.2 });
    }
    
    // Bottom badge animation
    if (badgeBottomRef.current) {
      animate(badgeBottomRef.current, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, delay: 0.8 });
    }
    
    // Top badge animation
    if (badgeTopRef.current) {
      animate(badgeTopRef.current, { opacity: [0, 1], y: [-20, 0] }, { duration: 0.5, delay: 1 });
    }
  }, []);
  
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100 opacity-50 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-purple-100 opacity-50 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div 
            ref={textContentRef}
            className="flex flex-col space-y-6 text-center lg:text-left opacity-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Învață engleza într-un mod{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                distractiv, simplu și eficient!
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700">
              Pregătire Cambridge pentru copii, adolescenți și adulți, într-un mediu educațional modern și prietenos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300"
              >
                Înscrie-te acum
              </Link>
              <Link 
                href="/cambridge" 
                className="bg-white text-gray-800 font-medium py-3 px-8 rounded-full border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                Află mai multe
              </Link>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-4 pt-6">
              <div className="flex -space-x-2">
                <Image src="/images/about/teacher-1.jpg" width={40} height={40} className="rounded-full border-2 border-white" alt="Student" />
                <Image src="/images/about/teacher-2.jpg" width={40} height={40} className="rounded-full border-2 border-white" alt="Student" />
                <Image src="/images/about/teacher-3.jpg" width={40} height={40} className="rounded-full border-2 border-white" alt="Student" />
              </div>
              <p className="text-sm text-gray-600">Peste <span className="font-bold">500+</span> de elevi mulțumiți</p>
            </div>
          </div>
          
          {/* Image */}
          <div
            ref={imageContainerRef}
            className="relative opacity-0"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/home/hero.jpg"
                alt="Elevi Level Up învățând engleza"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            
            {/* Floating badges */}
            <div 
              ref={badgeBottomRef}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg z-20 opacity-0"
            >
              <div className="flex items-center space-x-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-800">Metodologie Cambridge</p>
                  <p className="text-sm text-gray-600">Recunoscută internațional</p>
                </div>
              </div>
            </div>
            
            <div 
              ref={badgeTopRef}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg z-20 opacity-0"
            >
              <div className="flex items-center space-x-2">
                <div className="bg-purple-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-800">Profesori certificați</p>
                  <p className="text-sm text-gray-600">Experiență internațională</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
