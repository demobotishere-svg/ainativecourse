import styles from '@/app/page.module.css';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export default function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.ambientOrbTeal}></div>
      <div className={styles.ambientOrbOrange}></div>
      <div className="container">
        <div className={styles.twoColumnHero}>
          <div className={styles.heroLeft}>
            <h1 className={`${styles.heroTitle} reveal hero-reveal`}>
              From AI <span className="underline-orange">clutter</span> to AI <span className="highlight-orange">clarity</span>.
            </h1>
            <p className={`${styles.heroDescription} reveal hero-reveal delay-100`}>
              <span style={{
                display: 'inline-block',
                fontWeight: 700,
                fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
                color: 'var(--text-primary)',
                margin: '1.2rem 0',
                lineHeight: '1.4'
              }}>
                AI is not your enemy. Don't fight it. <span style={{
                  background: 'linear-gradient(120deg, var(--accent-teal), var(--accent-orange))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 900
                }}>Boss it.</span>
              </span>
            </p>
          </div>
          <div className={`${styles.heroRight} reveal hero-reveal delay-200`}>
            <div className={styles.workflowDashboard}>
              <div className={styles.dashboardHeader}>
                <div className={styles.macButtons}>
                  <span></span><span></span><span></span>
                </div>
                <div className={styles.dashboardTitle}>My AI Agents</div>
              </div>
              <div className={styles.dashboardBody}>
                <div className={styles.taskRow}>
                  <div className={styles.taskCheck}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                  <div className={styles.taskDetails}>
                    <span className={styles.taskName}>Reconcile 150 Q3 Invoices</span>
                    <span className={styles.taskTime}>Saved 6.5 hours</span>
                  </div>
                  <div className={styles.taskStatus}>Done (0.8s)</div>
                </div>
                <div className={`${styles.taskRow} ${styles.delay1}`}>
                  <div className={styles.taskCheck}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                  <div className={styles.taskDetails}>
                    <span className={styles.taskName}>Draft 45 Personalized Outreach Emails</span>
                    <span className={styles.taskTime}>Saved 4.0 hours</span>
                  </div>
                  <div className={styles.taskStatus}>Done (1.2s)</div>
                </div>
                <div className={`${styles.taskRow} ${styles.delay2}`}>
                  <div className={styles.taskCheck}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg></div>
                  <div className={styles.taskDetails}>
                    <span className={styles.taskName}>Analyze Competitor Pricing Data</span>
                    <span className={styles.taskTime}>Saved 8.0 hours</span>
                  </div>
                  <div className={styles.taskStatus}>Done (2.1s)</div>
                </div>
                <div className={`${styles.taskRow} ${styles.delay3} ${styles.activeRow}`}>
                  <div className={styles.taskSpinner}></div>
                  <div className={styles.taskDetails}>
                    <span className={styles.taskName}>Generating Weekly Analytics Report</span>
                    <span className={styles.taskTime}>Processing data...</span>
                  </div>
                  <div className={styles.taskStatusPending}>In Progress</div>
                </div>
              </div>
              
              <div className={styles.dashboardFooter}>
                <div className={styles.footerStat}>
                  <span className={styles.dashboardStatValue}>18.5 hrs</span>
                  <span className={styles.dashboardStatLabel}>Saved This Week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="reveal hero-reveal delay-300" style={{ marginTop: '5rem', display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
          <LeadCaptureForm />
        </div>
      </div>
    </section>
  );
}
