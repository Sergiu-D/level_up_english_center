"use client";

import { animate, inView } from "@motionone/dom";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Andreea Popescu",
      role: "Studentă, Universitatea București",
      exam: "C1 Advanced (CAE)",
      image: "/images/about/teacher-1.jpg",
      quote: "Datorită pregătirii intensive de la Level Up, am obținut un scor excelent la examenul CAE, care mi-a permis să obțin o bursă Erasmus. Profesorii sunt extraordinari și metodele de predare foarte eficiente!",
      score: "Grade A (200/210)"
    },
    {
      name: "Mihai Ionescu",
      role: "Elev, Clasa a XI-a",
      exam: "B2 First for Schools (FCE)",
      image: "/images/about/teacher-2.jpg",
      quote: "Am început cursurile la Level Up cu 6 luni înainte de examenul FCE și am fost uimit de cât de mult am progresat. Simulările de examen m-au ajutat enorm să mă familiarizez cu formatul și să-mi gestionez timpul eficient.",
      score: "Grade B (173/190)"
    },
    {
      name: "Elena Dumitrescu",
      role: "Manager HR",
      exam: "C1 Business Higher",
      image: "/images/about/teacher-3.jpg",
      quote: "Ca profesionist în domeniul HR, aveam nevoie de o certificare de Business English pentru avansarea în carieră. Cursurile de la Level Up au fost perfect adaptate nevoilor mele, cu focus pe vocabularul și situațiile din mediul corporativ.",
      score: "Grade A (195/210)"
    },
    {
      name: "Alexandru Marin",
      role: "Elev, Clasa a VIII-a",
      exam: "B1 Preliminary for Schools (PET)",
      image: "/images/about/teacher-4.jpg",
      quote: "Îmi era frică de examenul PET, dar profesorii de la Level Up m-au ajutat să-mi depășesc anxietatea și să mă concentrez pe învățare. Atmosfera prietenoasă și activitățile interactive au făcut pregătirea foarte plăcută.",
      score: "Pass with Distinction"
    },
    {
      name: "Maria Stancu",
      role: "Părinte",
      exam: "A2 Flyers (YLE)",
      image: "/images/about/teacher-1.jpg",
      quote: "Fiica mea de 11 ani a participat la cursurile pentru Young Learners și a adorat fiecare sesiune. Profesorii știu cum să facă învățarea distractivă pentru copii, iar rezultatele au fost peste așteptările noastre.",
      score: "15 scuturi din 15 posibile"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const headerRef = useRef(null);
  const testimonialRef = useRef(null);
  
  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      inView(headerRef.current, () => {
        animate(headerRef.current, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 });
        return () => {};
      });
    }
    
    // Testimonial animation setup
    if (testimonialRef.current) {
      inView(testimonialRef.current, () => {
        return () => {};
      });
    }
  }, []);
  
  useEffect(() => {
    // Animate testimonial change
    if (testimonialRef.current) {
      animate(testimonialRef.current, 
        { opacity: [0, 1], x: [20, 0] },
        { duration: 0.5 }
      );
    }
  }, [activeIndex]);
  
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className="max-w-3xl mx-auto mb-16 text-center opacity-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ce spun <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">cursanții noștri</span>
          </h2>
          <p className="text-lg text-gray-600">
            Descoperă poveștile de succes ale absolvenților noștri care au obținut certificări Cambridge cu ajutorul Level Up.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            key={activeIndex}
            ref={testimonialRef}
            className="bg-white rounded-xl shadow-lg overflow-hidden opacity-0"
          >
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 relative">
                <div className="relative h-full min-h-[300px]">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:bg-gradient-to-r md:from-black/30 md:to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white md:hidden">
                    <p className="font-bold text-xl">{testimonials[activeIndex].name}</p>
                    <p className="text-sm opacity-90">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="hidden md:block mb-6">
                    <p className="font-bold text-2xl">{testimonials[activeIndex].name}</p>
                    <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-700 italic mb-4">
                      &ldquo;{testimonials[activeIndex].quote}&rdquo;
                    </blockquote>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-between items-center">
                  <div className="mb-4 md:mb-0">
                    <p className="text-sm text-gray-500">Examen promovat</p>
                    <p className="font-semibold text-purple-700">{testimonials[activeIndex].exam}</p>
                    <p className="text-sm font-medium text-green-600 mt-1">Rezultat: {testimonials[activeIndex].score}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                      aria-label="Mărturia anterioară"
                    >
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                      aria-label="Mărturia următoare"
                    >
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 mx-1 rounded-full transition-all ${
                  index === activeIndex ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Mărturia ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
