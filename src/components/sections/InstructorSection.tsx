import styles from '@/app/page.module.css';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export default function InstructorSection() {
  return (
    <section id="instructor" className="section">
      <div className="container">
        <div className={styles.twoColumn}>
          <div className={`reveal ${styles.imageCol}`}>
            <img src="/images/instructor_portrait.png" alt="Instructor Profile" className={styles.contentImage} style={{borderRadius: '500px 500px 20px 20px'}} />
          </div>
          <div className="reveal delay-100">
            <div className="badge-outline" style={{marginBottom: '1rem', marginLeft: 0}}>About me</div>
            <h2 className="sectionTitle" style={{textAlign: 'left'}}>An engineer who actually ships AI — <span className="underline-orange">not a course-selling influencer.</span></h2>
            <p className="paragraph" style={{textAlign: 'left'}}>I've spent the last few years building agents, retrieval systems, and chatbots that real teams use in production. Before that, years of regular software and product work — so I know what it looks like to sit in a meeting and quietly wonder how much of this could be automated.</p>
            <p className="paragraph" style={{textAlign: 'left'}}>I teach this because every working professional in my life — doctors, lawyers, marketers, founders, friends in HR — kept asking me the same questions, and the honest answers weren't anywhere on the internet.</p>
            
            <div className={styles.statsGrid} style={{marginTop: '3rem', display: 'flex', flexWrap: 'wrap', textAlign: 'left', gap: '3rem'}}>
              <div>
                <div className={styles.statNumber} style={{fontSize: '2.5rem', color: 'var(--accent-teal)', background: 'none', WebkitTextFillColor: 'initial', whiteSpace: 'nowrap'}}>6+ yrs</div>
                <div className={styles.statLabel} style={{color: 'var(--text-secondary)'}}>building software</div>
              </div>
              <div>
                <div className={styles.statNumber} style={{fontSize: '2.5rem', color: 'var(--accent-teal)', background: 'none', WebkitTextFillColor: 'initial', whiteSpace: 'nowrap'}}>Production</div>
                <div className={styles.statLabel} style={{color: 'var(--text-secondary)'}}>AI agents & RAG</div>
              </div>
              <div>
                <div className={styles.statNumber} style={{fontSize: '2.5rem', color: 'var(--accent-teal)', background: 'none', WebkitTextFillColor: 'initial', whiteSpace: 'nowrap'}}>No upsell</div>
                <div className={styles.statLabel} style={{color: 'var(--text-secondary)'}}>one course, one price</div>
              </div>
            </div>
            <p className="text-secondary" style={{fontSize: '0.9rem', marginTop: '2rem', fontStyle: 'italic'}}>Full background, links, and prior work shared on enrolment — verify, don't just trust.</p>
          </div>
        </div>

        <div style={{marginTop: '5rem', display: 'flex', justifyContent: 'center'}} className="reveal">
          <LeadCaptureForm />
        </div>
      </div>
    </section>
  );
}
