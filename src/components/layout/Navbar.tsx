
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X, ChevronUp } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import TopNav from "@/components/layout/TopNav";
// import Cookies from "js-cookie";

// // Types for links
// type NavLink = {
//   label: string;
//   href?: string;
//   children?: { label: string; href: string }[];
// };

// type AuthLink = { label: string; href: string };

// // Main navigation links
// const NAV_LINKS: NavLink[] = [
//   { label: "Home", href: "/" },
//   {
//     label: "About",
//     children: [
//       { label: "Our History", href: "/about/history" },
//       { label: "About Us", href: "/about/about-us" },
//       { label: "Our Leadership", href: "/leadership/executives" },
//       { label: "Community", href: "/impact/community" },
//     ],
//   },
//   {
//     label: "Projects",
//     children: [
//       { label: "Current Projects", href: "/projects/current" },
//       { label: "Completed Projects", href: "/projects/completed" },
//     ],
//   },
//   {
//     label: "News & Events",
//     children: [
//       { label: "News", href: "/news-events/news" },
//       { label: "Upcoming Events", href: "/news-events/upcoming" },
//       { label: "Past Events", href: "/news-events/past" },
//     ],
//   },
//   { label: "Gallery", href: "/gallery" },
//   { label: "Levies", href: "/levies" },
//   { label: "Contact", href: "/contact" },
// ];

// const AUTH_LINKS: AuthLink[] = [
//   { label: "Login", href: "/auth/login" },
//   { label: "Signup", href: "/auth/register" },
// ];

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openMobileParent, setOpenMobileParent] = useState<string | null>(null);
//   const [user, setUser] = useState<string | null>(null);

//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? "hidden" : "";
//   }, [mobileOpen]);

//   useEffect(() => {
//     const token = Cookies.get("token");
//     const username = Cookies.get("username");
//     if (token && username) {
//       setTimeout(() => setUser(username), 0);
//     }
//   }, []);

//   const toggleMobileMenu = () => {
//     if (mobileOpen) setOpenMobileParent(null);
//     setMobileOpen(!mobileOpen);
//   };

//   const toggleMobileParent = (label: string) => {
//     setOpenMobileParent(openMobileParent === label ? null : label);
//   };

//   return (
//     <nav className="fixed w-full z-50 shadow-md bg-white">
//       <TopNav />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="shrink-0">
//             <Link href="/">
//               <Image
//                 src="/assets/logo.jpg"
//                 alt="Logo"
//                 width={60}
//                 height={60}
//                 className="object-contain"
//               />
//             </Link>
//           </div>

//           <div className="hidden lg:flex flex-1 justify-center space-x-6 items-center border-b border-gray-100 pb-1">
//             {NAV_LINKS.map((link) => (
//               <div key={link.label} className="relative group">
//                 {link.href ? (
//                   <Link
//                     href={link.href ?? "#"}
//                     className="font-normal text-black text-sm py-1 flex items-center gap-1 hover:text-green-700 transition-colors"
//                   >
//                     {link.label}
//                     {link.children && (
//                       <ChevronUp
//                         size={14}
//                         className="ml-1 transform transition-transform duration-300 group-hover:rotate-180"
//                       />
//                     )}
//                   </Link>
//                 ) : (
//                   <div className="font-normal text-black text-sm py-1 flex items-center gap-1 hover:text-green-700 transition-colors">
//                     {link.label}
//                     {link.children && (
//                       <ChevronUp
//                         size={14}
//                         className="ml-1 transform transition-transform duration-300 group-hover:rotate-180"
//                       />
//                     )}
//                   </div>
//                 )}

//                 {link.children && (
//                   <div className="absolute left-0 mt-1 w-48 bg-white shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
//                     {link.children.map((child) => (
//                       <Link
//                         key={child.label}
//                         href={child.href ?? "#"}
//                         className="block py-2 text-black text-sm hover:text-green-700 transition-colors"
//                       >
//                         {child.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           <div className="hidden lg:flex items-center space-x-2">
//             {user ? (
//               <span className="text-sm text-black font-medium">{user}</span>
//             ) : (
//               AUTH_LINKS.map((link) =>
//                 link.label === "Signup" ? (
//                   <Link
//                     key={link.label}
//                     href={link.href ?? "#"}
//                     className="px-4 py-1 rounded text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors"
//                   >
//                     {link.label}
//                   </Link>
//                 ) : (
//                   <Link
//                     key={link.label}
//                     href={link.href ?? "#"}
//                     className="font-normal text-black text-sm py-1 flex items-center gap-1 hover:text-green-700 transition-colors"
//                   >
//                     {link.label}
//                   </Link>
//                 )
//               )
//             )}
//           </div>

//           <div className="lg:hidden flex items-center bg-green-600 text-white p-2">
//             <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
//               {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
//           >
//             <div className="px-4 py-4 space-y-1">
//               {NAV_LINKS.map((link) => (
//                 <div key={link.label}>
//                   {link.children ? (
//                     <button
//                       onClick={() => toggleMobileParent(link.label)}
//                       className="w-full text-left px-4 py-2 font-normal text-black text-sm hover:text-green-700 flex justify-between items-center transition-colors border-b border-gray-200 rounded-md focus:outline-none"
//                     >
//                       {link.label}
//                       <ChevronUp
//                         size={16}
//                         className={`transform transition-transform duration-300 ${
//                           openMobileParent === link.label ? "rotate-180" : ""
//                         }`}
//                       />
//                     </button>
//                   ) : (
//                     <Link
//                       href={link.href ?? "#"}
//                       onClick={() => setMobileOpen(false)}
//                       className="block px-4 py-2 font-normal text-black text-sm hover:text-green-700 transition-colors border-b border-gray-200 rounded-md focus:outline-none"
//                     >
//                       {link.label}
//                     </Link>
//                   )}

//                   <AnimatePresence>
//                     {link.children && openMobileParent === link.label && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         className="pl-6 overflow-hidden"
//                       >
//                         {link.children.map((child) => (
//                           <Link
//                             key={child.label}
//                             href={child.href ?? "#"}
//                             onClick={() => setMobileOpen(false)}
//                             className="block px-4 py-2 text-black text-sm hover:text-green-700 transition-colors border-b border-gray-200 rounded-md focus:outline-none"
//                           >
//                             {child.label}
//                           </Link>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ))}

//               <div className="pt-4 border-t border-gray-200 flex gap-2 px-4">
//                 {user ? (
//                   <span className="flex-1 text-center py-2 text-sm font-medium">{user}</span>
//                 ) : (
//                   AUTH_LINKS.map((link) =>
//                     link.label === "Signup" ? (
//                       <Link
//                         key={link.label}
//                         href={link.href ?? "#"}
//                         onClick={() => setMobileOpen(false)}
//                         className="flex-1 text-center px-4 py-2 rounded text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors focus:outline-none"
//                       >
//                         {link.label}
//                       </Link>
//                     ) : (
//                       <Link
//                         key={link.label}
//                         href={link.href ?? "#"}
//                         onClick={() => setMobileOpen(false)}
//                         className="flex-1 text-center px-4 py-2 font-normal text-black hover:text-green-700 transition-colors border border-gray-300 focus:outline-none"
//                       >
//                         {link.label}
//                       </Link>
//                     )
//                   )
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav> 
//   ); 
// }


"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TopNav from "@/components/layout/TopNav";
import { useAuth } from "@/context/AuthContext";

type NavLink = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const NAV_LINKS: NavLink[] = [
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

export default function Navbar() {
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileParent, setOpenMobileParent] = useState<string | null>(null);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const toggleMobileMenu = () => {
    if (mobileOpen) setOpenMobileParent(null);
    setMobileOpen(!mobileOpen);
  };

  const toggleMobileParent = (label: string) => {
    setOpenMobileParent(openMobileParent === label ? null : label);
  };

  const handleMobileLinkClick = () => {
    setMobileOpen(false);
    setOpenMobileParent(null); // collapse all parents
  };

  return (
    <nav className="fixed w-full z-50 shadow-md bg-white">
      <TopNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/">
              <Image
                src="/assets/logo.jpg"
                alt="Logo"
                width={60}
                height={60}
                className="object-contain"
                loading="eager"
              />
            </Link>
          </div>

          {/* Desktop Links */}
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

          {/* Desktop Auth */}
          <div className="hidden lg:flex items-center space-x-2">
            {user ? (
              <>
                <span className="text-sm text-black">Hi, {user}</span>
                <button
                  onClick={logout}
                  className="px-4 py-1 rounded text-sm font-medium bg-red-500 text-white hover:bg-red-600 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="font-normal text-black text-sm py-1 flex items-center gap-1 hover:text-green-700 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="px-4 py-1 rounded text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
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
                        className={`transform transition-transform duration-300 ${
                          openMobileParent === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href ?? "#"}
                      onClick={handleMobileLinkClick}
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
                            onClick={handleMobileLinkClick}
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

              {/* Auth Links Bottom */}
              <div className="pt-4 border-t border-gray-200 flex gap-2 px-4">
                {user ? (
                  <button
                    onClick={() => {
                      logout();
                      handleMobileLinkClick();
                    }}
                    className="flex-1 text-center px-4 py-2 rounded text-sm font-medium bg-red-500 text-white hover:bg-red-600 transition-colors focus:outline-none"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <Link
                      href="/auth/login"
                      onClick={handleMobileLinkClick}
                      className="flex-1 text-center px-4 py-2 font-normal text-black hover:text-green-700 transition-colors border border-gray-300 focus:outline-none"
                    >
                      Login
                    </Link>
                    <Link
                      href="/auth/register"
                      onClick={handleMobileLinkClick}
                      className="flex-1 text-center px-4 py-2 rounded text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors focus:outline-none"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
