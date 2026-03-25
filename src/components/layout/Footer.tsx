"use client";

import Link from "next/link";
import { Facebook, Instagram, X } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-emerald-800 text-white font-sans">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 grid md:grid-cols-4 gap-12">

        {/* ABOUT + FOLLOW US */}
        <div className="space-y-6">
          <h3 className="text-lg tracking-wide">About Honeyland CDA</h3>
          <p className="text-sm text-gray-200 leading-relaxed mt-4">
            Honeyland Community Development Association drives sustainable growth by focusing on key community needs including electricity projects, road construction, drainage systems, neighborhood security, and youth empowerment initiatives.
          </p>

          <h3 className="text-lg font-normal tracking-wide">Follow Us</h3>
          <div className="flex gap-4 mt-4">
            <Link href="#" className="hover:text-gray-300"><Facebook size={20} /></Link>
            <Link href="#" className="hover:text-gray-300"><Instagram size={20} /></Link>
            <Link href="#" className="hover:text-gray-300"><X size={20} /></Link>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="space-y-6">
          <h3 className="text-lg font-normal tracking-wide">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-200 mt-4">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/events" className="hover:text-white">Events</Link></li>
            <li><Link href="/donate" className="hover:text-white">Donate</Link></li>
          </ul>
        </div>

        {/* FOCUS AREAS + CONTACT */}
        <div className="space-y-6">
          <h3 className="text-lg font-normal tracking-wide">Our Focus Areas</h3>
          <ul className="space-y-2 text-sm text-gray-200 mt-4">
            {[
              "Electricity Infrastructure",
              "Road Development",
              "Drainage & Gutter Systems",
              "Community Security",
              "Environmental Sustainability",
              "Youth & Education Programs"
            ].map((item, i) => (
              <li key={i} className="pb-2 border-b border-emerald-700">{item}</li>
            ))}
          </ul>

          <div className="mt-4 space-y-1 text-sm text-gray-200">
            <h3 className="text-lg font-normal tracking-wide">Contact Us</h3>
            <p className="mt-4">Honeyland CDA Headquarters</p>
            <p>123 Community Drive, Lagos, Nigeria</p>
            <p>Email: <Link href="mailto:info@honeylandcda.org" className="hover:text-white">info@honeylandcda.org</Link></p>
            <p>Phone: <Link href="tel:+2348012345678" className="hover:text-white">+234 801 234 5678</Link></p>
          </div>
        </div>

        {/* PROJECTS + NEWSLETTER */}
        <div className="space-y-6">
          <h3 className="text-lg font-normal tracking-wide">Ongoing Projects</h3>
          <ul className="space-y-2 mt-4 text-gray-200 text-sm">
            <li>Community Center Renovation</li>
            <li>Neighborhood Streetlights Installation</li>
            <li>Drainage Expansion Program</li>
            <li>Youth Empowerment Workshops</li>
          </ul>

          <div className="mt-4">
            <h3 className="text-lg font-normal tracking-wide">Newsletter</h3>
            <form className="flex flex-col gap-3 mt-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded w-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1 bg-gray-100"
              />
              <button
                type="submit"
                className="bg-emerald-700 hover:bg-emerald-600 text-white px-4 py-2 rounded text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-emerald-700 py-6 text-gray-300 text-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {year} Honeyland CDA.</p>
          <p className="mt-2 md:mt-0 text-center">
            Powered by <Link href="https://adeoluwaadeoye.netlify.app" className="hover:text-white underline">ZyroTech Digital</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}