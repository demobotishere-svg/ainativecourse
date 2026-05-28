import styles from '@/app/page.module.css';

export default function WhoIsItForSection() {
  const roles = [
    {
      id: '01',
      role: 'Marketing & Brand',
      desc: 'Pipelines ingest briefs, auto-generate mood boards, and format assets for multiple platforms instantly.'
    },
    {
      id: '02',
      role: 'Sales & BD',
      desc: 'Automate prospect qualification and calendar booking. Only talk to buyers ready to close.'
    },
    {
      id: '03',
      role: 'HR & Recruiting',
      desc: 'Automate candidate screening, interview scheduling, and end-to-end employee onboarding.'
    },
    {
      id: '04',
      role: 'Operations & Logistics',
      desc: 'Extract data from unstructured emails, update inventory sheets, and generate daily reports.'
    },
    {
      id: '05',
      role: 'Finance & Accounting',
      desc: 'Ingest hundreds of PDF invoices, reconcile against bank statements, and draft ledger entries.'
    },
    {
      id: '06',
      role: 'Product & Design',
      desc: 'Generate PRDs from meeting notes, map requirement docs, and create predictive user flows.'
    },
    {
      id: '07',
      role: 'Founders & Solopreneurs',
      desc: 'Backend systems handle multi-channel leads, product delivery, and support while you scale.'
    },
    {
      id: '08',
      role: 'Consultants & Analysts',
      desc: 'System reads client requests, pulls files from databases, and hands you pre-drafted research.'
    },
    {
      id: '09',
      role: 'Legal & Compliance',
      desc: 'Agents review long contracts, flag missing clauses, and summarize risk profiles instantly.'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className={`${styles.centerHeader} reveal`}>
          <div className="badge-outline" style={{marginBottom: '1rem'}}>Who it is for</div>
          <h2 className="sectionTitle">Any domain. <span className="highlight-orange">Zero code required.</span></h2>
          <p className="paragraph">This isn't a developer course in disguise. If you read briefs, write documents, talk to customers, plan things, or make decisions for a living — you qualify.</p>
          <p className="paragraph" style={{fontWeight: 600}}>The only prerequisite: you can write a clear email and you have a real job with real problems.</p>
        </div>
        <div className={`${styles.roleGrid} reveal delay-100`}>
          {roles.map((item, i) => (
            <div key={i} className={styles.roleCard}>
              <h3 className={styles.roleTitle}>{item.role}</h3>
              <p className={styles.roleDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
