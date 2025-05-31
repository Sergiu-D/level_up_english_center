import { Mail, Phone, MapPin } from 'lucide-react'
import Link from "next/link"

export default function Contact() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 md:gap-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contactați-ne</h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Ne puteți contacta pentru orice informație suplimentară.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-12">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 mt-1" />
                <div className="space-y-2">
                  <h3 className="font-bold">Email</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Scrieți-ne la adresa</p>
                  <Link 
                    href="mailto:contact@exemplu.ro"
                    className="inline-block text-primary hover:underline"
                  >
                    contact@exemplu.ro
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 mt-1" />
                <div className="space-y-2">
                  <h3 className="font-bold">Telefon</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Apelați-ne la numărul</p>
                  <Link 
                    href="tel:+40123456789"
                    className="inline-block text-primary hover:underline"
                  >
                    +40 (123) 456-7890
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 mt-1" />
                <div className="space-y-2">
                  <h3 className="font-bold">Birou</h3>
                  <p className="text-gray-500 dark:text-gray-400">Str. Exemplu 123, București, România</p>
                  <Link 
                    href="https://maps.google.com"
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    Obțineți indicații
                    <span className="sr-only">Deschide harta cu indicații către biroul nostru</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="aspect-video md:aspect-auto md:h-full min-h-[400px] w-full rounded-lg bg-gray-100 dark:bg-gray-800">
              {/* Map placeholder - Replace with your actual map implementation */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

