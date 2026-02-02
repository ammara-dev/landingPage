"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";


const navLinks = [
  { name: "Home", href: "#home", sectionId: "home" },
  { name: "Amenities", href: "#amenities", sectionId: "amenities" },
  { name: "Properties", href: "#properties", sectionId: "properties" },
  { name: "Floor Plans", href: "#floor-plan", sectionId: "floor-plan" },
  { name: "Location", href: "#location", sectionId: "location" },
  { name: "Payment Plan", href: "#payment-plan", sectionId: "payment-plan" },
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
          ? "bg-gray-900 backdrop-blur-md  shadow-sm"
          : "bg-gray-900 "
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="Logo" width={90} height={90} />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.sectionId)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeSection === link.sectionId
                    ? "bg-white text-primary"
                    : "text-white hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 bg-white text-primary px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Us
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t mt-2 border-gray-100">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.sectionId)}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === link.sectionId
                      ? "bg-white text-gray-900"
                      : "text-white hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-white text-primary px-5 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors mt-2"
              >
                Register Interest
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
