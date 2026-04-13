'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Search, 
  Star, 
  History, 
  UserCheck, 
  ArrowRight, 
  Calendar,
  Hospital
} from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';

const doctors = [
  {
    id: 'julianne-sterling',
    name: 'Dr. Julianne Sterling',
    specialty: 'Senior Cardiologist',
    exp: '15+ Years Exp.',
    alumni: 'Johns Hopkins Alumni',
    rating: '4.9',
    nextAvailable: 'Tomorrow, 09:30 AM',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmWUoAlxH_yPGDm1EG7Rgt0SgXZ_HVQ2auzadIkHrk-C3GVL41IQ-CMurmEUxqdBh8I1mLpQ0V_BITTS9pcJf2QdHQ8zsKIuTWrKYNM2IJSYDCxMFTUzwj9TULJqE-MVGqLjLtJMd2llGutcJu9MtrhSX3NFfH4vo-4DrpRscuJP0qkaRMLq46oave3bDpls5TTPyZV4QoYVWlzaAB8JhtUNBgkIsgS1MElF0gPJYGtdrtZo0aE75xg8rkbtX6KJgCYuiFMxkMUxg',
  },
  {
    id: 'elena-rostova',
    name: 'Dr. Elena Rostova',
    specialty: 'Chief of Neurology',
    exp: '12 Years Exp.',
    alumni: 'Oxford Medical',
    rating: '5.0',
    nextAvailable: 'Today, 02:45 PM',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC36NiPjStj5dMPvRqYXiNp9M6zKWIuHQHzp5ZOnZrClYvngQ7WCk1ntQpXUvEtDXm8C_lGBv2zdb9UHxMfpdstU3ihjxoyCzyj0RrIDz8JVJKa2QmyvAYQkq5sgr2vhKXbwefhxSnSgS8XxQtqq03nHddfRtrB-7JKfo40rPW7Um93EHeQDo_iJiGP6hPjPvq5yYBdMhP3DtSPf4Gka0uD4L9hJsdaD2B00_EENFewFhailSxjlSFN7qO87UrUzgTOZVlVga2F2p8',
  },
  {
    id: 'marcus-chen',
    name: 'Dr. Marcus Chen',
    specialty: 'Pediatric Lead',
    exp: '20+ Years Exp.',
    alumni: 'Harvard Medical',
    rating: '4.8',
    nextAvailable: 'Monday, 10:00 AM',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwlRUxPXuDCNNrWcCUBduUWS1CFuiC4gRbyQZjv4Z0fDVjj0a1vrK28ppTmnZDzj8I4X2BT2Pb2rHDoZOsn3eRwySDHVYVQRcmNWUR52Q7sMJcz6yc7ukUsGppWKMe1wC1TUWSD0k2vKatOpSyfScjWAkB41P2_lhQ0G_tBSrC7crKKC1-cTvyLveyD9r_jVmksqCQ-0rZ_uLK2fw4CrOsnuTJ-RcUtLNjVaWo6lcEbezk5vFgH8qUxYd3Hu8xnSz0E14v-mCOtbc',
  },
];

export default function DoctorsPage() {
  return (
    <PageWrapper>
      <Navbar />
      
      <main className="pt-32 pb-24 px-4 md:px-8 lg:px-12 max-w-screen-2xl mx-auto">
        {/* Hero Header */}
        <header className="mb-16 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-[0.1em] text-secondary font-label uppercase mb-4 block">WORLD-CLASS EXPERTISE</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline tracking-tighter text-on-surface leading-tight">
                Eminent Specialists <br className="hidden md:block" />
                <span className="text-primary-container">Dedicated to Your Care</span>
              </h1>
            </div>
            <p className="text-lg text-on-surface-variant max-w-md leading-relaxed mx-auto md:mx-0">
              Our team of board-certified clinicians represents the pinnacle of medical excellence, blending advanced technology with empathetic attention.
            </p>
          </div>
        </header>

        {/* Search & Filter Section */}
        <section className="mb-12">
          <div className="bg-surface-container-low p-6 md:p-8 rounded-lg shadow-sm">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="w-full lg:flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
                  <input className="w-full bg-surface-container-lowest border-none rounded-sm pl-12 pr-4 py-4 focus:ring-2 focus:ring-primary/40 transition-all font-body text-on-surface" placeholder="Search by name or clinical specialty..." type="text" />
                </div>
              </div>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <button className="px-6 py-3 rounded-full bg-primary-container text-on-primary-container font-semibold font-label text-sm transition-all shadow-md">All Specialties</button>
                {['Cardiology', 'Neurology', 'Oncology', 'Dermatology', 'Pediatrics'].map((spec) => (
                  <button key={spec} className="px-4 md:px-6 py-2 md:py-3 rounded-full bg-surface-container-lowest text-on-surface-variant border border-outline-variant/15 font-semibold font-label text-sm hover:bg-secondary-container/20 transition-all">
                    {spec}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {doctors.map((doctor) => (
            <motion.article 
              key={doctor.id}
              whileHover={{ y: -8 }}
              className="group bg-surface-container-lowest rounded-lg overflow-hidden cloud-shadow transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <Image 
                  src={doctor.image} 
                  alt={doctor.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-[#ffb865] fill-current" />
                  <span className="text-sm font-bold font-label">{doctor.rating}</span>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-4">
                  <span className="text-xs font-bold text-secondary font-label tracking-widest uppercase">{doctor.specialty}</span>
                  <h3 className="text-2xl font-bold font-headline text-on-surface mt-1">{doctor.name}</h3>
                </div>
                <div className="flex items-center gap-6 mb-8 text-on-surface-variant text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <History className="text-primary w-4 h-4" />
                    <span>{doctor.exp}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserCheck className="text-primary w-4 h-4" />
                    <span>{doctor.alumni}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-tighter text-outline font-bold">Next Available</span>
                    <span className="text-sm font-bold text-primary">{doctor.nextAvailable}</span>
                  </div>
                  <Link href={`/doctors/${doctor.id}`}>
                    <button className="bg-surface-container-low text-primary-container px-6 py-3 rounded-full font-bold text-sm hover:bg-primary-container hover:text-on-primary-container transition-all">
                      View Profile
                    </button>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination or Load More */}
        <div className="mt-20 flex justify-center">
          <button className="group flex items-center gap-3 bg-surface-container-low px-10 py-5 rounded-full font-bold text-primary-container hover:bg-primary-container hover:text-on-primary-container transition-all duration-300">
            View All Medical Staff
            <ArrowRight className="group-hover:translate-x-1 transition-transform w-5 h-5" />
          </button>
        </div>
      </main>

      {/* Appointment Overlay Trigger (Floating Action) */}
      <div className="fixed bottom-12 right-12 z-40">
        <Link href="/book">
          <motion.button 
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="bg-tertiary-fixed-dim text-on-tertiary-fixed w-16 h-16 rounded-full flex items-center justify-center cloud-shadow hover:shadow-[0_0_20px_#ffb865] transition-all duration-300"
          >
            <Calendar className="w-8 h-8" />
          </motion.button>
        </Link>
      </div>

      <Footer />
    </PageWrapper>
  );
}
