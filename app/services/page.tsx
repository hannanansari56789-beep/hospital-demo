'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Heart, 
  Brain, 
  Activity, 
  Baby, 
  AlertCircle, 
  ArrowRight, 
  Phone, 
  Mail,
  Hospital
} from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';

const services = [
  {
    title: 'Cardiology',
    icon: Heart,
    desc: 'Advanced cardiovascular treatments utilizing state-of-the-art imaging and minimally invasive surgical techniques for heart health.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8YftlPB874Cutkk0nUohrk1NagqtoJmyE6wDDZvbJeW8eBZsNSPoKhYUdbmhPwufyX7SK3Jt6l13-A_-6k_MEQZ-MNj7OgVBXm1ctbtq_wJUNb7hsviMbQMJZZMFArZu02POoOdKl2ikwtj7I6wcqPRvFXfWCTKQgEHd5qbFinJ6bgPzuvEzk2PU-gdeFk1CUCL0-MNmjbvCK_k-WLmv_fzpHiHUWOZXGrsawWuHpmjhsGZtRxEVMQ9SxyVhhDeCK4YUgkYNPG4k',
  },
  {
    title: 'Neurology',
    icon: Brain,
    desc: 'Expert care for complex brain and spinal disorders, focusing on precision diagnostics and innovative neurological rehabilitation.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmLhk0Ls2FCACPSmVzJs4dkrQXbxM7Wo1ijSCAyfRK_6OLR4Emy-J6VMpj8hFzbSfBT-ZU8aGvRiq8GToWnXugG7-xS-l9H5OmfbauioIfYAT52pNtqFPdbO1Wtc-YQDMVbscL1_g00Q3WMqXoyAY4_nAY67xMg3wd--ESWRkl5LYvu5b3bhD3uudmtOrKHfoDcW5xSqJ3nuuXHvf14hsj8PqlVT5fkIJegwI4q9pS8EQIZmlN8oKbASKiK-hzg0S55NcdXH-b8AE',
  },
  {
    title: 'Orthopedics',
    icon: Activity,
    desc: 'Comprehensive bone and joint care, from high-performance sports medicine to advanced robotic-assisted joint replacement.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBl2doBDZUFVkT15sd4y0If0Db7sOwpebGt3X9tHQKXOzc2ljNpdCWdM6AXidexbpZD0MyY1F2mfv3cfWx1SVokh1bm6z3dOH7SZLJNYG5uaf__rKJUOSIveRBYV51J4cf2-Hv8GPLANvCHpNl0_EebbgHf0RQHewNGCh7GJDKcqYvPdpFukEstBhSg7pGF5oSc_REFdaMrtgkftC70MEzHmKZ2fZeFYOxyK8ftpfJbrZnQeGrGe1qpon5l-zBfUktaYCARX42hbso',
  },
  {
    title: 'Pediatrics',
    icon: Baby,
    desc: 'A gentle and joyful environment for our youngest patients, specializing in holistic child health and developmental care.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA54cf3gfI_TwiYzOhWXkhZ_Nf-fMj7yxgPk1QqzBob_45ooo2NzG4kuJwsdedZVaWVjd03khsYlC8H0LRHWxpRs9Yg-J5yY6GVbb7R2R82rssEu-pgLsZtbSlMB3OGvS3_x5wkLoXJxss3dwhutOJsA-R7c4zuBUwlNWr73eVEfGpZeoZdKRT15ssyrFuHA6zJ8lFOD-ZO5EzIo8-NcAywTOGj60mSICZFghSMbWnSSzFTdGlQm6p12L_X78gE2Kk07rKhLjItIc4',
  },
];

export default function ServicesPage() {
  return (
    <PageWrapper>
      <Navbar />
      
      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <header className="max-w-7xl mx-auto px-6 md:px-12 mb-20 text-center md:text-left">
          <span className="font-label text-xs tracking-[0.1em] text-primary uppercase block mb-4">World-Class Facilities</span>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] text-on-surface leading-tight max-w-3xl mb-8">
            Specialized Care Crafted for Your <span className="text-primary italic">Well-being.</span>
          </h1>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto md:mx-0">
            Experience healthcare that feels like a sanctuary. From innovative diagnostics to compassionate recovery, our departments are designed to provide the highest standard of specialized attention.
          </p>
        </header>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service) => (
              <motion.div 
                key={service.title}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-lg bg-surface-container-low transition-all duration-300 hover:shadow-[0px_20px_40px_rgba(29,27,25,0.06)]"
              >
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-lg bg-surface-container-lowest glass-card flex items-center justify-center mb-8 shadow-sm">
                    <service.icon className="text-primary w-8 h-8" />
                  </div>
                  <h3 className="font-headline text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="font-body text-on-surface-variant leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>
                  <Link href="#" className="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                    Explore Department <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}

            {/* Emergency Care (Bento Style Wide) */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-lg bg-primary-container sm:col-span-2 lg:col-span-2 transition-all duration-300 hover:shadow-[0px_20px_40px_rgba(29,27,25,0.2)]"
            >
              <div className="absolute inset-0 z-0 atmospheric-gradient opacity-90"></div>
              <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-center gap-10 h-full text-white">
                <div className="md:w-1/2 text-center md:text-left">
                  <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8 mx-auto md:mx-0">
                    <AlertCircle className="text-secondary-fixed w-10 h-10" />
                  </div>
                  <h3 className="font-headline text-3xl font-bold mb-4">Emergency Care</h3>
                  <p className="font-body text-on-primary-container leading-relaxed mb-8">
                    Rapid-response critical care available 24/7. Our trauma center is equipped with the latest life-saving technology and elite medical teams ready for any emergency.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <a href="tel:18005550199" className="bg-tertiary-fixed-dim text-on-tertiary-fixed px-6 py-3 rounded-xl font-bold hover:brightness-110 transition-all">Call Now</a>
                    <button className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-xl font-bold hover:bg-white/20 transition-all">Directions</button>
                  </div>
                </div>
                <div className="md:w-1/2 h-full relative min-h-[200px] md:min-h-[256px] w-full">
                  <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWvfCTSfvLROnPg0oLLdJF_bvrOwjltCzQZZdnRWm21XvRV-ji4T7wMwPYSzf8vTwnLfp_wC3vUhOeazWzG9eAyGGkecpHwSXAk3XiUWPZckc0tyUsehV_lLnYrPJHoLOwEF9qHZynI0HP04kdBEriDmOf5dsSpMFRzZsopGc9yq3lZpWyWLIDm3KTQGbS2bVpjAdcbAykHKYKZct0sMpV1S2mjvAbENMwZsbYP6GEUkfD0wlHlfZhx_6cYuExc-Zk6ANT_q7FuH8" 
                    alt="Emergency"
                    fill
                    className="rounded-lg object-cover shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mt-32">
          <div className="bg-surface-container-low rounded-xl p-8 md:p-16 lg:p-20 relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-center lg:text-left">
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">Contact Us for More Info</h2>
                <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-8">
                  Have specific questions about our services or need to inquire about a particular treatment? Our patient coordinators are available to provide the clarity you need.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-sm">
                      <Phone className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-label text-primary uppercase font-bold tracking-widest">Inquiries</p>
                      <p className="font-bold">+1 (800) 555-0199</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-sm">
                      <Mail className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-label text-primary uppercase font-bold tracking-widest">Email</p>
                      <p className="font-bold">care@thesanctuary.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[400px] bg-surface-container-lowest p-8 rounded-lg shadow-[0px_20px_40px_rgba(29,27,25,0.06)]">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-on-surface-variant mb-2">Full Name</label>
                    <input className="w-full bg-surface-container-low border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all" placeholder="John Doe" type="text" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-on-surface-variant mb-2">Subject</label>
                    <select className="w-full bg-surface-container-low border-none rounded-sm px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all">
                      <option>Select a Department</option>
                      <option>Cardiology</option>
                      <option>Neurology</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold hover:shadow-lg transition-all active:scale-[0.98]" type="submit">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </PageWrapper>
  );
}
