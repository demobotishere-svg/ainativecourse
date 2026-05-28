'use client';

import { useState } from 'react';
import styles from '@/app/page.module.css';

export default function FAQSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {q: "I'm non-technical. Will I keep up?", a: "Yes. The course is built around thinking, not coding. If you can write a clear email, you can do this."},
    {q: "Won't this be outdated in six months?", a: "The tools will. The way of thinking won't. We deliberately spend most of the time on judgement, decomposition, and evaluation."},
    {q: "How is this different from a YouTube playlist?", a: "It probably isn't, in raw information. The difference is: a small live cohort, your real work as the material, and someone who answers your specific Monday-morning question."},
    {q: "Is there a job/certificate at the end?", a: "No. There is a working chatbot, two agent designs, a clearer head, and a method you can keep using. If you need a certificate, this isn't it."},
    {q: "What if I miss a weekend?", a: "Recordings are yours for life, but the cohort matters. If you'll miss more than one weekend, take the next batch."},
    {q: "Will you try to upsell me later?", a: "No. This is a single ₹5,000 purchase. There is no ₹30,000 \"mastery\" tier. There never will be."}
  ];

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className={`${styles.centerHeader} reveal`}>
          <h2 className="sectionTitle">FAQ</h2>
          <p className="paragraph">Questions worth asking before you spend ₹5,000.</p>
        </div>
        
        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <div key={index} className={`reveal delay-${(index % 3 + 1) * 100}`}>
              <div 
                className={`${styles.faqItem} ${activeFaq === index ? styles.faqActive : ''}`}
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                <div className={styles.faqHeader}>
                  <h4>{faq.q}</h4>
                  <span className={styles.faqIcon}>{activeFaq === index ? '−' : '+'}</span>
                </div>
                <div className={styles.faqBodyWrapper}>
                  <div className={styles.faqBodyInner}>
                    <p style={{padding: '0 2rem 2rem 2rem', margin: 0, color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6}}>{faq.a}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="reveal" style={{textAlign: 'center', marginTop: '4rem', padding: '3rem', background: '#fffcf5', border: '1px solid rgba(196,95,14,0.2)', borderRadius: '16px'}}>
          <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>What this course won't do. <span className="text-orange">Transparent by design.</span></h3>
          <p className="text-secondary" style={{maxWidth: '700px', margin: '0 auto', marginBottom: '1rem'}}>It won't make you an ML engineer. It won't teach you to fine-tune models or read papers. It won't hand you a magic prompt. Anyone selling one is selling you a feeling, not a skill. It won't replace the part where you sit with a real problem at your real job and think.</p>
          <p style={{fontWeight: 600}}>If that's a dealbreaker, I'd rather you know now than on day one.</p>
        </div>

        <div style={{marginTop: '5rem', display: 'flex', justifyContent: 'center'}} className="reveal">
          <a href="#matrix-cta" className="btn btn-teal" style={{padding: '1.25rem 2.5rem', fontSize: '1.15rem', boxShadow: '0 10px 25px rgba(2, 122, 136, 0.3)'}}>
            Unlock the Blueprint & Preview Video
          </a>
        </div>
      </div>
    </section>
  );
}
