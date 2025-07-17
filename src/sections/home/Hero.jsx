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
    
    // Animate background shapes
    document.querySelectorAll('.animated-shape').forEach((shape, index) => {
      const delay = index * 0.05; // Very short delay between shapes
      const duration = 4 + Math.random() * 6; // Much faster animation (4-10 seconds)
      
      // Initial animation to fade in and position
      animate(shape, { opacity: [0, 0.85] }, { duration: 0.5, delay }); // Faster fade-in with higher opacity
      
      // Continuous floating animation
      const floatAnimation = () => {
        const xMove = 20 + Math.random() * 30; // Much larger movement range
        const yMove = 20 + Math.random() * 30; // Much larger movement range
        const rotateAmount = 15 + Math.random() * 25; // More rotation
        
        animate(
          shape, 
          { 
            x: [`${Math.random() > 0.5 ? '' : '-'}${xMove}px`, `${Math.random() > 0.5 ? '' : '-'}${xMove}px`],
            y: [`${Math.random() > 0.5 ? '' : '-'}${yMove}px`, `${Math.random() > 0.5 ? '' : '-'}${yMove}px`],
            rotate: [`${Math.random() > 0.5 ? '' : '-'}${rotateAmount}deg`, `${Math.random() > 0.5 ? '' : '-'}${rotateAmount}deg`]
          }, 
          { 
            duration, 
            easing: 'ease-in-out',
            repeat: Infinity,
            direction: 'alternate'
          }
        );
      };
      
      floatAnimation();
    });
  }, []);
  
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-blue-200 via-indigo-300 to-purple-400">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blurred gradient circles in background */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100 opacity-50 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-purple-100 opacity-50 blur-3xl"></div>
        
        {/* Animated geometric shapes */}
        <div className="animated-shape absolute top-[10%] right-[15%] w-16 h-16 border-4 border-blue-200 rounded-lg rotate-12 opacity-0"></div>
        <div className="animated-shape absolute top-[20%] left-[10%] w-20 h-20 bg-blue-100 rounded-full opacity-0"></div>
        <div className="animated-shape absolute bottom-[30%] right-[20%] w-24 h-24 border-4 border-purple-200 rounded-full opacity-0"></div>
        <div className="animated-shape absolute top-[40%] right-[30%] w-12 h-12 bg-purple-100 rounded-lg rotate-45 opacity-0"></div>
        <div className="animated-shape absolute bottom-[15%] left-[25%] w-16 h-16 border-4 border-blue-200 rotate-12 opacity-0"></div>
        
        {/* Triangle shapes */}
        <div className="animated-shape absolute top-[15%] left-[30%] opacity-0">
          <div className="w-0 h-0 border-l-[20px] border-l-transparent border-b-[35px] border-b-blue-100 border-r-[20px] border-r-transparent"></div>
        </div>
        <div className="animated-shape absolute bottom-[25%] right-[10%] opacity-0">
          <div className="w-0 h-0 border-l-[15px] border-l-transparent border-b-[25px] border-b-purple-100 border-r-[15px] border-r-transparent"></div>
        </div>
        
        {/* Plus shapes */}
        <div className="animated-shape absolute top-[60%] right-[40%] opacity-0">
          <div className="relative w-16 h-4 bg-blue-100"></div>
          <div className="absolute top-[-6px] left-[6px] w-4 h-16 bg-blue-100"></div>
        </div>
        <div className="animated-shape absolute top-[25%] left-[40%] opacity-0">
          <div className="relative w-12 h-3 bg-purple-100"></div>
          <div className="absolute top-[-4.5px] left-[4.5px] w-3 h-12 bg-purple-100"></div>
        </div>
        
        {/* Zigzag line */}
        <div className="animated-shape absolute bottom-[40%] left-[15%] w-24 h-8 opacity-0">
          <svg width="100%" height="100%" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10 L20 0 L40 20 L60 0 L80 20 L100 10" stroke="#DBEAFE" strokeWidth="4" />
          </svg>
        </div>
        
        {/* Circle with dot */}
        <div className="animated-shape absolute top-[70%] right-[25%] opacity-0">
          <div className="w-12 h-12 rounded-full border-2 border-purple-200 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-purple-200"></div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pt-20 md:pt-28 lg:pt-36 pb-10 lg:pb-32 relative z-10">
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
            
            {/* <div className="flex items-center justify-center lg:justify-start space-x-4 pt-6">
              <div className="flex -space-x-2">
                <Image src="/images/about/teacher-1.jpg" width={40} height={40} className="rounded-full border-2 border-white" alt="Student" />
                <Image src="/images/about/teacher-2.jpg" width={40} height={40} className="rounded-full border-2 border-white" alt="Student" />
                <Image src="/images/about/teacher-3.jpg" width={40} height={40} className="rounded-full border-2 border-white" alt="Student" />
              </div>
              <p className="text-sm text-gray-600">Peste <span className="font-bold">500+</span> de elevi mulțumiți</p>
            </div> */}
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
