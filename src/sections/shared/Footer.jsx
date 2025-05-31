import Link from "next/link";
import { Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="container px-4 md:px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Link className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" href="/">
              Level Up
            </Link>
            <p className="text-gray-600 mt-2">Centru educațional de limba engleză cu metodologie Cambridge, dedicat copiilor, adolescenților și adulților.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Navigare</h3>
            <nav className="flex flex-col gap-3">
              <Link className="text-gray-600 hover:text-blue-600 transition-colors" href="/">
                Acasă
              </Link>
              <Link className="text-gray-600 hover:text-blue-600 transition-colors" href="/despre-noi">
                Despre Noi
              </Link>
              <Link className="text-gray-600 hover:text-blue-600 transition-colors" href="/cambridge">
                Cambridge
              </Link>
              <Link className="text-gray-600 hover:text-blue-600 transition-colors" href="/adulti">
                Adulți
              </Link>
              <Link className="text-gray-600 hover:text-blue-600 transition-colors" href="/contact">
                Contact
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Cursuri</h3>
            <nav className="flex flex-col gap-3">
              <Link className="text-gray-600 hover:text-blue-600 transition-colors" href="/cambridge">
                Copii (6-10 ani)
              </Link>
              <Link className="text-gray-600 hover:text-blue-600 transition-colors" href="/cambridge">
                Adolescenți
              </Link>
              <Link className="text-gray-600 hover:text-blue-600 transition-colors" href="/adulti">
                Adulți
              </Link>
              <Link className="text-gray-600 hover:text-blue-600 transition-colors" href="/cambridge">
                Examene Cambridge
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                <span className="text-gray-600">Strada Exemplu 123, București</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                <span className="text-gray-600">+40 712 345 678</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                <span className="text-gray-600">contact@levelup.ro</span>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <Link
                  href="https://facebook.com"
                  className="text-blue-600 hover:opacity-75 transition-opacity"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="https://instagram.com"
                  className="text-blue-600 hover:opacity-75 transition-opacity"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-500">
              © 2024 Level Up. Toate drepturile rezervate.
            </p>
            <nav className="flex flex-col gap-4 md:flex-row md:gap-6">
              <Link
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                href="/politica-confidentialitate"
              >
                Politica de Confidențialitate
              </Link>
              <Link
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                href="/conditii-utilizare"
              >
                Termeni și Condiții
              </Link>
              <Link
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                href="/cookies"
              >
                Politica de Cookies
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
