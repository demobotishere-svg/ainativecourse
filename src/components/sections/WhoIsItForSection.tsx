import styles from '@/app/page.module.css';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export default function WhoIsItForSection() {
  const roles = [
    {
      id: '01',
      role: 'Marketing & Brand',
      desc: 'Pipelines ingest briefs, auto-generate mood boards, and format assets for multiple platforms instantly.',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    },
    {
      id: '02',
      role: 'Sales & BD',
      desc: 'Automate prospect qualification and calendar booking. Only talk to buyers ready to close.',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
    },
    {
      id: '03',
      role: 'HR & Recruiting',
      desc: 'Automate candidate screening, interview scheduling, and end-to-end employee onboarding.',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    },
    {
      id: '04',
      role: 'Operations & Logistics',
      desc: 'Extract data from unstructured emails, update inventory sheets, and generate daily reports.',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
    },
    {
      id: '05',
      role: 'Finance & Accounting',
      desc: 'Ingest hundreds of PDF invoices, reconcile against bank statements, and draft ledger entries.',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    },
    {
      id: '06',
      role: 'Product & Design',
      desc: 'Generate PRDs from meeting notes, map requirement docs, and create predictive user flows.',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
    },
    {
      id: '07',
      role: 'Founders & Solopreneurs',
      desc: 'Backend systems handle multi-channel leads, product delivery, and support while you scale.',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    },
    {
      id: '08',
      role: 'Consultants & Analysts',
      desc: 'System reads client requests, pulls files from databases, and hands you pre-drafted research.',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z"/></svg>
    },
    {
      id: '09',
      role: 'Legal & Compliance',
      desc: 'Agents review long contracts, flag missing clauses, and summarize risk profiles instantly.',
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
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
              <div className={styles.roleIconBox}>
                {item.icon}
              </div>
              <h3 className={styles.roleTitle}>{item.role}</h3>
              <p className={styles.roleDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
