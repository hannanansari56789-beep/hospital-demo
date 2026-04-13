import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full rounded-t-[2rem] md:rounded-t-[3rem] mt-24 bg-[#f9f2ee] dark:bg-slate-950 font-body">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-16 py-12 gap-8 max-w-screen-2xl mx-auto">
        <div className="space-y-4">
          <div className="text-lg font-extrabold text-[#16697A] dark:text-[#aeecff] uppercase tracking-widest font-headline">
            The Sanctuary
          </div>
          <p className="text-[#1d1b19]/60 dark:text-slate-400 text-sm max-w-xs">
            Redefining clinical excellence through human-centered design and world-class medicine.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-sm tracking-wide leading-relaxed font-label">
          <a className="text-[#16697A] dark:text-[#aeecff] font-bold hover:text-[#16697A] dark:hover:text-white transition-colors" href="tel:18005550199">
            Emergency: +1 (800) 555-0199
          </a>
          <Link className="text-[#1d1b19]/60 dark:text-slate-400 hover:text-[#16697A] dark:hover:text-white transition-colors" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="text-[#1d1b19]/60 dark:text-slate-400 hover:text-[#16697A] dark:hover:text-white transition-colors" href="/terms">
            Terms of Service
          </Link>
          <Link className="text-[#1d1b19]/60 dark:text-slate-400 hover:text-[#16697A] dark:hover:text-white transition-colors" href="/portal">
            Patient Portal
          </Link>
        </div>
        
        <div className="text-[#1d1b19]/60 dark:text-slate-400 text-sm">
          © 2024 The Clinical Ethereal Sanctuary. Designed for Healing.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
