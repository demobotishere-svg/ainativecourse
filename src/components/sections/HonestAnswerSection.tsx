import styles from '@/app/page.module.css';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export default function HonestAnswerSection() {
  return (
    <section className="section">
      <div className="container">
        <div className={`${styles.centerHeader} reveal`}>
          <div className="badge-outline" style={{marginBottom: '1rem'}}>The honest answer</div>
          <h2 className="sectionTitle">Why people actually buy this.</h2>
          <p className="paragraph">Two kinds of reasons. Both real. One you can put on a spreadsheet, one you feel in your chest at 11pm on a Sunday.</p>
        </div>

        <div className={styles.twoColumn} style={{marginBottom: '4rem'}}>
          <div className={`reveal delay-100 ${styles.imageCol}`}>
             <img src="/images/honest_answer.png" alt="Relieved professional feeling ahead of the curve" className={styles.contentImage} />
          </div>
          <div className={styles.emotionalGrid}>
            <div className={`${styles.emotionalCard} reveal delay-200`}>
              <h4 className="text-orange">Relief</h4>
              <p>From a specific, quiet anxiety. Being passed by juniors. Going blank when leadership asks about AI strategy.</p>
            </div>
            <div className={`${styles.emotionalCard} reveal delay-300`}>
              <h4 className="text-orange">Identity</h4>
              <p>Becoming the person who understands it. The colleague people come to. The manager who can evaluate vendor claims.</p>
            </div>
            <div className={`${styles.emotionalCard} reveal delay-400`}>
              <h4 className="text-orange">Control</h4>
              <p>From passive recipient to active operator. Moving from drowning in AI noise to having a structured, deliberate relationship with it.</p>
            </div>
            <div className={`${styles.emotionalCard} reveal delay-500`}>
              <h4 className="text-orange">Position</h4>
              <p>From feeling behind to feeling ahead. Right now most of your peers feel behind. After this, you don't.</p>
            </div>
          </div>
        </div>
        
        <div className={`${styles.rationalBox} reveal`}>
          <h3 className={styles.cardTitleMedium} style={{color: '#fff', fontSize: '2rem'}}>The rational case</h3>
          <p style={{color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', fontSize: '1.15rem'}}>
            90 minutes a day back. Payback in 7 working days. A professional who saves 90 minutes a day from better AI use recovers roughly 390 hours a year. On a ₹15L salary, that's about ₹750 an hour. The course pays for itself in seven working days.
          </p>
          <div className={styles.rationalStats}>
            <div><strong>90 min</strong><br/>a day, recovered</div>
            <div><strong>390 hrs</strong><br/>a year, compounded</div>
            <div><strong>7 days</strong><br/>to break even</div>
          </div>
          <p style={{color: 'rgba(255,255,255,0.6)', marginTop: '2rem', fontStyle: 'italic', fontSize: '1rem'}}>The rational case is airtight. Almost nobody buys on the rational case alone.</p>
        </div>
        
        <div className="reveal" style={{textAlign: 'center', marginTop: '5rem'}}>
          <h3 style={{fontSize: '1.75rem', fontWeight: 600, maxWidth: '800px', margin: '0 auto'}}>"₹5,000 to stop feeling behind and start feeling in control — taught by someone who actually knows."</h3>
          <p className="text-secondary" style={{marginTop: '1rem'}}>Everything else on this page is detail.</p>
        </div>

        <div style={{marginTop: '5rem', display: 'flex', justifyContent: 'center'}} className="reveal">
          <LeadCaptureForm />
        </div>
      </div>
    </section>
  );
}
