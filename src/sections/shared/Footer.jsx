import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <Link className="text-xl font-bold" href="/">
              Logo
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            <Link className="text-sm hover:underline" href="/despre-noi">
              Despre Noi
            </Link>
            <Link className="text-sm hover:underline" href="/contact">
              Contactează Ne
            </Link>
            <Link className="text-sm hover:underline" href="/faq">
              Întrebări Frecvente
            </Link>
            <Link className="text-sm hover:underline" href="/resurse">
              Resurse Utile
            </Link>
            <Link className="text-sm hover:underline" href="/blog">
              Blog Educațional
            </Link>
          </nav>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <Link
              href="https://facebook.com"
              className="hover:opacity-75"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://instagram.com"
              className="hover:opacity-75"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com"
              className="hover:opacity-75"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="hover:opacity-75"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://youtube.com"
              className="hover:opacity-75"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-500">
              © 2024 Relume. Toate drepturile rezervate.
            </p>
            <nav className="flex flex-col gap-4 md:flex-row md:gap-6">
              <Link
                className="text-sm text-gray-500 hover:underline"
                href="/politica-confidentialitate"
              >
                Politica Confidențialitate
              </Link>
              <Link
                className="text-sm text-gray-500 hover:underline"
                href="/conditii-utilizare"
              >
                Condiții de Utilizare
              </Link>
              <Link
                className="text-sm text-gray-500 hover:underline"
                href="/setari-cookies"
              >
                Setări Cookies
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
