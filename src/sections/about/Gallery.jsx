"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const galleryImages = [
    {
      src: "/images/gallery/classroom-1.jpg",
      alt: "Sala de clasă Level Up",
      caption: "Sala noastră principală de clasă"
    },
    {
      src: "/images/gallery/students-learning.jpg",
      alt: "Elevi în timpul cursului",
      caption: "Elevi participând activ la curs"
    },
    {
      src: "/images/gallery/cambridge-exam.jpg",
      alt: "Pregătire pentru examenul Cambridge",
      caption: "Sesiune de pregătire pentru examenul Cambridge"
    },
    {
      src: "/images/gallery/group-activity.jpg",
      alt: "Activitate de grup",
      caption: "Activitate interactivă de grup"
    },
    {
      src: "/images/gallery/teacher-student.jpg",
      alt: "Profesor și elev",
      caption: "Interacțiune individuală profesor-elev"
    },
    {
      src: "/images/gallery/celebration.jpg",
      alt: "Celebrarea succesului",
      caption: "Celebrarea reușitei la examenele Cambridge"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Galerie <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">foto</span>
          </h2>
          <p className="text-lg text-gray-600">
            Explorați atmosfera și activitățile de la Level Up prin intermediul galeriei noastre foto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-0 p-4 text-white">
                    <p className="font-medium">{image.caption}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[80vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video h-full w-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white">
                <p className="text-center font-medium">{selectedImage.caption}</p>
              </div>
              <button
                className="absolute -right-4 -top-4 rounded-full bg-white p-2 text-gray-900 shadow-lg"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
