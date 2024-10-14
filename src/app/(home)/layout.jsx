import localFont from "next/font/local";
import "../globals.css";

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

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="max-w-8xl mx-auto">
          <Navigation />
        </header>
        {/* See the ./template.jsx for the main element */}
          {children}
        <footer className="max-w-8xl mx-auto">Footer section</footer>
      </body>
    </html>
  );
}
