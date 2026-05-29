import styles from '@/app/page.module.css';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export default function TestimonialsSection() {
  const testimonials = [
    { text: "Seedora: A plant growing community app which encourages students to grow plants and monitor their growth. Built from scratch.", name: "Advait Swaminathan", role: "9th Grade Student", initial: "A" },
    { text: "Ipposales: A high-end independent chatbot built entirely without any traditional tech background.", name: "Ananya Krishnan", role: "Marketing Executive", initial: "A" },
    { text: "Automated a complete employee onboarding portal integrating 4 different HR tools. Built over a weekend with zero coding experience.", name: "Karthik Venkat", role: "HR Manager", initial: "K" },
    { text: "Custom lead generation agent that handles Instagram DMs, qualifies leads, and books gym trials. I don't know what an API is.", name: "Meera Iyer", role: "Local Gym Owner", initial: "M" },
    { text: "A complete inventory management dashboard that reads supplier emails and updates stock automatically. Never taken a CS class.", name: "Arjun Reddy", role: "Restaurant Manager", initial: "A" },
    { text: "An automated contract review system that flags missing clauses. I'm a lawyer, not a software engineer.", name: "Priya Nair", role: "Corporate Counsel", initial: "P" }
  ];

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className={`${styles.centerHeader} reveal`}>
          <div className="badge-outline" style={{marginBottom: '1rem'}}>Alumni Projects</div>
          <h2 className="sectionTitle">What people built <span className="highlight-orange">afterwards.</span></h2>
          <p className="paragraph">Real things built by our community.</p>
        </div>
        
        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            {testimonials.map((test, i) => (
              <div key={i} className={styles.projectCardWrapper}>
                <div className={`${styles.testimonialCard} ${styles.projectCard}`}>
                  <p className={styles.quote}>"{test.text}"</p>
                  <div className={styles.authorBox}>
                    <div className={styles.authorAvatar}>{test.initial}</div>
                    <div>
                      <div className={styles.authorName}>{test.name}</div>
                      <div className={styles.authorTitle}>{test.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate for infinite loop */}
            {testimonials.map((test, i) => (
              <div key={`dup-${i}`} className={styles.projectCardWrapper}>
                <div className={`${styles.testimonialCard} ${styles.projectCard}`}>
                  <p className={styles.quote}>"{test.text}"</p>
                  <div className={styles.authorBox}>
                    <div className={styles.authorAvatar}>{test.initial}</div>
                    <div>
                      <div className={styles.authorName}>{test.name}</div>
                      <div className={styles.authorTitle}>{test.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{marginTop: '5rem', display: 'flex', justifyContent: 'center'}} className="reveal">
          <LeadCaptureForm />
        </div>
      </div>
    </section>
  );
}
