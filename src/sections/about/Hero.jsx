"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[4/3] overflow-hidden rounded-2xl shadow-xl md:ml-auto md:mr-0">
              <Image
                src="/images/about-hero.jpg"
                alt="Echipa Level Up"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-lg md:-left-10"
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
