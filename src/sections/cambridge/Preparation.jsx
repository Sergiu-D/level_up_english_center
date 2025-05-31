import { motion } from "framer-motion";
import Image from "next/image";

export default function Preparation() {
  const preparationSteps = [
    {
      title: "Evaluare inițială",
      description: "Determinăm nivelul actual de engleză și obiectivele tale pentru a crea un plan personalizat de pregătire.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "Cursuri specializate",
      description: "Participi la cursuri structurate cu focus pe toate componentele examenului: Reading, Writing, Listening și Speaking.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Simulări de examen",
      description: "Practici cu teste în condiții similare examenului real pentru a te familiariza cu formatul și timpul alocat.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Feedback personalizat",
      description: "Primești feedback detaliat pentru fiecare componentă a examenului, cu focus pe îmbunătățirea punctelor slabe.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      title: "Strategii de examen",
      description: "Înveți tehnici specifice pentru fiecare tip de exercițiu din examen pentru a maximiza scorul.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Înscriere la examen",
      description: "Te asistăm în procesul de înscriere la examenul Cambridge, oferind toate informațiile necesare.",
      icon: (
        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
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
            Cum te <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">pregătim</span> pentru succes
          </h2>
          <p className="text-lg text-gray-600">
            La Level Up, oferim un program complet de pregătire pentru examenele Cambridge, adaptat nivelului și nevoilor tale specifice.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Metodologia noastră Cambridge</h3>
            <p className="text-gray-600">
              Programele noastre de pregătire pentru examenele Cambridge sunt dezvoltate de profesori cu experiență, certificați Cambridge, folosind materiale originale și cele mai eficiente metode de predare.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Materiale originale Cambridge University Press</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Profesori certificați cu experiență în pregătirea pentru examene</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Grupe mici (maximum 8 cursanți) pentru atenție individualizată</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Platformă online cu resurse suplimentare și exerciții practice</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 mt-0.5">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Rată de promovare de peste 95% pentru cursanții noștri</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/cambridge-preparation.jpg"
                alt="Pregătire Cambridge"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="font-bold">Rezultate dovedite</p>
              </div>
              <p className="text-sm text-gray-600">Peste 500 de cursanți au obținut certificări Cambridge cu ajutorul nostru în ultimii 5 ani.</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {preparationSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
