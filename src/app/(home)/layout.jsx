
import localFont from "next/font/local";
import "../globals.css";
import Footer from "@/sections/shared/Footer"

import Navigation from "@/components/Navigation";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Level Up | Centru educațional de limba engleză cu metodologie Cambridge",
  description: "Cursuri de limba engleză pentru copii, adolescenți și adulți folosind metodologia Cambridge. Pregătire pentru examene KET, PET și alte certificări Cambridge.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-blue-50 to-purple-50`}
      >
        <header className="max-w-8xl mx-auto">
          <Navigation />
        </header>
        {/* See the ./template.jsx for the main element */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
