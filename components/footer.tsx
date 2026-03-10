'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                V
              </div>
              <span className="font-bold text-primary">Vaibhavam Caterers</span>
            </Link>
            <p className="text-muted-foreground text-sm">Authentic flavors for memorable celebrations.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/menu" className="text-muted-foreground hover:text-primary transition-colors">Menu</Link></li>
              <li><Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services#wedding" className="text-muted-foreground hover:text-primary transition-colors">Wedding Catering</Link></li>
              <li><Link href="/services#birthday" className="text-muted-foreground hover:text-primary transition-colors">Birthday Parties</Link></li>
              <li><Link href="/services#corporate" className="text-muted-foreground hover:text-primary transition-colors">Corporate Events</Link></li>
              <li><Link href="/services#gatherings" className="text-muted-foreground hover:text-primary transition-colors">Family Gatherings</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">+1 (234) 567-890</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">hello@vaibhavam.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">123 Celebration St, Event City, EC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2024 Vaibhavam Caterers. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
