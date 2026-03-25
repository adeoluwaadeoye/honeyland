"use client";

import Link from "next/link";
import { Facebook, Instagram, Phone } from "lucide-react";

export default function TopNav() {
  return (
    <div className="bg-gray-50 border-b border-gray-200 font-semibold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex justify-between items-center h-10 text-gray-700 text-sm">
          {/* Phone numbers */}
          <div className="flex items-center space-x-6">
            <Link
              href="tel:+1234567890"
              className="flex items-center gap-1 hover:text-emerald-600 transition-colors"
            >
              <Phone size={14} />
              +234 234 5678 901
            </Link>
          </div>

          {/* Social links */}
          <div className="flex items-center space-x-6 font-extrabold">
            <Link
              href="https://facebook.com/yourpage"
              target="_blank"
              className="transition-colors text-[#1877F2] hover:text-black"
            >
              <Facebook size={16} />
            </Link>
            <Link
              href="https://instagram.com/yourpage"
              target="_blank"
              className="transition-colors text-pink-500 hover:text-black"
            >
              <Instagram size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}