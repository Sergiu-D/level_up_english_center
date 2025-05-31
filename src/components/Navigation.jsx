"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { animate } from '@motionone/dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

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
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Bar with Contact Info */}
      <div className={`w-full bg-transparent transition-all duration-300 ${scrolled ? 'hidden' : 'block'}`}>
        <div className="container mx-auto px-4 md:px-6 py-2">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <div className="flex items-center space-x-1">
                <Phone size={16} className="text-blue-600" />
                <span className="text-gray-700">(+40) 721-234-567</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail size={16} className="text-blue-600" />
                <span className="text-gray-700">contact@levelup.ro</span>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <MapPin size={16} className="text-blue-600" />
                <span className="text-gray-700">Str. Academiei 35, București</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      {/* <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? '' : 'pt-4'}`}> */}
      <nav className={`fixed w-full z-50 transition-all duration-300`}>
        <div className={`transition-all ${scrolled ? "w-full" : "container mx-auto px-4 md:px-6"}`}>
          <div className={`transition-all ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-white shadow-lg py-4 rounded-lg'}`}>
            <div className={`transition-all ${scrolled ? "container mx-auto px-4 md:px-6" : ""}`}>
              <div className="flex justify-between items-center px-4">
                <Link href="/" className="flex items-center">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Level Up
                  </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:items-center space-x-8">
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
                {/* <div className="md:hidden"> */}
                <div className="lg:hidden">
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
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden fixed top-[70px] left-0 right-0 opacity-0 z-50"
        >
          <div className="container mx-auto px-4">
            <div className="bg-white shadow-lg rounded-lg p-4">
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
        </div>
      )}
    </>
  );
};

export default Navigation;
