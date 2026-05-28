import styles from '@/app/page.module.css';

export default function BeyondJobSection() {
  return (
    <section className="section">
      <div className="container">
         <div className={styles.twoColumn} style={{alignItems: 'center'}}>
           <div className="reveal">
              <div className="badge-outline" style={{marginBottom: '1rem', marginLeft: 0}}>Side Income</div>
              <h2 className="sectionTitle" style={{textAlign: 'left'}}>Beyond your <span className="highlight-orange" style={{padding: '0 10px', marginTop: '10px'}}>day job</span></h2>
              <p className="paragraph" style={{textAlign: 'left'}}>
                The same thinking builds you a second income. Once you can see what AI can absorb, the obvious next question is: what could it earn for you on the side?
              </p>
           </div>
           <div className={styles.imageCol}>
             <img src="/images/beyond_job.png" alt="Passive income desk setup" className={styles.contentImage} />
           </div>
         </div>
         
         <div className={styles.emotionalGrid} style={{marginTop: '4rem'}}>
           <div className="card">
             <h3 style={{fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--accent-teal)'}}>Passive-ish income, honestly framed</h3>
             <p className={styles.cardDesc}>Productised micro-services, AI-assisted freelancing, small SaaS, niche newsletters, paid notion templates, lead-gen sites.</p>
           </div>
           <div className="card">
             <h3 style={{fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--accent-teal)'}}>Content, without becoming an influencer</h3>
             <p className={styles.cardDesc}>AI-assisted writing, repurposing one idea into ten formats, a weekly publishing rhythm you can actually keep.</p>
           </div>
           <div className="card">
             <h3 style={{fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--accent-teal)'}}>Automations that pay you back</h3>
             <p className={styles.cardDesc}>Replace 3–5 hours of weekly drudgery with agents you wire up once. The time you save is the first dividend.</p>
           </div>
           <div className="card">
             <h3 style={{fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--accent-teal)'}}>Distribution that doesn't depend on luck</h3>
             <p className={styles.cardDesc}>Reach without dancing on camera: SEO with AI, cold outreach that's actually personalised, communities, and small-audience economics.</p>
           </div>
         </div>
         
         <p className="paragraph" style={{textAlign: 'center', fontStyle: 'italic', maxWidth: '800px', margin: '4rem auto 0 auto'}}>
           To be clear: nobody quits their job because of a weekend course. The goal is one small thing that actually ships — and a method you can keep using long after the cohort ends.
         </p>

         <div style={{marginTop: '5rem', display: 'flex', justifyContent: 'center'}} className="reveal">
           <a href="#matrix-cta" className="btn btn-teal" style={{padding: '1.25rem 2.5rem', fontSize: '1.15rem', boxShadow: '0 10px 25px rgba(2, 122, 136, 0.3)'}}>
             Unlock the Blueprint & Preview Video
          </a>
         </div>
      </div>
    </section>
  );
}
