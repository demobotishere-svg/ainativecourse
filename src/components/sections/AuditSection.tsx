import styles from '@/app/page.module.css';

export default function AuditSection() {
  const steps = [
    { num: '1', title: 'List 10 things you actually did at work last week.', desc: 'Not your job description. The real 10.' },
    { num: '2', title: 'Mark each: judgement, generation, lookup, or coordination.', desc: 'Most knowledge work is one of these four.' },
    { num: '3', title: 'For each, ask: would I trust a smart intern with this?', desc: 'If yes, an AI agent can probably do a first pass.' },
    { num: '4', title: 'Separate the task from the decision.', desc: 'AI does the task. You keep the decision. This is the whole game.' },
    { num: '5', title: 'Count how many of the 10 are now AI-leverageable.', desc: 'For most professionals, it\'s 4–7. Not 10. Not 0.' }
  ];

  return (
    <section id="audit" className="section">
      <div className="container">
        <div className={`${styles.centerHeader} reveal`}>
          <div className="badge-outline" style={{marginBottom: '1rem'}}>Free before you decide</div>
          <h2 className="sectionTitle">The <span className="text-orange">10-task audit</span>.</h2>
          <p className="paragraph">A framework from the course. Yours, whether you enrol or not. If this alone changes how you think about your Monday, the rest of the course will too.</p>
        </div>
        
        <div className={styles.listContainer}>
          {steps.map((step, index) => (
            <div key={index} className={`card ${styles.listCard} reveal delay-${Math.min((index + 1) * 100, 500)}`}>
              <div className={styles.listNum}>{step.num}</div>
              <div>
                <h3 className={styles.cardTitleSmall}>{step.title}</h3>
                <p className={styles.cardDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
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
