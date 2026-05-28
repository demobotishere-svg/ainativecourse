'use client';

import { useState, useEffect } from 'react';
import styles from './LeadCaptureForm.module.css';

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  // Get date only on client side to avoid hydration mismatch
  useEffect(() => {
    setCurrentDate(new Date().toISOString());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Combine visible fields with hidden requirements
    const payload = {
      ...formData,
      course: 'AI NATIVE DESIGN THINKING',
      campaign: 'AI NATIVE DESIGN THINKING',
      registered: new Date().toISOString()
    };
    
    // Log the exact structure requested by the user
    console.log('LEAD CAPTURE DATA (Ready for API):');
    console.table([payload]);
    
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSuccess) {
    return (
      <div className={styles.formWrapper}>
        <div className={styles.formContainer}>
          <div className={styles.successMessage}>
            Thanks! We've sent the preview video and blueprint to your WhatsApp.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formContainer}>
        <div className={styles.cornerTopLeft}></div>
        <div className={styles.cornerTopRight}></div>
        <div className={styles.cornerBottomLeft}></div>
        <div className={styles.cornerBottomRight}></div>
        
        <div className={styles.formHeader}>
          <span className={styles.headerText}>// BOSS_INFRASTRUCTURE.GATE</span>
          <span className={styles.liveIndicator}><span className={styles.dot}></span> LIVE</span>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Hidden Fields for form scrapers/standard submits if needed later */}
          <input type="hidden" name="course" value="AI NATIVE DESIGN THINKING" />
          <input type="hidden" name="campaign" value="AI NATIVE DESIGN THINKING" />
          <input type="hidden" name="registered" value={currentDate} />

          <div className={styles.inputGroup}>
            <label className={styles.label}>FIRST NAME</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Enter your name" 
              required 
              className={styles.input} 
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label className={styles.label}>WHATSAPP</label>
            <div className={styles.phoneInputWrapper}>
              <div className={styles.countryCode}>+1</div>
              <input 
                type="tel" 
                name="mobile" 
                placeholder="Phone number" 
                required 
                className={`${styles.input} ${styles.phoneInput}`} 
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
            {isSubmitting ? '▶ UNLOCKING...' : '▶ SEND THE BLUEPRINT'}
          </button>
        </form>

        <p className={styles.formDisclaimer}>
          Unlocks the 20-min architectural preview video + the bonus AI Passive Income Guide on WhatsApp.
        </p>
      </div>
    </div>
  );
}
