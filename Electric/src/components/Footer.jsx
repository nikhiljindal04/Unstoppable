import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background-dark py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Social Icons */}
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>

        {/* Links */}
        <nav
          aria-label="Footer"
          className="mt-10 flex flex-wrap justify-center gap-8 text-sm"
        >
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Careers
          </a>
        </nav>

        {/* Copyright */}
        <p className="mt-10 text-center text-xs text-gray-500">
          © 2024 Electra Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
