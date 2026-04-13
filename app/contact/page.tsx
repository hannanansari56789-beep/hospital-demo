'use client';

import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  Hospital
} from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';

export default function ContactPage() {
  return (
    <PageWrapper>
      <Navbar />
      
      <main className="pt-32 pb-24 px-4 md:px-8 lg:px-12 max-w-screen-2xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-label text-xs tracking-widest text-primary uppercase font-bold mb-4 block">Get in Touch</span>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-surface tracking-tighter mb-6 leading-tight">
            We&apos;re Here to <span className="text-primary-container">Listen</span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you have a question about our services, insurance, or want to provide feedback, our team is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-surface-container-low p-6 md:p-8 rounded-lg text-center sm:text-left">
                <Phone className="text-primary w-8 h-8 mb-4 mx-auto sm:mx-0" />
                <h3 className="font-bold text-xl mb-2">Call Us</h3>
                <p className="text-on-surface-variant">+1 (800) 555-0199</p>
                <p className="text-on-surface-variant text-sm mt-1">Available 24/7 for emergencies</p>
              </div>
              <div className="bg-surface-container-low p-6 md:p-8 rounded-lg text-center sm:text-left">
                <Mail className="text-primary w-8 h-8 mb-4 mx-auto sm:mx-0" />
                <h3 className="font-bold text-xl mb-2">Email Us</h3>
                <p className="text-on-surface-variant">care@thesanctuary.com</p>
                <p className="text-on-surface-variant text-sm mt-1">Response within 24 hours</p>
              </div>
              <div className="bg-surface-container-low p-6 md:p-8 rounded-lg text-center sm:text-left">
                <MapPin className="text-primary w-8 h-8 mb-4 mx-auto sm:mx-0" />
                <h3 className="font-bold text-xl mb-2">Visit Us</h3>
                <p className="text-on-surface-variant">123 Healing Way</p>
                <p className="text-on-surface-variant text-sm mt-1">Sanctuary City, SC 12345</p>
              </div>
              <div className="bg-surface-container-low p-6 md:p-8 rounded-lg text-center sm:text-left">
                <Clock className="text-primary w-8 h-8 mb-4 mx-auto sm:mx-0" />
                <h3 className="font-bold text-xl mb-2">Hours</h3>
                <p className="text-on-surface-variant">Mon - Fri: 8am - 8pm</p>
                <p className="text-on-surface-variant text-sm mt-1">Sat - Sun: 10am - 4pm</p>
              </div>
            </div>

            <div className="bg-primary-container rounded-xl p-8 text-white relative overflow-hidden text-center sm:text-left">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">International Patients</h3>
                <p className="text-on-primary-container leading-relaxed">
                  We offer specialized coordination for international patients, including travel assistance and multi-lingual support.
                </p>
                <button className="mt-6 bg-white text-primary px-6 py-2 rounded-lg font-bold hover:bg-opacity-90 transition-all">
                  Learn More
                </button>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-10 hidden sm:block">
                <Hospital className="w-48 h-48" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface-container-lowest p-6 md:p-8 lg:p-12 rounded-xl shadow-[0px_20px_40px_rgba(29,27,25,0.06)] border border-outline-variant/10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">First Name</label>
                  <input className="w-full bg-surface-container-low border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary/40 transition-all" placeholder="Jane" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Last Name</label>
                  <input className="w-full bg-surface-container-low border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary/40 transition-all" placeholder="Doe" type="text" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Email Address</label>
                <input className="w-full bg-surface-container-low border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary/40 transition-all" placeholder="jane@example.com" type="email" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Subject</label>
                <select className="w-full bg-surface-container-low border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary/40 transition-all">
                  <option>General Inquiry</option>
                  <option>Appointment Question</option>
                  <option>Billing & Insurance</option>
                  <option>Feedback</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Message</label>
                <textarea className="w-full bg-surface-container-low border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary/40 transition-all min-h-[150px] resize-none" placeholder="How can we help you today?"></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </PageWrapper>
  );
}
