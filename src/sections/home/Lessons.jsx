"use client";

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CourseSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cursuri pentru toate <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">vârstele și nivelurile</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            La Level Up, oferim cursuri de limba engleză adaptate pentru toate categoriile de vârstă și niveluri de cunoștințe, folosind metodologia Cambridge.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                Aventura ta Cambridge începe acum
              </h3>
              <p className="text-gray-600">
                Fiecare curs este conceput pentru a dezvolta toate abilitățile lingvistice esențiale: vorbire, ascultare, citire și scriere, într-un mediu interactiv și prietenos.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Grupe mici de maximum 8-10 elevi</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Materiale didactice originale Cambridge</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Pregătire pentru examene internaționale</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Profesori calificați cu experiență internațională</span>
                </li>
              </ul>
              <div className="pt-4">
                <Link 
                  href="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 inline-block"
                >
                  Înscrie-te acum
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Course Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {/* Copii (6-10 ani) */}
            <Link
              href="/cambridge"
              className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src="/images/copii-curs.jpg"
                alt="Cursuri de engleză pentru copii (6-10 ani)"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                width={400}
                height={300}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-blue-900/20 group-hover:from-blue-900/90 transition-colors duration-300">
                <div className="absolute bottom-0 p-5 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    Copii (6-10 ani)
                  </h3>
                  <p className="text-sm opacity-90 line-clamp-3">
                    Cursuri interactive și distractive pentru cei mici, adaptate vârstei și nivelului lor, cu accent pe învățarea prin joc și activități creative.
                  </p>
                </div>
              </div>
            </Link>

            {/* Adolescenți */}
            <Link
              href="/cambridge"
              className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src="/images/adolescenti-curs.jpg"
                alt="Cursuri de engleză pentru adolescenți"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                width={400}
                height={300}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-purple-900/20 group-hover:from-purple-900/90 transition-colors duration-300">
                <div className="absolute bottom-0 p-5 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    Adolescenți
                  </h3>
                  <p className="text-sm opacity-90 line-clamp-3">
                    Cursuri specializate pentru adolescenți, cu focus pe dezvoltarea abilităților de comunicare și pregătire pentru examene Cambridge.
                  </p>
                </div>
              </div>
            </Link>

            {/* Adulți */}
            <Link
              href="/adulti"
              className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src="/images/adulti-curs.jpg"
                alt="Cursuri de engleză pentru adulți"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                width={400}
                height={300}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-blue-900/20 group-hover:from-blue-900/90 transition-colors duration-300">
                <div className="absolute bottom-0 p-5 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    Adulți
                  </h3>
                  <p className="text-sm opacity-90 line-clamp-3">
                    Cursuri flexibile pentru adulți, adaptate programului încărcat, cu accent pe conversație, vocabular de business și situații din viața reală.
                  </p>
                </div>
              </div>
            </Link>

            {/* Examene Cambridge */}
            <Link
              href="/cambridge"
              className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src="/images/cambridge-exam.jpg"
                alt="Pregătire pentru examene Cambridge"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                width={400}
                height={300}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-purple-900/20 group-hover:from-purple-900/90 transition-colors duration-300">
                <div className="absolute bottom-0 p-5 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    Examene Cambridge
                  </h3>
                  <p className="text-sm opacity-90 line-clamp-3">
                    Pregătire specializată pentru examenele Cambridge (KET, PET, FCE), cu simulări de examen și strategii de rezolvare a testelor.
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

