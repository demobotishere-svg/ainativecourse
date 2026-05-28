import styles from '@/app/page.module.css';

export default function ChangesSection() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.twoColumn}>
          <div>
            <div className="reveal" style={{marginBottom: '3rem'}}>
              <div className="badge-outline" style={{marginBottom: '1rem', marginLeft: 0}}>What changes</div>
              <h2 className="sectionTitle" style={{textAlign: 'left', marginBottom: '1.5rem'}}>Stop collecting tools. <span className="underline-orange">Start operating with clarity.</span></h2>
              <p className="paragraph" style={{textAlign: 'left'}}>You are not behind on AI. You are behind on noise filtering. This course gives you a repeatable way to decide what AI should do, what you should keep, and what is not worth doing at all.</p>
            </div>
            
            <div className={styles.stackedCards}>
              <div className="card reveal delay-100">
                <div className="card-number">01</div>
                <p className={styles.cardDesc} style={{marginTop: '1.5rem'}}>You've bookmarked 40 AI tools. You've tried three of them. You used ChatGPT to write an email last Tuesday and felt vaguely guilty about it.</p>
              </div>
              <div className="card reveal delay-200">
                <div className="card-number">02</div>
                <p className={styles.cardDesc} style={{marginTop: '1.5rem'}}>Your LinkedIn feed says everyone is shipping AI agents. Your manager keeps saying "leverage AI." Nobody can tell you, concretely, what that means for your job.</p>
              </div>
              <div className="card reveal delay-300">
                <div className="card-number">03</div>
                <p className={styles.cardDesc} style={{marginTop: '1.5rem'}}>And every workshop you find is either a ₹9 funnel into a ₹30,000 upsell, or a generic "ChatGPT prompts you must know" listicle.</p>
              </div>
            </div>
          </div>
          <div className={`reveal delay-300 ${styles.imageCol}`}>
            <img src="/images/what_changes.png" alt="Glowing compass representing clarity" className={styles.contentImage} />
          </div>
        </div>
      </div>
    </section>
  );
}
