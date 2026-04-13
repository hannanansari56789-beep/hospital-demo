'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Lock, 
  ShieldCheck, 
  Calendar,
  Hospital
} from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';

export default function BookingPage() {
  return (
    <PageWrapper>
      <Navbar />
      
      <main className="pt-32 pb-24 px-6 relative overflow-hidden min-h-screen">
        {/* Atmospheric Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-container/20 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4"></div>
        
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <span className="font-label text-xs tracking-widest text-primary uppercase font-bold mb-4 block">Reservation Portal</span>
            <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-on-surface tracking-tighter mb-6 leading-tight">
              Your Journey to <span className="text-primary-container">Healing</span> Starts Here
            </h1>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
              Select your preferred clinician and time. Our team will coordinate everything to ensure your visit is as serene as our sanctuary.
            </p>
          </div>

          {/* Booking Form - Center Focused Glassmorphic */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-xl p-6 md:p-10 lg:p-12 shadow-[0px_20px_40px_rgba(29,27,25,0.06)] border border-white/20 relative overflow-hidden"
          >
            <form className="space-y-8">
              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label className="font-label text-[0.75rem] font-bold text-on-surface-variant uppercase tracking-wider px-1">Full Name</label>
                  <div className="relative">
                    <input className="w-full bg-surface-container-low border-none rounded-sm px-4 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all duration-300" placeholder="Johnathan Doe" type="text" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-label text-[0.75rem] font-bold text-on-surface-variant uppercase tracking-wider px-1">Phone Number</label>
                  <input className="w-full bg-surface-container-low border-none rounded-sm px-4 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all duration-300" placeholder="+1 (555) 000-0000" type="tel" />
                </div>
              </div>

              {/* Medical Selection Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label className="font-label text-[0.75rem] font-bold text-on-surface-variant uppercase tracking-wider px-1">Select Doctor</label>
                  <select className="w-full bg-surface-container-low border-none rounded-sm px-4 py-4 text-on-surface focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all duration-300 appearance-none cursor-pointer">
                    <option>Dr. Elena Vance - Cardiology</option>
                    <option>Dr. Marcus Thorne - Neurology</option>
                    <option>Dr. Sarah Jenkins - Wellness</option>
                    <option>Dr. Julian Reed - Orthopedics</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-label text-[0.75rem] font-bold text-on-surface-variant uppercase tracking-wider px-1">Preferred Date</label>
                  <input className="w-full bg-surface-container-low border-none rounded-sm px-4 py-4 text-on-surface focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all duration-300 cursor-pointer" type="date" />
                </div>
              </div>

              {/* Time & Additional Info */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
                <div className="md:col-span-1 space-y-2">
                  <label className="font-label text-[0.75rem] font-bold text-on-surface-variant uppercase tracking-wider px-1">Time Slot</label>
                  <input className="w-full bg-surface-container-low border-none rounded-sm px-4 py-4 text-on-surface focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all duration-300 cursor-pointer" type="time" />
                </div>
                <div className="md:col-span-3 space-y-2">
                  <label className="font-label text-[0.75rem] font-bold text-on-surface-variant uppercase tracking-wider px-1">Reason for Visit / Message</label>
                  <textarea className="w-full bg-surface-container-low border-none rounded-sm px-4 py-4 text-on-surface placeholder:text-on-surface-variant/40 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all duration-300 resize-none" placeholder="Briefly describe your symptoms or inquiry..." rows={1}></textarea>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-8">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-tertiary-fixed-dim text-on-tertiary-fixed font-bold py-6 rounded-xl text-xl hover:shadow-[0_0_24px_rgba(255,184,101,0.4)] transition-all duration-300" 
                  type="button"
                >
                  Confirm Appointment
                </motion.button>
                <p className="text-center text-on-surface-variant/60 text-sm mt-6 font-medium">
                  By confirming, you agree to our patient confidentiality terms.
                </p>
              </div>
            </form>
          </motion.div>

          {/* Trust Badges / Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex items-start gap-4">
              <div className="bg-surface-container-low p-3 rounded-lg">
                <Lock className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-on-surface mb-1">Secure & Private</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">HIPAA compliant digital environment for your safety.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-surface-container-low p-3 rounded-lg">
                <ShieldCheck className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-on-surface mb-1">Elite Specialists</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Access to world-class medical professionals.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-surface-container-low p-3 rounded-lg">
                <Calendar className="text-primary w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-on-surface mb-1">Flexible Scheduling</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">Reschedule easily with our patient portal app.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Decorative Image Overlays (Asymmetric) */}
      <div className="hidden lg:block fixed -right-24 top-1/2 -translate-y-1/2 w-[300px] h-[450px] rounded-xl overflow-hidden shadow-2xl opacity-40 rotate-6 pointer-events-none">
        <Image 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRFILd9HvK-KHG-bpnaT-unKou3cxVGgtw-zcJUzRBjdC0glWpyuOfinqr3F3hI0oBONSnMxz3rTc5Ca37wh6f6BA-EynsKEZVRPs3G8gt9gFQ4cA0Y5V7Tn-RqF8jLccw4gtpgcnAsXVAJD-o8q1VWstiYrjIukciV8WaoXMFHpO7YlOhDgvg4-6itrn_8EkDEGXnvTRGzblTaVncSKLaXZeg4Lip2JSOTd7KdFV_HnYXhl9nY1i49gKfzLU7A5hXOlhLipYiClg" 
          alt="Interior"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="hidden lg:block fixed -left-32 bottom-24 w-[350px] h-[350px] rounded-full overflow-hidden shadow-2xl opacity-30 -rotate-3 pointer-events-none">
        <Image 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2P04kJIybY0PCrYQgN2ohw3W-xwBanomgPD8IfyXlvqrHleKEcoAfgSuGKNVPkB7f59opYt50OdFSkJKT9NxDSjVdChkSKYxS9mXo7omZ4Y_5ItyQ3V866kCf8XHerETkclFMpMc4jlFtUcxvvOKJgkli7C69lCVZY2ibXsYof5pylekyihKD5A1-Fq9GUpALUGxP_BIfWocxPhY42U28WI3YwHjbBuCjgYed93HGdkAbIxbGGlg9eQowmNhOEeM8CECvDfqcMqM" 
          alt="Lab"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </PageWrapper>
  );
}
