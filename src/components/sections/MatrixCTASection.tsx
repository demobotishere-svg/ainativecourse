import styles from '@/app/page.module.css';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export default function MatrixCTASection() {
  return (
    <section id="matrix-cta" className={styles.matrixSection}>
      <div className="container" style={{maxWidth: '1200px'}}>
        <div className={styles.matrixGrid}>
          
          {/* Left Content */}
          <div className={styles.matrixLeft}>
            <div className="reveal">
              <div className={styles.pillBox}>
                <img src="/images/blue_pill_man.png" alt="Frustrated man working late" className={styles.pillImage} />
                <div>
                  <h2 className={styles.bluePillTitle}>Blue pill: log back in tomorrow. Continue the 14-hour grind.</h2>
                </div>
              </div>
              
              <div className={styles.pillDivider}></div>
              
              <div className={styles.pillBox}>
                <img src="/images/happy_professional.png" alt="Happy confident professional" className={styles.pillImage} />
                <div>
                  <p className={styles.redPillDesc}>
                    Or take the red pill. Step out of the mundane. Learn to manage the technology before it manages you. Claim absolute authority over your career and time.
                  </p>
                </div>
              </div>

              <div className={styles.matrixDisclaimer}>
                Unlock the 15-minute architectural preview video + the AI-Native Design Blueprint — delivered straight to your WhatsApp.
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className={`reveal delay-200 ${styles.matrixRight}`}>
             <LeadCaptureForm />
          </div>

        </div>
      </div>
    </section>
  );
}
