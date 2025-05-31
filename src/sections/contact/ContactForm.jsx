"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    courseType: ""
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Mesajul tău a fost trimis cu succes! Te vom contacta în curând."
    });
    
    // In a real application, you would send the form data to a server here
    // For example:
    // fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })
    // .then(response => response.json())
    // .then(data => {
    //   setFormStatus({
    //     submitted: true,
    //     success: true,
    //     message: "Mesajul tău a fost trimis cu succes! Te vom contacta în curând."
    //   });
    // })
    // .catch(error => {
    //   setFormStatus({
    //     submitted: true,
    //     success: false,
    //     message: "A apărut o eroare. Te rugăm să încerci din nou."
    //   });
    // });
  };

  return (
    <section id="contact-form" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto md:mx-0 md:ml-auto"
        >
          <h2 className="text-3xl font-bold mb-6">
            Trimite-ne un <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">mesaj</span>
          </h2>
          
          {formStatus.submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-6 p-4 rounded-lg ${formStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
            >
              {formStatus.message}
            </motion.div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nume complet *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Numele tău complet"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="email@exemplu.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="07XX XXX XXX"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="courseType" className="block text-sm font-medium text-gray-700 mb-1">
                Tipul de curs care te interesează
              </label>
              <select
                id="courseType"
                name="courseType"
                value={formData.courseType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option value="">Selectează un curs</option>
                <option value="children">Cursuri pentru copii (6-10 ani)</option>
                <option value="teenagers">Cursuri pentru adolescenți</option>
                <option value="adults">Cursuri pentru adulți</option>
                <option value="cambridge">Pregătire examene Cambridge</option>
                <option value="other">Altele</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subiect *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Subiectul mesajului"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mesaj *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Detaliile mesajului tău..."
              />
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Trimite mesajul
              </button>
            </div>
            
            <p className="text-sm text-gray-500">
              * Câmpuri obligatorii. Datele tale sunt protejate conform politicii noastre de confidențialitate.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
