"use client";

import { animate, inView } from "@motionone/dom";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function ExamTypes() {
  const [activeTab, setActiveTab] = useState("young-learners");
  
  const examTypes = {
    "young-learners": {
      title: "Young Learners (YLE)",
      description: "Examene concepute special pentru copii cu vârste între 7 și 12 ani, oferind o introducere distractivă și motivantă în limba engleză.",
      levels: [
        {
          name: "Pre A1 Starters",
          age: "7-8 ani",
          description: "Primul pas în învățarea limbii engleze, dezvoltând încrederea copiilor prin activități distractive.",
          image: "/images/cambridge/ket.jpg"
        },
        {
          name: "A1 Movers",
          age: "8-10 ani",
          description: "Al doilea nivel, care consolidează vocabularul de bază și structurile gramaticale simple.",
          image: "/images/cambridge/pet.jpg"
        },
        {
          name: "A2 Flyers",
          age: "10-12 ani",
          description: "Nivelul superior pentru copii, care pregătește pentru examenele Cambridge ulterioare.",
          image: "/images/cambridge/fce.jpg"
        }
      ]
    },
    "schools": {
      title: "Pentru Școli și Adolescenți",
      description: "Examene pentru elevi de gimnaziu și liceu, evaluând competențele lingvistice necesare în contexte educaționale.",
      levels: [
        {
          name: "A2 Key for Schools (KET)",
          age: "12-14 ani",
          description: "Certifică abilitatea de a folosi engleza în situații simple și cotidiene.",
          image: "/images/cambridge/ket.jpg"
        },
        {
          name: "B1 Preliminary for Schools (PET)",
          age: "14-16 ani",
          description: "Demonstrează capacitatea de a comunica în situații practice de zi cu zi.",
          image: "/images/cambridge/pet.jpg"
        },
        {
          name: "B2 First for Schools (FCE)",
          age: "15-18 ani",
          description: "Certifică abilitatea de a folosi engleza scrisă și vorbită la un nivel intermediar-avansat.",
          image: "/images/cambridge/fce.jpg"
        }
      ]
    },
    "general": {
      title: "Pentru Adulți și Studenți",
      description: "Examene pentru adulți și studenți, recunoscute la nivel global pentru studii universitare, imigrare și dezvoltare profesională.",
      levels: [
        {
          name: "B2 First (FCE)",
          age: "16+ ani",
          description: "Demonstrează că poți folosi engleza scrisă și vorbită la un nivel intermediar-avansat în contexte profesionale și academice.",
          image: "/images/cambridge/fce.jpg"
        },
        {
          name: "C1 Advanced (CAE)",
          age: "16+ ani",
          description: "Certifică un nivel avansat de engleză, necesar pentru studii universitare și cariere profesionale.",
          image: "/images/cambridge/cae.jpg"
        },
        {
          name: "C2 Proficiency (CPE)",
          age: "18+ ani",
          description: "Cel mai înalt nivel de certificare, demonstrând stăpânirea limbii engleze la un nivel aproape de vorbitorii nativi.",
          image: "/images/cambridge/cpe.jpg"
        }
      ]
    },
    "business": {
      title: "Business English",
      description: "Examene specializate pentru mediul de afaceri, certificând competențele de comunicare în contexte profesionale.",
      levels: [
        {
          name: "B1 Business Preliminary",
          age: "16+ ani",
          description: "Certifică abilitatea de a folosi engleza în contexte de afaceri de bază.",
          image: "/images/cambridge/business-preliminary.jpg"
        },
        {
          name: "B2 Business Vantage",
          age: "16+ ani",
          description: "Demonstrează capacitatea de a comunica eficient în mediul de afaceri la nivel intermediar-avansat.",
          image: "/images/cambridge/business-vantage.jpg"
        },
        {
          name: "C1 Business Higher",
          age: "16+ ani",
          description: "Certifică un nivel avansat de engleză de afaceri, necesar pentru roluri de management și leadership.",
          image: "/images/cambridge/business-higher.jpg"
        }
      ]
    }
  };

  const headerRef = useRef(null);
  const tabsRef = useRef(null);
  const contentRef = useRef(null);
  
  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      inView(headerRef.current, () => {
        animate(headerRef.current, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 });
        return () => {};
      });
    }
    
    // Tabs animation
    if (tabsRef.current) {
      inView(tabsRef.current, () => {
        animate(tabsRef.current, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, delay: 0.2 });
        return () => {};
      });
    }
    
    // Content animation
    if (contentRef.current) {
      inView(contentRef.current, () => {
        animate(contentRef.current, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, delay: 0.3 });
        return () => {};
      });
    }
  }, []);
  
  // Re-animate content when tab changes
  useEffect(() => {
    if (contentRef.current) {
      animate(contentRef.current, 
        { opacity: [0.5, 1], x: [10, 0] },
        { duration: 0.3 }
      );
    }
  }, [activeTab]);
  
  return (
    <section id="exam-types" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className="max-w-3xl mx-auto mb-16 text-center opacity-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tipuri de <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">examene Cambridge</span>
          </h2>
          <p className="text-lg text-gray-600">
            Cambridge oferă o gamă completă de examene pentru toate vârstele și nivelurile, de la începători până la niveluri avansate.
          </p>
        </div>

        <div className="mb-12">
          <div 
            ref={tabsRef}
            className="flex flex-wrap justify-center gap-2 md:gap-4 opacity-0"
          >
            {Object.keys(examTypes).map((type) => (
              <button
                key={type}
                onClick={() => setActiveTab(type)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-all ${
                  activeTab === type
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {examTypes[type].title}
              </button>
            ))}
          </div>
        </div>

        <div
          key={activeTab}
          ref={contentRef}
          className="bg-white rounded-xl shadow-md overflow-hidden opacity-0"
        >
          <div className="p-6 md:p-8 border-b border-gray-100">
            <h3 className="text-2xl font-bold mb-2">{examTypes[activeTab].title}</h3>
            <p className="text-gray-600">{examTypes[activeTab].description}</p>
          </div>
          
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {examTypes[activeTab].levels.map((level, index) => (
              <div key={index} className="p-6 md:p-8">
                <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={level.image}
                    alt={level.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold mb-1">{level.name}</h4>
                <p className="text-sm text-purple-600 font-medium mb-3">Vârstă recomandată: {level.age}</p>
                <p className="text-gray-600 mb-4">{level.description}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Află mai multe
                  <svg className="ml-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={useRef(null)}
          className="mt-12 text-center"
        >
          <Link 
            href="/contact" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
          >
            Înscrie-te la un curs de pregătire
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
