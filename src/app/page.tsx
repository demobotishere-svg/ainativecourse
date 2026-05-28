'use client';

import { useEffect, useRef } from 'react';
import styles from './page.module.css';

import Navbar from '@/components/sections/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import OutcomesSection from '@/components/sections/OutcomesSection';
import ChangesSection from '@/components/sections/ChangesSection';
import WhoIsItForSection from '@/components/sections/WhoIsItForSection';
import AuditSection from '@/components/sections/AuditSection';
import CurriculumSection from '@/components/sections/CurriculumSection';
import BeyondJobSection from '@/components/sections/BeyondJobSection';
import HonestAnswerSection from '@/components/sections/HonestAnswerSection';
import InstructorSection from '@/components/sections/InstructorSection';
import FitCheckSection from '@/components/sections/FitCheckSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import MatrixCTASection from '@/components/sections/MatrixCTASection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  const revealsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Spotlight Effect for Cards
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.card');
      for (const card of Array.from(cards)) {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Intersection Observer for scroll reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -50px 0px'
    });

    const reveals = document.querySelectorAll('.reveal, .underline-orange');
    reveals.forEach(el => observer.observe(el));

    // Initial load animation for hero
    setTimeout(() => {
      const heroReveals = document.querySelectorAll('.hero-reveal');
      heroReveals.forEach(el => el.classList.add('active'));
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <main className={styles.main} ref={revealsRef}>
      <Navbar />
      <HeroSection />
      <OutcomesSection />
      <ChangesSection />
      <WhoIsItForSection />
      <AuditSection />
      <CurriculumSection />
      <BeyondJobSection />
      <HonestAnswerSection />
      <InstructorSection />
      <FitCheckSection />
      <TestimonialsSection />
      <FAQSection />
      <MatrixCTASection />
      <Footer />
    </main>
  );
}
