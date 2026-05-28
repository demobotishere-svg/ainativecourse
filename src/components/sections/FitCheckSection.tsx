import styles from '@/app/page.module.css';

export default function FitCheckSection() {
  return (
    <section className="section">
      <div className="container">
        <div className={`${styles.centerHeader} reveal`}>
          <h2 className="sectionTitle">Fit check. <span className="text-orange">This is for some people. Not everyone.</span></h2>
        </div>
        <div className={styles.fitGrid}>
          <div className={`card reveal delay-100 ${styles.fitCardGreen}`}>
            <h3>It's for you if</h3>
            <ul>
              <li>You have a real job and 4–8 hours a weekend.</li>
              <li>You're suspicious of AI hype but worried about being left out.</li>
              <li>You'd rather understand the logic than memorise prompts.</li>
              <li>You want to ship one real thing in your own workflow.</li>
            </ul>
          </div>
          <div className={`card reveal delay-200 ${styles.fitCardRed}`}>
            <h3>Skip it if</h3>
            <ul>
              <li>You want a list of 100 tools and shortcuts. There are free ones.</li>
              <li>You're an ML engineer. This isn't deep technical training.</li>
              <li>You expect a certificate that gets you hired. It won't.</li>
              <li>You can't commit to four weekends. The cohort needs you present.</li>
            </ul>
          </div>
        </div>

        <div style={{marginTop: '5rem', display: 'flex', justifyContent: 'center'}} className="reveal">
          <a href="#matrix-cta" className="btn btn-teal" style={{padding: '1.25rem 2.5rem', fontSize: '1.15rem', boxShadow: '0 10px 25px rgba(2, 122, 136, 0.3)'}}>
            Unlock the Blueprint & Preview Video
          </a>
        </div>
      </div>
    </section>
  );
}
