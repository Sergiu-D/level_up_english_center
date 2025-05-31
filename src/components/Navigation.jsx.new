"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { animate } from '@motionone/dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate mobile menu when it opens/closes
  useEffect(() => {
    if (isOpen && mobileMenuRef.current) {
      animate(
        mobileMenuRef.current, 
        { opacity: [0, 1], y: [-20, 0] }, 
        { duration: 0.3 }
      );
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: '/', label: 'Acasă' },
    { href: '/despre-noi', label: 'Despre noi' },
    { href: '/cambridge', label: 'Cambridge' },
    { href: '/adulti', label: 'Adulți' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Level Up
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Înscrie-te acum
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
              aria-label={isOpen ? 'Închide meniul' : 'Deschide meniul'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 opacity-0"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition-opacity text-center"
                onClick={() => setIsOpen(false)}
              >
                Înscrie-te acum
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
