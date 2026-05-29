import styles from '@/app/page.module.css';

export default function MatrixCTASection() {
  return (
    <section id="matrix-cta" className={styles.matrixSection}>
      <div className={styles.ambientOrbTeal} style={{ top: 'auto', bottom: '-20%', left: '-5%' }}></div>
      <div className={styles.ambientOrbOrange} style={{ top: '-10%', bottom: 'auto', right: '-10%' }}></div>
      <div className="container" style={{maxWidth: '1200px'}}>
        <div className="reveal">
          <div className={styles.pillsContainer}>
            <div className={`${styles.pillBoxContainer} ${styles.bluePillCard} card`}>
              <div className={styles.pillBox}>
                <div className={styles.imageWrapper}>
                  <img src="/images/blue_pill_man.png" alt="Frustrated man working late" className={styles.pillImage} />
                  <div className={styles.blueOverlay}></div>
                </div>
                <div>
                  <h2 className={styles.bluePillTitle}>Blue pill: log back in tomorrow. Continue the 14-hour grind.</h2>
                </div>
              </div>
            </div>

            <div className={styles.pillVerticalDivider}>
              <div className={styles.dividerLineTop}></div>
              <div className={styles.dividerText}>OR</div>
              <div className={styles.dividerLineBottom}></div>
            </div>

            <div className={`${styles.pillBoxContainer} ${styles.redPillCard} card`}>
              <div className={styles.pillBox}>
                <div className={styles.imageWrapper}>
                  <img src="/images/happy_professional.png" alt="Happy confident professional" className={styles.pillImage} />
                  <div className={styles.redOverlay}></div>
                </div>
                <div>
                  <p className={styles.redPillDesc}>
                    Take the red pill. Step out of the mundane. Learn to manage the technology before it manages you. Claim absolute authority over your career and time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
