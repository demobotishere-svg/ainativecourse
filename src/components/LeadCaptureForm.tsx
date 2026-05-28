'use client';

import { useState, useEffect } from 'react';
import styles from './LeadCaptureForm.module.css';

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      <div className={styles.formContainer}>
        <div className={styles.successMessage}>
          Thanks! We've sent the preview video and blueprint to your WhatsApp.
        </div>
      </div>
    );
  }

  return (
    <div className={styles.formContainer}>
      <p className={styles.formDescription}>
        Drop your details to unlock the 15-min architectural preview video + the AI-Native Design Blueprint — delivered straight to your WhatsApp.
      </p>
      
      <form onSubmit={handleSubmit}>
        {/* Hidden Fields for form scrapers/standard submits if needed later */}
        <input type="hidden" name="course" value="AI NATIVE DESIGN THINKING" />
        <input type="hidden" name="campaign" value="AI NATIVE DESIGN THINKING" />
        <input type="hidden" name="registered" value={currentDate} />

        <div className={styles.inputGroup}>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            required 
            className={styles.input} 
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        
        <div className={styles.inputGroup}>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            required 
            className={styles.input} 
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        <div className={styles.inputGroup}>
          <input 
            type="tel" 
            name="mobile" 
            placeholder="Mobile Number" 
            required 
            className={styles.input} 
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
          {isSubmitting ? 'Unlocking...' : 'Unlock Now'}
        </button>
      </form>
    </div>
  );
}
