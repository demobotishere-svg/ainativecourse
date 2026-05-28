'use client';

import { useState } from 'react';
import styles from '@/app/page.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`${styles.navbar} reveal active`}>
      <div className={styles.navContainer}>
        <a href="#hero" style={{fontWeight: 900, fontSize: '1.75rem', letterSpacing: '-0.05em', color: 'var(--text-primary)', textDecoration: 'none', cursor: 'pointer'}}>
          Clarity.
        </a>
        <div className={styles.navLinks}>
          <a href="#outcomes" className="btn-text">Outcomes</a>
          <a href="#curriculum" className="btn-text">Curriculum</a>
          <a href="#instructor" className="btn-text">Instructor</a>
          <a href="#faq" className="btn-text">FAQ</a>
          <a href="#matrix-cta" className="btn btn-teal" style={{marginLeft: '1rem'}}>Enrol</a>
        </div>
        <div className={styles.mobileMenuBtn} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={styles.hamburgerLine} style={{ transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
          <div className={styles.hamburgerLine} style={{ opacity: isMenuOpen ? 0 : 1 }}></div>
          <div className={styles.hamburgerLine} style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></div>
        </div>
      </div>
      {isMenuOpen && (
        <div className={styles.mobileNav}>
           <a href="#outcomes" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Outcomes</a>
           <a href="#curriculum" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Curriculum</a>
           <a href="#instructor" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Instructor</a>
           <a href="#faq" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>FAQ</a>
           <a href="#matrix-cta" className="btn btn-teal" style={{marginTop: '1rem'}} onClick={() => setIsMenuOpen(false)}>Enrol — ₹5,000</a>
        </div>
      )}
    </nav>
  );
}
