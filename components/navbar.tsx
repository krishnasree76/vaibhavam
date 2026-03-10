'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/menu', label: 'Menu' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex justify-between items-center h-16">
    
    {/* Logo */}
    <Link href="/" className="flex items-center gap-2 group">
      
      <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-lg transition-transform group-hover:scale-105">
        V
      </div>

      <span className="font-bold text-lg text-primary">
        Vaibhavam Caterers
      </span>

    </Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a href="tel:+1234567890" className="hidden sm:flex items-center gap-2 text-primary hover:text-secondary transition-colors">
              <Phone size={20} />
              <span className="text-sm font-semibold">+1 (234) 567-890</span>
            </a>
            <Button className="hidden sm:inline-flex bg-primary hover:bg-secondary text-white">
              Book Now
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-card py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium px-4"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-2 border-t border-border">
                <a href="tel:+1234567890" className="flex items-center gap-2 text-primary hover:text-secondary transition-colors py-2">
                  <Phone size={20} />
                  <span className="text-sm font-semibold">Call Us</span>
                </a>
              </div>
              <Button className="mx-4 w-auto bg-primary hover:bg-secondary text-white">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
