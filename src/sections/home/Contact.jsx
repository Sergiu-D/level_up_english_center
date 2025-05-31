"use client";

import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import Link from "next/link"
import { animate, inView } from "@motionone/dom"
import { useEffect, useRef } from "react"
import Image from "next/image"

export default function Contact() {
  // Create refs for animated elements
  const headerRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const ctaRef = useRef(null);
  
  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      inView(headerRef.current, () => {
        animate(headerRef.current, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 });
        return () => {};
      });
    }
    
    // Left column animation
    if (leftColumnRef.current) {
      inView(leftColumnRef.current, () => {
        animate(leftColumnRef.current, { opacity: [0, 1], x: [-20, 0] }, { duration: 0.8 });
        return () => {};
      });
    }
    
    // Right column animation
    if (rightColumnRef.current) {
      inView(rightColumnRef.current, () => {
        animate(rightColumnRef.current, { opacity: [0, 1], x: [20, 0] }, { duration: 0.8, delay: 0.2 });
        return () => {};
      });
    }
    
    // CTA animation
    if (ctaRef.current) {
      inView(ctaRef.current, () => {
        animate(ctaRef.current, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6, delay: 0.4 });
        return () => {};
      });
    }
  }, []);
  
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div 
          ref={headerRef}
          className="text-center mb-16 max-w-3xl mx-auto opacity-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Contactați-ne</span> pentru informații
          </h2>
          <p className="text-lg text-gray-600">
            Suntem aici pentru a răspunde la toate întrebările dumneavoastră despre cursurile noastre de limba engleză. Nu ezitați să ne contactați!
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <div 
            ref={leftColumnRef}
            className="bg-white p-8 rounded-xl shadow-lg opacity-0"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg text-white">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-sm text-gray-500">Scrieți-ne la adresa</p>
                  <Link 
                    href="mailto:contact@levelup.ro"
                    className="inline-block text-blue-600 hover:text-blue-800 font-medium"
                  >
                    contact@levelup.ro
                  </Link>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg text-white">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">Telefon</h3>
                  <p className="text-sm text-gray-500">Apelați-ne la numărul</p>
                  <Link 
                    href="tel:+40721234567"
                    className="inline-block text-blue-600 hover:text-blue-800 font-medium"
                  >
                    +40 721 234 567
                  </Link>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg text-white">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">Adresă</h3>
                  <p className="text-gray-600">Str. Academiei 35, București, România</p>
                  <Link 
                    href="https://maps.google.com/?q=Strada+Academiei+35+București"
                    target="_blank"
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Obțineți indicații
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg text-white">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">Program</h3>
                  <p className="text-gray-600">Luni - Vineri: 9:00 - 19:00</p>
                  <p className="text-gray-600">Sâmbătă: 10:00 - 14:00</p>
                  <p className="text-gray-600">Duminică: Închis</p>
                </div>
              </div>
            </div>
          </div>
          <div 
            ref={rightColumnRef}
            className="overflow-hidden rounded-xl shadow-lg h-full min-h-[450px] opacity-0 relative">
            <Image 
              src="/images/contact/office.jpg"
              alt="Sediul Level Up English Center"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white font-bold text-xl mb-2">Vizitați-ne la sediu</h3>
              <p className="text-white/90 mb-4">Strada Academiei 35, București</p>
              <Link 
                href="https://maps.google.com/?q=Strada+Academiei+35+București"
                target="_blank"
                className="inline-flex items-center gap-1 text-white font-medium bg-blue-600/90 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
              >
                Obțineți indicații
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        <div 
          ref={ctaRef}
          className="mt-16 text-center opacity-0"
        >
          <Link 
            href="/contact" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
          >
            Contactează-ne pentru detalii complete
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
