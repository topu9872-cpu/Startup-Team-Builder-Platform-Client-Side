"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-900 text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Logo & Brand Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* Logo Symbol */}
              <div className="h-8 w-8 rounded-lg bg-linear-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-500/20">
                S
              </div>
              {/* Logo Text */}
              <span className="text-xl font-bold bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Startup Hub
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Secure, elegant, and production-ready identity management solutions built for modern engineering teams.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-indigo-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-indigo-400 transition-colors duration-200">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-indigo-400 transition-colors duration-200">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-indigo-400 transition-colors duration-200">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-indigo-400" />
                <a href="mailto:support@apexauth.com" className="hover:text-indigo-400 transition-colors">
                  support@apexauth.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-indigo-400" />
                <a href="tel:+15551234567" className="hover:text-indigo-400 transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-indigo-400" />
                <span className="text-slate-400">
                  100 Innovation Way,<br />Suite 400, San Francisco, CA
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Connections */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Connect With Us
            </h3>
            <p className="text-sm text-slate-500 mb-4">
              Stay updated with our latest releases and security patches.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-200">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-200">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-200">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-200">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} StartupHub Inc. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}