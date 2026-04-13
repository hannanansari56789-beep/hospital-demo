'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Eye, 
  CheckCircle2, 
  Quote, 
  Award, 
  ArrowRight,
  Hospital
} from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';

export default function AboutPage() {
  return (
    <PageWrapper>
      <Navbar />
      
      <main className="pt-32">
        <section className="relative min-h-[600px] md:min-h-[819px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw0TcRmhiSuFyd2rZ2r9zSLsNJP1p3aIAJwU4x7_QS7ywVJirBMlFXTdUf5Nkzz-VSiOR8Y4ulZhdLyqxryPDYbfo4VCdKQYidsKaLsUSyzYaTpXLKq2LU_GMgOkLrbFqpABs9_ee3DVlQTMaE8vU-taaerJK75n23y-fcmER3HHFxXECl4-cBA-BK1RNzaF1IV8io4iNBtgqujcNv7OR2VTIqbhPk4_xyx2sj3SvL7xrmX6U6bFgbrOpw6CZAfu-iLEQJOzmVM34" 
              alt="Hospital Atrium"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12 w-full">
            <div className="max-w-2xl text-center md:text-left">
              <span className="text-xs font-bold tracking-[0.2em] text-primary mb-6 block uppercase font-label">Excellence in Care</span>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-tight md:leading-none font-extrabold font-headline tracking-[-0.04em] text-on-surface mb-8">
                The Sanctuary of <br className="hidden md:block" /> Modern Healing.
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
                We blend world-class clinical expertise with an unparalleled patient experience, redefining what a hospital can be.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-primary-container transition-colors">Our History</button>
                <button className="bg-white/20 backdrop-blur-md border border-outline-variant/30 text-on-surface px-8 py-4 rounded-xl font-bold hover:bg-white/40 transition-colors">Virtual Tour</button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold font-headline mb-8 text-on-surface">Defining the Future of Private Healthcare</h2>
                <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                  <p>Founded on the principle that the environment is as vital as the treatment, The Sanctuary has grown from a specialized clinic to a globally recognized center for medical excellence. We treat the individual, not just the condition.</p>
                  <p>Our facility integrates cutting-edge robotic surgery suites with calming, boutique-style recovery wings designed to promote psychological well-being and faster recuperation.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-surface-container-low p-8 md:p-10 rounded-lg">
                  <Eye className="text-primary w-10 h-10 mb-6 mx-auto sm:mx-0" />
                  <h3 className="text-xl font-bold font-headline mb-4">Our Vision</h3>
                  <p className="text-on-surface-variant leading-relaxed">To be the global benchmark for patient-centric care, where technology and humanity meet in perfect harmony.</p>
                </div>
                <div className="bg-surface-container-low p-8 md:p-10 rounded-lg">
                  <CheckCircle2 className="text-primary w-10 h-10 mb-6 mx-auto sm:mx-0" />
                  <h3 className="text-xl font-bold font-headline mb-4">Our Mission</h3>
                  <p className="text-on-surface-variant leading-relaxed">Providing uncompromising medical excellence delivered with empathy, transparency, and clinical precision.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-low relative overflow-hidden">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
            <div className="bg-surface-container-lowest rounded-xl p-8 md:p-12 lg:p-20 shadow-[0px_20px_40px_rgba(29,27,25,0.06)] flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
              <div className="w-full sm:w-2/3 lg:w-1/3 aspect-[4/5] rounded-lg overflow-hidden shrink-0 relative">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwJVS-M4PkZXYtHQT1-JGEUR4W3w_skJSQPMcdIKfHw1E9-ZPCFvoWJATOgvABpIvpE2Rc3838QqTmVi9fLT7-gGnSN5exhdP-B9UfC8toZZK2vF4FGG90PA628hO2km7Ny8P6tyFTXjx14ej-tFtMVxMC3b2nzk4SS4EqHotZoLrp_zKMUlFt9hJ96_YotlBBWxLTyihFAAZobHWLv7BxVqHAk-PPCf_gdjxgsRkTurn0HW20Fy5k88rRK98EyogzST5Ir0tz92I" 
                  alt="Dr. Elara Sterling"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <Quote className="text-primary/20 w-16 h-16 mb-6" />
                <h2 className="text-2xl font-bold font-headline mb-8 italic text-on-surface leading-tight">
                  &quot;Healing is more than a clinical outcome. It is a restoration of the soul, supported by the highest standards of medical science and human touch.&quot;
                </h2>
                <div className="space-y-4 text-on-surface-variant text-lg leading-relaxed mb-10">
                  <p>When I founded The Sanctuary, I envisioned a place where patients didn&apos;t feel like a number on a chart. We&apos;ve built an institution where the architecture breathes, the technology empowers, and our clinicians serve as compassionate guides through the journey of recovery.</p>
                </div>
                <div>
                  <p className="text-on-surface font-bold text-xl font-headline">Dr. Elara Sterling</p>
                  <p className="text-primary font-medium">Founder & Chief Medical Officer</p>
                  <div className="mt-6">
                    <span className="font-serif italic text-4xl text-on-surface/40 select-none">Elara Sterling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface">
          <div className="max-w-screen-2xl mx-auto px-12">
            <div className="mb-16">
              <h2 className="text-[1.75rem] font-bold font-headline mb-4 text-on-surface">Achievements & World-Class Facilities</h2>
              <p className="text-on-surface-variant max-w-xl">Our commitment to excellence is reflected in our global accreditations and our investment in tomorrow&apos;s medical technology.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8 bg-surface-container-high rounded-lg p-10 flex flex-col justify-between group cursor-pointer relative overflow-hidden h-80">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold font-headline mb-4">Precision Robotic Suite</h3>
                  <p className="text-on-surface-variant max-w-sm">Equipped with the latest Da Vinci systems for minimally invasive procedures with ultra-fast recovery times.</p>
                </div>
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjs2HWDcCYUjEx7whg7Xql1VShJsqpmQFk9pe1jp5kb_nSO00hZipYSlIBkITy0iE1d_Q_4MN736B1bLmRHuT7o7cXGfM1YkYs-398oSRUCTZgEA36BF0FB4znfW4wru-qmGMRJ6VlTeGUrdJq46QMJwFD0dUW8CJp5NKdtMcpH7FUAIUliUINETNOFqkkUjlgFswCJjJSUy8-4PCPbx-j3FCqxVzCRBdWsQYcHet60L3viSE61r1srK9yUqnz7cdUCLw0coG7gW0" 
                    alt="Robotic Suite"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative z-10 flex items-center gap-2 text-primary font-bold">
                  Explore Technology <ArrowRight className="w-4 h-4" />
                </div>
              </div>
              <div className="md:col-span-4 bg-primary text-on-primary rounded-lg p-10 flex flex-col justify-center text-center">
                <div className="text-5xl font-extrabold mb-2 font-headline">12+</div>
                <p className="uppercase tracking-widest text-xs font-bold opacity-80">Global Accreditations</p>
              </div>
              <div className="md:col-span-4 bg-surface-container-low rounded-lg p-10 flex flex-col justify-between h-80">
                <div>
                  <Award className="text-primary w-10 h-10 mb-6" />
                  <h3 className="text-xl font-bold font-headline mb-2">Hospital of the Year</h3>
                  <p className="text-on-surface-variant">Recognized by Global Health Review for 2022 & 2023 for Innovation.</p>
                </div>
              </div>
              <div className="md:col-span-4 bg-surface-container-highest rounded-lg p-10 flex flex-col justify-between h-80 relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold font-headline mb-2">Private Wellness Suites</h3>
                  <p className="text-on-surface-variant">Post-operative care in settings that feel more like a luxury hotel than a ward.</p>
                </div>
                <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-30 transition-opacity">
                  <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNZR7w0EiyJX6AEj4Ip_r6S-Sz9tNmqj7hwItoZMb4vPjKYFMymcAEQ-I2lqPkFA1spTFWSMwBEcbYeRlZzV8QYAFACypeitbVQxkFZoiAAy9qyXCP7QpkvQZAnetJcAA1pJ6XeM0k_8op6gmsKOIURXcRmexh-E_IWVYBIY2BRoVnEhkHgyuje9arawEBi1TU8GmjfFMj3JUJP5tgyqBAQoECKtOoxokOD3QY-0tWyi675VSkHCdPqKRR9DTXG2W5q4Mdk5lctlk" 
                    alt="Wellness Suite"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="md:col-span-4 bg-secondary-container text-on-secondary-container rounded-lg p-10 flex flex-col justify-center text-center">
                <div className="text-5xl font-extrabold mb-2 font-headline">99%</div>
                <p className="uppercase tracking-widest text-xs font-bold opacity-80">Patient Satisfaction</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </PageWrapper>
  );
}
