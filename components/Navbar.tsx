'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Hospital, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Doctors', href: '/doctors' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 h-16 w-[95%] max-w-7xl bg-white/70 dark:bg-slate-900/40 backdrop-blur-xl border border-white/20 dark:border-slate-800/50 rounded-full shadow-[0px_20px_40px_rgba(29,27,25,0.08)] transition-all duration-500">
      <div className="flex items-center justify-between px-6 md:px-10 h-full">
        <Link href="/" className="text-lg md:text-xl font-bold tracking-tighter text-[#16697A] dark:text-[#aeecff] font-headline hover:scale-105 transition-transform">
          The Sanctuary
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 font-headline tracking-tight">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-all duration-300 relative group text-sm lg:text-[0.95rem] ${
                  isActive
                    ? 'text-[#16697A] dark:text-[#aeecff] font-bold'
                    : 'text-[#1d1b19]/70 dark:text-slate-300 font-medium hover:text-[#16697A] dark:hover:text-[#aeecff]'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#16697A] dark:bg-[#aeecff] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3 md:gap-5">
          <Link href="/book" className="hidden sm:block">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 184, 101, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-tertiary-fixed-dim text-on-tertiary-fixed font-bold px-5 md:px-7 py-2 rounded-full text-sm md:text-[0.9rem] transition-all duration-300"
            >
              Book Now
            </motion.button>
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-[#16697A] hover:bg-surface-container-low rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-[5rem] left-0 right-0 md:hidden bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl rounded-3xl border border-outline-variant/10 shadow-2xl overflow-hidden mx-4"
          >
            <div className="flex flex-col p-6 gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-xl font-headline transition-colors ${
                    pathname === link.href ? 'text-[#16697A] font-bold' : 'text-[#1d1b19]/70 hover:text-[#16697A]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/book" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full bg-tertiary-fixed-dim text-on-tertiary-fixed font-bold py-4 rounded-2xl mt-2 shadow-lg">
                  Book Appointment
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
