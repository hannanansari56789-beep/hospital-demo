'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Star, 
  BadgeCheck, 
  FileText, 
  GraduationCap, 
  Award, 
  ArrowRight,
  Calendar,
  Hospital
} from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';

export default function DoctorProfilePage() {
  return (
    <PageWrapper>
      <Navbar />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden atmospheric-bg py-16 md:py-24 px-6 md:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary-container via-transparent to-transparent"></div>
          
          {/* Doctor Photo with Glass Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            className="relative z-10 w-full max-w-[450px] aspect-[4/5] rounded-xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDOFbvXDEOBTWt15QC7DETYrRYTHV-2B1HoVOw4BkwMWrVul4wPPz6Dd6ZKxldei1nccawjXP_rQSVrxsDHul0qw2FE4VqAp1FoxvvGAImUjxToywbhgfAolSOkYhtBEzPxPpgTDMZhli7_Spxeyd-aLLL-WGRdwFX-03BRE4FJsS-nJnI460WSBT4toI2GqtH-Jo98I2M_jqGAXEKhLK1p_yD2pPqHABbTCRyvpVVuQp2Wi6ZSzjHpZVXATLmRMJ0jHM3vC5S-S4" 
              alt="Dr. Julianne Sterling"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
          </motion.div>

          <div className="relative z-10 text-white max-w-2xl text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3 mb-6 justify-center lg:justify-start">
              <span className="bg-secondary-fixed/20 backdrop-blur-md text-secondary-fixed px-4 py-1 rounded-full text-xs font-bold tracking-widest font-label uppercase">Senior Consultant</span>
              <div className="flex items-center gap-1 text-tertiary-fixed-dim">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-bold">4.9 (120+ Reviews)</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-headline font-extrabold tracking-tighter mb-4 leading-tight">Dr. Julianne Sterling</h1>
            <p className="text-xl md:text-2xl font-headline text-secondary-fixed mb-8">Chief of Restorative Cardiology</p>
            <p className="text-lg font-body leading-relaxed text-white/80 mb-10 max-w-xl mx-auto lg:mx-0">
              Pioneering patient-centric cardiac care through advanced non-invasive procedures and empathetic wellness coaching for over 15 years.
            </p>
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <BadgeCheck className="text-secondary-fixed w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/60 font-label">EXPERIENCE</p>
                  <p className="font-bold">18+ Years</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <FileText className="text-secondary-fixed w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/60 font-label">PATIENTS</p>
                  <p className="font-bold">12,000+</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area: Bento Layout */}
        <section className="max-w-screen-2xl mx-auto px-6 md:px-16 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Tabs & Info */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-16">
              {/* Bio */}
              <div className="bg-surface-container-low rounded-lg p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-headline font-bold mb-6 text-primary">Philosophy of Care</h2>
                <p className="text-lg text-on-surface/80 leading-relaxed font-body">
                  Dr. Sterling believes that a healthy heart starts with a balanced soul. Her approach integrates the latest clinical breakthroughs with personalized lifestyle medicine, ensuring that every patient receives a blueprint for longevity that fits their unique life rhythm. 
                </p>
              </div>

              {/* Experience & Education Bento Sub-grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-surface-container-highest rounded-lg p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <GraduationCap className="text-primary w-8 h-8" />
                    <h3 className="text-xl font-headline font-bold">Academic Excellence</h3>
                  </div>
                  <ul className="space-y-6 font-body">
                    <li className="flex flex-col">
                      <span className="text-primary font-bold">Johns Hopkins Medicine</span>
                      <span className="text-sm text-on-surface/60">Fellowship in Cardiovascular Disease</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-primary font-bold">Stanford University</span>
                      <span className="text-sm text-on-surface/60">Doctor of Medicine (MD)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-surface-container-highest rounded-lg p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <Award className="text-primary w-8 h-8" />
                    <h3 className="text-xl font-headline font-bold">Specializations</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {['Hypertrophic Cardiomyopathy', 'Valvular Heart Disease', 'Cardiac MRI Imaging', 'Preventative Medicine'].map((spec) => (
                      <span key={spec} className="bg-white/50 px-4 py-2 rounded-full text-sm font-medium border border-outline-variant/20">{spec}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Experience Timeline */}
              <div className="p-4">
                <h3 className="text-2xl font-headline font-bold mb-8">Clinical Experience</h3>
                <div className="space-y-12 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-primary/10">
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span className="text-sm font-label text-primary font-bold">2018 — PRESENT</span>
                    <h4 className="text-xl font-bold mt-1">Chief of Cardiology, The Sanctuary</h4>
                    <p className="text-on-surface/70 mt-2">Leading a team of 40 clinicians and overseeing the implementation of AI-driven diagnostic suites.</p>
                  </div>
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-sm font-label text-on-surface/40 font-bold">2012 — 2018</span>
                    <h4 className="text-xl font-bold mt-1">Senior Cardiologist, Mayo Clinic</h4>
                    <p className="text-on-surface/70 mt-2">Specialized in complex valve repair and adult congenital heart disease.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Availability & Booking */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              <div className="bg-surface-container-lowest rounded-lg p-8 shadow-[0px_20px_40px_rgba(29,27,25,0.06)] border border-outline-variant/10">
                <h3 className="text-xl font-headline font-bold mb-6 flex items-center gap-2">
                  <Calendar className="text-primary w-6 h-6" />
                  Availability
                </h3>
                <div className="grid grid-cols-7 gap-2 mb-8">
                  <div className="text-center py-2 rounded-md bg-primary-container text-white">
                    <span className="block text-[10px] font-label">MON</span>
                    <span className="text-sm font-bold">12</span>
                  </div>
                  {[13, 14, 15, 16].map((day) => (
                    <div key={day} className="text-center py-2 rounded-md hover:bg-surface-container-low transition-colors cursor-pointer">
                      <span className="block text-[10px] font-label text-on-surface/40">DAY</span>
                      <span className="text-sm font-bold">{day}</span>
                    </div>
                  ))}
                  <div className="text-center py-2 rounded-md opacity-20 cursor-not-allowed">
                    <span className="block text-[10px] font-label">SAT</span>
                    <span className="text-sm font-bold">17</span>
                  </div>
                  <div className="text-center py-2 rounded-md opacity-20 cursor-not-allowed">
                    <span className="block text-[10px] font-label">SUN</span>
                    <span className="text-sm font-bold">18</span>
                  </div>
                </div>
                <p className="text-sm font-bold mb-4">Available Slots (Mon, Oct 12)</p>
                <div className="grid grid-cols-3 gap-3 mb-10">
                  {['09:00 AM', '10:30 AM', '01:00 PM', '02:15 PM', '04:45 PM'].map((time) => (
                    <button key={time} className="py-3 text-sm rounded-md border border-outline-variant/30 text-on-surface/60 hover:border-primary transition-all">
                      {time}
                    </button>
                  ))}
                </div>
                <Link href="/book">
                  <button className="w-full bg-tertiary-fixed-dim text-on-tertiary-fixed py-5 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-lg flex items-center justify-center gap-3">
                    Confirm Appointment
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <p className="text-[11px] text-center mt-4 text-on-surface/40 uppercase tracking-widest font-label">Insurance accepted: Aetna, Blue Cross, Medicare</p>
              </div>

              <div className="bg-[#16697a]/5 backdrop-blur-md rounded-lg p-8 border border-white/40">
                <div className="flex gap-1 text-tertiary mb-4">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="italic text-primary leading-relaxed font-body mb-4">&quot;Dr. Sterling didn&apos;t just look at my chart, she looked at me. Her calmness and expertise gave me the confidence I needed for my procedure.&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-container"></div>
                  <span className="font-bold text-sm">Robert M., Patient since 2021</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="bg-surface-container-low py-24">
          <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
            <h2 className="text-3xl font-headline font-extrabold mb-12 tracking-tight">Our Cardiology Sanctuary</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: 'Advanced Diagnostics', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ4WWXXJU1LlWirGJ096afO8O3giYwj0Y5ZTaEUGIomTqeozyJEYVuFaih3bAwE6IHiUMMrZlssRGBlSMhJXGIX0YgkUn76BgN3n_5uMHEHVJt6HYjwyuEg6RRsIuNdmfEOGmDidcHfVnbOZDtF-ov_223yy0u5_vEWSD8VNwQYsG7A3s6O-fUJojxt-Bjt_xe-LoH2XKP8eIXRi4kkvNZLz_CeIMeD9B3nVAsE_ZOJwcBGmRDoWZewL4Wfd5uHx9vBb8lrSuaoyw', desc: 'Next-gen imaging and non-invasive assessment suites.' },
                { title: 'Integrative Care', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsleuXBPb7plm-8OCATiBhx-RbxhZw2PJbihZJCWbpxzAO-tUtJyKwyu0fL9-FCESzd10ixlwpfJuVhSV_-UjDxlyN4r5ugHof9TWQGBjui1VidwkJyMugb_4R97WdA_LNAwPXyCYYaigGPdBSZ--e6443UJQyKsqpQxBKKQ6zlxZ2p_K7dgtjyrhxm585n1sDppqWpkhAVWClVgKU0qGcxP4eL_RVgA7pUocbQO0AF9mtMUWVa2jlofg6iAym2mLpOvnQyp1LAbU', desc: 'Wellness planning tailored to your cardiac recovery needs.' },
                { title: 'Recovery Lounges', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbkJtek5jWSJz6g0Iakf1q33nSKFVAd3DMNCkiWrsrFBo2TE0wZ2OQhTrJbq3GXBTz61v3dJ1aiYo-O6ItTkKFIJ_uTjRCXrgra_nbADH_vGL_grZDgZUjTAfhnLFUc71MbaUcbQn70T1nxp4tgfxtZ5XkmijAUFdTiMfUy-LTWj1nKHtHhI4HVe0O58jjcVD1CT3f4T9AJ9s8eZiTLf-AEDdpEJ_RqeIl3LVpYlDZ9IMLyHumaPajGj7po-l3g31hSh8LKs67V6o', desc: 'Spacious, boutique-style environments for peaceful healing.' },
              ].map((item) => (
                <div key={item.title} className="group cursor-pointer">
                  <div className="aspect-video rounded-lg overflow-hidden mb-6 relative">
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-on-surface/60 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </PageWrapper>
  );
}
