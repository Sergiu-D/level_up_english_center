"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Team() {
  const teamMembers = [
    {
      name: "Maria Popescu",
      role: "Director & Fondator",
      bio: "Cu peste 15 ani de experiență în predarea limbii engleze și certificare Cambridge CELTA, Maria a fondat Level Up cu viziunea de a oferi educație de calitate folosind metodologia Cambridge.",
      image: "/images/team/director.jpg",
      social: {
        linkedin: "https://linkedin.com/",
        email: "maria@levelup.ro"
      }
    },
    {
      name: "Andrei Ionescu",
      role: "Profesor Senior",
      bio: "Andrei este specializat în pregătirea pentru examenele Cambridge FCE și CAE. Cu o experiență de 10 ani și un masterat în lingvistică aplicată, el aduce pasiune și expertiză în fiecare clasă.",
      image: "/images/team/senior-teacher.jpg",
      social: {
        linkedin: "https://linkedin.com/",
        email: "andrei@levelup.ro"
      }
    },
    {
      name: "Elena Dumitrescu",
      role: "Profesor pentru Copii",
      bio: "Cu o specializare în pedagogie și psihologie infantilă, Elena creează lecții interactive și distractive pentru cei mici, folosind jocuri educaționale și activități creative.",
      image: "/images/team/children-teacher.jpg",
      social: {
        linkedin: "https://linkedin.com/",
        email: "elena@levelup.ro"
      }
    },
    {
      name: "Mihai Stancu",
      role: "Profesor pentru Adolescenți",
      bio: "Mihai are o abordare modernă și relevantă pentru adolescenți, integrând tehnologia și cultura contemporană în lecțiile sale de engleză pentru a menține elevii motivați și implicați.",
      image: "/images/team/teen-teacher.jpg",
      social: {
        linkedin: "https://linkedin.com/",
        email: "mihai@levelup.ro"
      }
    },
    {
      name: "Alexandra Radu",
      role: "Profesor pentru Adulți",
      bio: "Alexandra este specializată în Business English și pregătirea pentru interviuri în limba engleză. Experiența sa în corporații internaționale aduce un plus de valoare cursurilor pentru adulți.",
      image: "/images/team/adult-teacher.jpg",
      social: {
        linkedin: "https://linkedin.com/",
        email: "alexandra@levelup.ro"
      }
    },
    {
      name: "Cristina Marin",
      role: "Coordonator Academic",
      bio: "Cristina supraveghează calitatea programelor educaționale și dezvoltă curriculum-ul Level Up. Cu un doctorat în educație, ea asigură alinierea cursurilor la standardele Cambridge.",
      image: "/images/team/academic-coordinator.jpg",
      social: {
        linkedin: "https://linkedin.com/",
        email: "cristina@levelup.ro"
      }
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Echipa <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">noastră</span>
          </h2>
          <p className="text-lg text-gray-600">
            Cunoaște profesorii și personalul Level Up care se dedică zilnic excelenței în educație și succesului elevilor noștri.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                <p className="mb-4 text-sm font-medium text-purple-600">{member.role}</p>
                <p className="mb-4 text-gray-600">{member.bio}</p>
                <div className="flex gap-4">
                  <Link
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 transition-colors hover:text-blue-600"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </Link>
                  <Link
                    href={`mailto:${member.social.email}`}
                    className="text-gray-500 transition-colors hover:text-blue-600"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link 
            href="/contact" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
          >
            Contactează echipa noastră
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
