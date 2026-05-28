import styles from '@/app/page.module.css';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export default function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
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
            
            <div className="reveal hero-reveal delay-200" style={{ marginTop: '1.5rem' }}>
              <LeadCaptureForm />
            </div>
          </div>
          <div className={`${styles.heroRight} reveal hero-reveal delay-200`}>
            <div className={styles.heroImageWrapper}>
              <img src="/images/ai_native_thinking.png" alt="AI Native Workspace" className={styles.heroImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
