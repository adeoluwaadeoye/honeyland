
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TopNav from "@/components/layout/TopNav";

// Main navigation links
const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "Our History", href: "/about/history" }, 
      { label: "About Us", href: "/about/about-us" },
      { label: "Our Leadership", href: "/leadership/executives" },
      { label: "Community", href: "/impact/community" },
    ],
  },
  {
    label: "Projects",
    children: [
      { label: "Current Projects", href: "/projects/current" },
      { label: "Completed Projects", href: "/projects/completed" },
    ],
  }, 
  {
    label: "News & Events", 
    children: [
      { label: "News", href: "/news-events/news" },
      { label: "Upcoming Events", href: "/news-events/upcoming" },
      { label: "Past Events", href: "/news-events/past" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Levies", href: "/levies" },
  { label: "Contact", href: "/contact" },
];

// Auth links (separated)
const AUTH_LINKS = [
  { label: "Login", href: "/auth/login" },
  { label: "Signup", href: "/auth/register" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileParent, setOpenMobileParent] = useState<string | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleMobileMenu = () => {
    if (mobileOpen) setOpenMobileParent(null); // reset all open children
    setMobileOpen(!mobileOpen);
  };

  const toggleMobileParent = (label: string) => {
    setOpenMobileParent(openMobileParent === label ? null : label);
  };

  return (
    <nav className="fixed w-full z-50 shadow-md bg-white">
      {/* TopNav */}
      <TopNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Left */}
          <div className="shrink-0">
            <Link href="/">
              <Image
                src="/assets/logo.jpg"
                alt="Logo"
                width={60}
                height={60}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Nav Links Center */}
          <div className="hidden lg:flex flex-1 justify-center space-x-6 items-center border-b border-gray-100 pb-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative group">
                {link.href ? (
                  <Link
                    href={link.href}
                    className="font-normal text-black text-sm py-1 flex items-center gap-1 hover:text-green-700 transition-colors"
                  >
                    {link.label}
                    {link.children && (
                      <ChevronUp
                        size={14}
                        className="ml-1 transform transition-transform duration-300 group-hover:rotate-180"
                      />
                    )}
                  </Link>
                ) : (
                  <div className="font-normal text-black text-sm py-1 flex items-center gap-1 hover:text-green-700 transition-colors">
                    {link.label}
                    {link.children && (
                      <ChevronUp
                        size={14}
                        className="ml-1 transform transition-transform duration-300 group-hover:rotate-180"
                      />
                    )}
                  </div>
                )}

                {/* Desktop Dropdown */}
                {link.children && (
                  <div className="absolute left-0 mt-1 w-48 bg-white shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-2 text-black text-sm hover:text-green-700 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Auth Buttons Right */}
          <div className="hidden lg:flex items-center space-x-2">
            {AUTH_LINKS.map((link) =>
              link.label === "Signup" ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-1 rounded text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-normal text-black text-sm py-1 flex items-center gap-1 hover:text-green-700 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden flex items-center bg-green-600 text-white p-2">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <button
                      onClick={() => toggleMobileParent(link.label)}
                      className="w-full text-left px-4 py-2 font-normal text-black text-sm hover:text-green-700 flex justify-between items-center transition-colors border-b border-gray-200 rounded-md focus:outline-none"
                    >
                      {link.label}
                      <ChevronUp
                        size={16}
                        className={`transform transition-transform duration-300 ${openMobileParent === link.label ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-2 font-normal text-black text-sm hover:text-green-700 transition-colors border-b border-gray-200 rounded-md focus:outline-none"
                    >
                      {link.label}
                    </Link>
                  )}

                  <AnimatePresence>
                    {link.children && openMobileParent === link.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-6 overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2 text-black text-sm hover:text-green-700 transition-colors border-b border-gray-200 rounded-md focus:outline-none"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Auth Links at bottom */}
              <div className="pt-4 border-t border-gray-200 flex gap-2 px-4">
                {AUTH_LINKS.map((link) =>
                  link.label === "Signup" ? (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex-1 text-center px-4 py-2 rounded text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors focus:outline-none"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex-1 text-center px-4 py-2 font-normal text-black hover:text-green-700 transition-colors border border-gray-300 focus:outline-none"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}