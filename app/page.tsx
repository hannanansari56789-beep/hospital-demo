'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  PlayCircle, 
  Star, 
  ShieldCheck, 
  AlertCircle, 
  Stethoscope, 
  Users, 
  Heart, 
  Brain, 
  Activity, 
  Baby, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Phone,
  Hospital
} from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';

export default function HomePage() {
  return (
    <PageWrapper>
      <Navbar />
      
      {/* Section 1: Hero */}
      <section className="relative min-h-[921px] flex items-center pt-32 atmospheric-gradient overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[120%] bg-white/5 rounded-full blur-[120px] rotate-12"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Side Content */}
          <div className="text-white space-y-8">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-label tracking-widest"
            >
              PRIVATE CLINICAL CARE
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-headline font-extrabold leading-tight tracking-tight"
            >
              Your Health, Our <span className="text-secondary-fixed">Priority</span> — Advanced Care Starts Here
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-white/80 max-w-xl font-body leading-relaxed"
            >
              Experience a new standard of healthcare. We combine world-class medical expertise with the comfort of a sanctuary designed for healing.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link href="/book">
                <button className="bg-tertiary-fixed-dim text-on-tertiary-fixed text-lg font-bold px-8 py-4 rounded-xl hover:shadow-[0_0_24px_#ffb865] transition-all duration-300 scale-100 hover:scale-[1.02]">
                  Book Appointment
                </button>
              </Link>
              <button className="glass-panel text-white border border-white/20 px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
                <PlayCircle className="w-6 h-6" />
                Virtual Tour
              </button>
            </motion.div>
          </div>
          
          {/* Right Side Floating UI */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="relative w-full max-w-md group"
            >
              {/* Main Doctor Card */}
              <div className="glass-panel border border-white/20 rounded-xl p-6 cloud-shadow backdrop-blur-[32px] relative z-20 overflow-hidden">
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative w-24 h-24 rounded-lg overflow-hidden border-2 border-white/20">
                    <Image 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4N5aH3ujxSOPTGFXhi6LWCxS7JERPQz3r0wQgSSr8YwpyIa-nGr6xYgybRA1Zgo4Sjb6tq2w3jpGM3_alyb1jlcRmQJ1ReBeKoHBHjjhXQwbmcXo3gyO2xmdSwBDyiNXxp_Zfn7kx6FlWMn60G-tq51cUQg1O9aenOCuu-Lvz5z3y37x68pjNPuxiRdqVWHym6vQLSpg-rjuX-g2En0TDZ_zK5ysI1sDur6s1SK6FxsHN7KzSXbdykvKaQmZiIiGli9p_Drzf7Ww" 
                      alt="Dr. Helena Vance"
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-headline font-bold text-white">Dr. Helena Vance</h3>
                    <p className="text-secondary-fixed text-sm font-medium">Chief of Cardiology</p>
                    <div className="flex items-center mt-2 gap-1 bg-white/10 w-fit px-2 py-0.5 rounded-full">
                      <Star className="w-3 h-3 text-tertiary-fixed-dim fill-current" />
                      <span className="text-white text-xs font-bold">4.9 (120+ Reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-t border-white/10">
                    <span className="text-white/70 text-sm">Next Availability</span>
                    <span className="bg-secondary-fixed text-on-secondary-fixed text-xs font-bold px-3 py-1 rounded-full">TODAY, 2:30 PM</span>
                  </div>
                  <button className="w-full bg-white text-[#16697A] font-bold py-3 rounded-lg hover:bg-opacity-90 transition-all">Request Call</button>
                </div>
              </div>
              
              {/* Decorative Floating Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-8 -right-8 glass-panel p-4 rounded-lg border border-white/10 cloud-shadow hidden md:block"
              >
                <ShieldCheck className="w-8 h-8 text-tertiary-fixed-dim" />
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-12 glass-panel p-4 rounded-lg border border-white/10 cloud-shadow hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-white text-sm font-medium">12 Specialists Online</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Trust Bar */}
      <section className="bg-surface-container-low py-12 relative">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center items-center">
            <div className="flex flex-col items-center gap-2 group">
              <AlertCircle className="w-10 h-10 text-[#16697A] mb-2 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-headline font-bold text-on-surface">24/7 Emergency</h4>
              <p className="text-on-surface-variant text-sm">Immediate response team</p>
            </div>
            <div className="flex flex-col items-center gap-2 group border-y sm:border-y-0 sm:border-x border-outline-variant/30 py-8 sm:py-0">
              <Stethoscope className="w-10 h-10 text-[#16697A] mb-2 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-headline font-bold text-on-surface">Certified Doctors</h4>
              <p className="text-on-surface-variant text-sm">Board recognized specialists</p>
            </div>
            <div className="flex flex-col items-center gap-2 group sm:col-span-2 lg:col-span-1">
              <Users className="w-10 h-10 text-[#16697A] mb-2 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-headline font-bold text-on-surface">10,000+ Patients Treated</h4>
              <p className="text-on-surface-variant text-sm">Trusted by local families</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Services Preview */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
            <div className="max-w-2xl">
              <span className="font-label text-xs tracking-widest text-primary mb-4 block">OUR DEPARTMENTS</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-extrabold text-on-surface">Advanced Medical Services</h2>
            </div>
            <Link href="/services" className="text-primary font-bold flex items-center gap-2 hover:underline underline-offset-8 transition-all">
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { title: 'Cardiology', icon: Heart, desc: 'Expert heart care utilizing state-of-the-art diagnostic imaging and surgical tech.' },
              { title: 'Neurology', icon: Brain, desc: 'Treating complex disorders of the nervous system with precision and compassion.' },
              { title: 'Orthopedics', icon: Activity, desc: 'Restoring mobility and improving quality of life through advanced joint and bone care.' },
              { title: 'Pediatrics', icon: Baby, desc: 'Specialized care for our youngest patients in a friendly, nurturing environment.' },
            ].map((service, idx) => (
              <motion.div 
                key={service.title}
                whileHover={{ y: -8 }}
                className="bg-surface-container-lowest p-8 rounded-lg cloud-shadow transition-all duration-300 group border border-outline-variant/10"
              >
                <div className="w-16 h-16 bg-[#16697A]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#16697A] group-hover:text-white transition-colors">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-headline font-bold mb-3">{service.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{service.desc}</p>
                <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose Us (Zig-Zag) */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 space-y-24 md:space-y-32">
          {/* Point 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <span className="text-[#16697A] font-bold tracking-widest text-xs uppercase">Precision Care</span>
              <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-on-surface">Advanced Technology for Faster Healing</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                We invest in the latest medical robotic systems and AI-driven diagnostics to ensure our surgical procedures are minimally invasive and remarkably precise.
              </p>
              <ul className="space-y-4 inline-block lg:block text-left">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary fill-current text-white" />
                  <span className="font-medium">Next-Gen MRI & CT Scanners</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary fill-current text-white" />
                  <span className="font-medium">Robotic-Assisted Surgery</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 relative w-full">
              <div className="absolute -inset-4 atmospheric-gradient rounded-lg rotate-3 opacity-20"></div>
              <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden z-10 shadow-xl">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpMsfKOZb2b9sVIDmGRIgwiBJBEvvIPK-k3nktwwLY4X0YSLqda8lZqm5uHUoa1y6CnI9mErThMK_4yPQr1te1jwxk7BUN1HXbKnHyDpcmBQbiwneIS7eTzhShthrXAMu_Gfb2JeDcFr-qrWxxmPzDY2A5_L5WdmQ4CGQWg4uSgUsSbsaRBUAN2UpZcb0iBBgNuewu-UM8QhhpQ_ap4m9TapEnefCgpNBxOAXwhRmtJUG_EwJLIfUlUNtGPLrgtq4boMkWHbIs0f0" 
                  alt="Medical Tech"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Point 2 (Reversed) */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <span className="text-[#16697A] font-bold tracking-widest text-xs uppercase">Elite Faculty</span>
              <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-on-surface">Expert Doctors with Global Experience</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Our clinical staff consists of internationally recognized experts who bring years of experience from the world&apos;s leading medical institutions.
              </p>
              <div className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/15 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  {[1, 2].map((i) => (
                    <div key={i} className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                      <Image 
                        src={i === 1 
                          ? "https://lh3.googleusercontent.com/aida-public/AB6AXuCZYyHb9KDFXHKZr-aAAyTgZsQwAebWsKwiTn0JrTriDtf90Sp_vsD3AgSG4SDkHxrIk4BbMhyOoK_gXZYDmjBMjmt50a8CydNcALxlQ9NhcLDgFg3_hretnRbnfpoL6AeviI6Gnfd3pd8n7L_8PxG2QZu5N4DGE0qDi8SAbTH0sywpMXJp77ylLSvSCwan6FR7ZQ1AXC30_vuXgn060wANtiuBMQHHnVkoXlrTXrMt6dVFB5hHVfeekolshbMEj_2HgPBI9fsRF-w"
                          : "https://lh3.googleusercontent.com/aida-public/AB6AXuC0I-6cGEO3kpgsVhNAog9lzNBm0k0G33r0ARCJl5-rokcCF5Jyc1rvB9Q-qmkw0LDpP7T_5O-xHZ0A93J11RB9zJihAxRrWDU-DvWilPDZkt4kZ9oGLmEcPzPuS2sNRH3w7aeeAr2K-A-uPGCFpsG1duh_CD7cPhrNo2nSyf55KKT7f_YtV-8NFuwL8Fg6qKkwLGQjGOPjXwAn0OPCy1s0q6drjDU9Eh38RTSVEDiPvp7eGkumApdqWd-mm7dWX-afhaGxrawYujE"
                        }
                        alt="Staff"
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-white bg-[#16697A] flex items-center justify-center text-white text-xs font-bold">+24</div>
                </div>
                <span className="text-on-surface-variant font-medium">85% of our staff hold PhDs</span>
              </div>
            </div>
            <div className="flex-1 relative w-full">
              <div className="absolute -inset-4 atmospheric-gradient rounded-lg -rotate-3 opacity-20"></div>
              <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden z-10 shadow-xl">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa0SpGrp3NZ4FisRRb_j2UasLbLq48MGysASqvOQcsofrmYuliKCpvcQypLs_-1A7rzbpz32ApDzXggGFAZxqD4ythcHpA3Fc504qpi9FdE2AJfBR6Gf_sHEpDnY9-4jggo1mYySRHnjC3uZg9Ilxadgwv6OFQF0JJ-15mCBxapKxVcbbf6P7j3wg4LK0kvm7SxDdV14KpoTjDsarveOivP2h4LqvBCQJz2dM8fjGvvNlU0qzGpvyJ4RyyrYpc3VV05PCTrTK2YhY" 
                  alt="Medical Experts"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Point 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <span className="text-[#16697A] font-bold tracking-widest text-xs uppercase">Patient Centered</span>
              <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-on-surface">Fast Service & Minimal Waiting</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Your time is valuable. We&apos;ve optimized every patient journey step, from digital check-ins to prioritized pharmacy services, ensuring you get care when you need it.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-opacity mx-auto lg:mx-0">
                Join Priority Queue <Zap className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 relative w-full">
              <div className="absolute -inset-4 atmospheric-gradient rounded-lg rotate-3 opacity-20"></div>
              <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden z-10 shadow-xl">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJKSEXWwhZU6ynZbQETcBWjMfu4oF1UzuSFHo_sK0rXtVzcQdu4o3mikNOq50eJor3PjHWKMFDAegYpHK0Z5mpJsO4QXWUbQPbD72Z88SddBu1mxNLkcIDghtRxtZt9LwZu7o6aEqDDqCB1bSanSjHQqzgH7VcjVHu0eTJgR9TR6IsYgQc7SxYoSialHdfeQ6mZCBVOCeQtn9CfBUYoqC6gfgvXx8YYhfXsbl4o2IlTF_kWhf_Wa7R-kwoRBQaZZMk63to7eMgtt8" 
                  alt="Fast Service"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Emergency CTA */}
      <section className="py-24 container mx-auto px-4 md:px-8 lg:px-12">
        <div className="atmospheric-gradient rounded-xl p-8 md:p-16 lg:p-20 text-center relative overflow-hidden cloud-shadow">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <AlertCircle className="w-16 h-16 text-secondary-fixed mx-auto" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-white">Need Immediate Help?</h2>
            <p className="text-xl text-white/80">Our emergency dispatch team is available 24/7. Get professional medical assistance at your doorstep within minutes.</p>
            <div className="flex flex-col md:flex-row gap-6 justify-center pt-4">
              <a className="bg-white text-primary text-2xl font-extrabold px-10 py-5 rounded-xl flex items-center justify-center gap-4 hover:scale-105 transition-transform" href="tel:18005550199">
                <Phone className="w-8 h-8" />
                Call Now
              </a>
              <button className="glass-panel text-white border border-white/30 px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                Locate Nearest ER
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </PageWrapper>
  );
}
