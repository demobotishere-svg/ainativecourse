'use client';

import { useState, useEffect, useRef } from 'react';
import styles from '@/app/page.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    const sections = ['hero', 'outcomes', 'testimonials', 'instructor'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // We allow default smooth scrolling, but we guard the intersection observer
    isClickScrolling.current = true;
    setActiveSection(targetId);
    
    // Reset the guard after scrolling is likely complete
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000); // 1 second is usually enough for smooth scroll
  };

  return (
    <nav className={`${styles.navbar} reveal active`}>
      <div className={styles.navContainer}>
        <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} style={{fontWeight: 900, fontSize: '1.75rem', letterSpacing: '-0.05em', color: 'var(--text-primary)', textDecoration: 'none', cursor: 'pointer'}}>
          Clarity.
        </a>
        <div className={styles.navLinks}>
            <a href="#outcomes" onClick={(e) => handleNavClick(e, 'outcomes')} className={`${styles.navLink} ${activeSection === 'outcomes' ? styles.activeNavLink : ''}`}>Outcomes</a>
            <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')} className={`${styles.navLink} ${activeSection === 'testimonials' ? styles.activeNavLink : ''}`}>Testimonials</a>
            <a href="#instructor" onClick={(e) => handleNavClick(e, 'instructor')} className={`${styles.navLink} ${activeSection === 'instructor' ? styles.activeNavLink : ''}`}>About Me</a>
          <a href="#action" className="btn btn-teal" style={{marginLeft: '1rem'}}>Enrol</a>
        </div>
        <div className={styles.mobileMenuBtn} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={styles.hamburgerLine} style={{ transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
          <div className={styles.hamburgerLine} style={{ opacity: isMenuOpen ? 0 : 1 }}></div>
          <div className={styles.hamburgerLine} style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></div>
        </div>
      </div>
      {isMenuOpen && (
        <div className={styles.mobileNav}>
              <a href="#outcomes" className={`${styles.mobileLink} ${activeSection === 'outcomes' ? styles.activeMobileLink : ''}`} onClick={(e) => { handleNavClick(e, 'outcomes'); setIsMenuOpen(false); }}>Outcomes</a>
              <a href="#testimonials" className={`${styles.mobileLink} ${activeSection === 'testimonials' ? styles.activeMobileLink : ''}`} onClick={(e) => { handleNavClick(e, 'testimonials'); setIsMenuOpen(false); }}>Testimonials</a>
              <a href="#instructor" className={`${styles.mobileLink} ${activeSection === 'instructor' ? styles.activeMobileLink : ''}`} onClick={(e) => { handleNavClick(e, 'instructor'); setIsMenuOpen(false); }}>About Me</a>
           <a href="#action" className="btn btn-teal" style={{marginTop: '1rem'}} onClick={() => setIsMenuOpen(false)}>Enrol</a>
        </div>
      )}
    </nav>
  );
}
