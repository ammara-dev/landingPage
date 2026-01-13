"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#home", sectionId: "home" },
  { name: "Amenities", href: "#amenities", sectionId: "amenities" },
  { name: "Properties", href: "#properties", sectionId: "properties" },
  { name: "Floor Plans", href: "#floor-plan", sectionId: "floor-plan" },
  { name: "Location", href: "#location", sectionId: "location" },
  { name: "Payment Plan", href: "#payment-plan", sectionId: "payment-plan" },
  { name: "Contact", href: "#contact", sectionId: "contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update header background on scroll
      setIsScrolled(window.scrollY > 50);

      // Find the current active section
      const sections = navLinks.map((link) => link.sectionId);
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }

      // If at the very top, set to home
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="flex gap-0.5 items-end">
                <div className="w-1.5 h-4 bg-gray-900"></div>
                <div className="w-1.5 h-6 bg-gray-900"></div>
                <div className="w-1.5 h-8 bg-gray-900"></div>
                <div className="w-1.5 h-5 bg-gray-900"></div>
              </div>
            </div>
            <span className="font-bold text-gray-900 hidden sm:block">The Heights</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.sectionId)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeSection === link.sectionId
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href="#contact"
            className="hidden md:flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Contact Us
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-gray-100">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.sectionId)}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === link.sectionId
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#register"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors mt-2"
              >
                Register Interest
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
