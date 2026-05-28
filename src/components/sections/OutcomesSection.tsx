import styles from '@/app/page.module.css';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export default function OutcomesSection() {
  return (
    <section id="outcomes" className="section">
      <div className="container">
        <div className={`${styles.centerHeader} reveal`}>
          <div className="badge-outline" style={{marginBottom: '1.5rem'}}>Industry insight</div>
          <h2 className="sectionTitle" style={{fontSize: '3rem'}}>The new math: <br/><span className="text-orange">1 Person + AI = Total Powerhouse</span></h2>
        </div>
        
        <div className={`${styles.mathSection} reveal delay-100`}>
          <div>
            <h3 className={styles.mathBlockTitle}>The Exhausting Loop (You Now)</h3>
            <div className={styles.youNowBox}>
              <div className={styles.youNowFlow}>
                <div className={styles.youNowStep}>
                  <div className={styles.stepIcon}>01</div>
                  <p>Ask ChatGPT a question</p>
                </div>
                <div className={styles.stepArrow}></div>
                <div className={styles.youNowStep}>
                  <div className={styles.stepIcon}>02</div>
                  <p>Copy generated text</p>
                </div>
                <div className={styles.stepArrow}></div>
                <div className={styles.youNowStep}>
                  <div className={styles.stepIcon}>03</div>
                  <p>Paste into email / doc</p>
                </div>
                <div className={styles.stepArrow}></div>
                <div className={styles.youNowStep} style={{opacity: 0.8}}>
                  <div className={styles.stepIcon} style={{background: '#fee2e2', color: '#dc2626', borderColor: '#fca5a5'}}>04</div>
                  <p>Back to the manual grind</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className={styles.mathBlockTitle}>The AI-Native System (What You Become)</h3>
            <div className={styles.becomeCardsGrid}>
              <div className={styles.transformationCard}>
                <div className={styles.manualSide}>
                  <span className={styles.sideLabel}>Old Way</span>
                  <p className={styles.becomeStrike}>Typing meeting summaries</p>
                </div>
                <div className={styles.transformationArrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
                <div className={styles.aiSide}>
                  <span className={styles.sideLabelHighlight}>AI-Native System</span>
                  <p className={styles.becomeResult}>System joins the call, transcribes, extracts action items, logs tasks to your project board.</p>
                </div>
              </div>

              <div className={styles.transformationCard}>
                <div className={styles.manualSide}>
                  <span className={styles.sideLabel}>Old Way</span>
                  <p className={styles.becomeStrike}>Digging for data</p>
                </div>
                <div className={styles.transformationArrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
                <div className={styles.aiSide}>
                  <span className={styles.sideLabelHighlight}>AI-Native System</span>
                  <p className={styles.becomeResult}>System reads requests, pulls files from your database, hands you a pre-drafted response.</p>
                </div>
              </div>

              <div className={styles.transformationCard}>
                <div className={styles.manualSide}>
                  <span className={styles.sideLabel}>Old Way</span>
                  <p className={styles.becomeStrike}>Manual scheduling</p>
                </div>
                <div className={styles.transformationArrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
                <div className={styles.aiSide}>
                  <span className={styles.sideLabelHighlight}>AI-Native System</span>
                  <p className={styles.becomeResult}>System cross-references calendars, qualifies requests, books deep-work blocks — zero back-and-forth.</p>
                </div>
              </div>
            </div>
            
            <div className={styles.mathConclusionBox}>
              <p className={styles.mathConclusionText}>
                <strong>AI-Native Design Thinking:</strong> stop manually executing repetitive tasks. Start designing systems that execute them for you. No code required.
              </p>
            </div>
          </div>
        </div>
        
        <div style={{marginTop: '5rem', display: 'flex', justifyContent: 'center'}} className="reveal">
          <LeadCaptureForm />
        </div>
      </div>
    </section>
  );
}
