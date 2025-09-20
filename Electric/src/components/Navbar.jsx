import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-0 z-50 h-16 flex items-center justify-between border-b border-black/10 dark:border-white/10 bg-background-dark md:bg-background-dark/90 backdrop-blur-lg px-6">
      {/* Logo */}
      <div
        className="flex items-center gap-2 text-white cursor-pointer hover:text-primary transition-colors"
        onClick={() => (window.location.href = "/")}
      >
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
            fill="currentColor"
          />
        </svg>
        <h2 className="text-lg font-bold">Electra</h2>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <Link className="hover:text-primary transition-colors" to="/explore">
          Explore
        </Link>
        <Link className="hover:text-primary transition-colors" to="/features">
          Features
        </Link>
        <Link
          className="hover:text-primary transition-colors"
          to="/driving-experience"
        >
          Driving Experience
        </Link>
        <Link className="hover:text-primary transition-colors" to="/technology">
          Technology
        </Link>
        <Link className="hover:text-primary transition-colors" to="/contact">
          Contact
        </Link>
        <Link className="hover:text-primary transition-colors" to="/about">
          About
        </Link>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <Link
          className="hidden md:flex h-9 items-center justify-center rounded-md bg-[#13ec5b] px-4 text-sm font-bold text-black transition-opacity cursor-pointer hover:opacity-90"
          to="/preorder"
        >
          Pre Order Now
        </Link>
        <Link
          className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-gray-200 transition-colors hover:bg-white/20"
          to="/"
        >
          <FaSearch className="text-lg" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-gray-200 hover:bg-white/20"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav (Dropdown) */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#102116] md:bg-background-dark/95 backdrop-blur-lg flex flex-col items-center gap-4 py-6 text-gray-300 text-lg font-medium md:hidden">
          {" "}
          <Link
            className="hover:text-primary"
            to="/explore"
            onClick={toggleMenu}
          >
            Explore
          </Link>
          <Link
            className="hover:text-primary"
            to="/features"
            onClick={toggleMenu}
          >
            Features
          </Link>
          <Link
            className="hover:text-primary"
            to="/driving-experience"
            onClick={toggleMenu}
          >
            Driving Experience
          </Link>
          <Link
            className="hover:text-primary"
            to="/technology"
            onClick={toggleMenu}
          >
            Technology
          </Link>
          <Link
            className="hover:text-primary"
            to="/contact"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link className="hover:text-primary" to="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link
            className="flex h-10 items-center justify-center rounded-md bg-[#13ec5b] px-6 text-sm font-bold text-black hover:opacity-90"
            to="/preorder"
            onClick={toggleMenu}
          >
            Pre Order Now
          </Link>
        </div>
      )}
    </header>
  );
}
