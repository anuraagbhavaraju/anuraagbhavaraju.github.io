const metrics = [
  {
    value: "75%",
    label: "faster clinical risk screening",
    detail: "Decision acceleration framework for hospital incident review.",
  },
  {
    value: "100%",
    label: "high-risk sensitivity maintained",
    detail: "Designed to preserve safety-critical signal detection.",
  },
  {
    value: "90%",
    label: "faster enterprise search",
    detail: "Knowledge system spanning 75,000+ corporate assets.",
  },
  {
    value: "4,000+",
    label: "employees reached",
    detail: "Enterprise AI deployed for daily information discovery.",
  },
];

const timeline = [
  {
    marker: "2018",
    period: "Jul 2014 - Apr 2018",
    category: "Education",
    title: "Vellore Institute of Technology",
    organisation: "B.Tech in Electronics and Communication",
    location: "Vellore, India",
    body: "Graduated with an engineering foundation that later shaped my work in automation, analytics, and machine learning systems.",
  },
  {
    marker: "2018",
    period: "Aug 2018 - Feb 2021",
    category: "Work Experience",
    title: "Wipro Technologies",
    organisation: "Project Engineer",
    location: "Chennai, India",
    body: "Reduced workflow validation time by 87% by developing and maintaining a regression automation suite for complex computational logic and workflows.",
  },
  {
    marker: "2020",
    period: "Mar 2020 - Aug 2025",
    category: "Work Experience",
    title: "Tredence Inc.",
    organisation: "Senior Data Scientist, Associate Manager",
    location: "Bengaluru, India",
    body: "Led enterprise AI and analytics systems across knowledge management, autonomous data modelling, and customer intelligence for large-scale business impact.",
  },
  {
    marker: "2022",
    period: "Aug 2020 - Aug 2022",
    category: "Education",
    title: "Indian School of Business",
    organisation: "Advanced Management Programme in Business Analytics",
    location: "India",
    body: "Built a stronger business analytics lens for connecting models, insights, and data-driven decisions.",
  },
  {
    marker: "2024",
    period: "Jul 2024 - Dec 2024",
    category: "Research Experience",
    title: "Indian Institute of Technology Delhi",
    organisation: "Research Associate / Intern, MISN Lab",
    location: "Delhi, India",
    body: "Worked on hyperbolic graph machine learning and privacy-preserving distributed graph learning.",
  },
  {
    marker: "2025",
    period: "Aug 2025 - Aug 2026",
    category: "Education",
    title: "National University of Singapore",
    organisation: "M.Tech in Enterprise Business Analytics",
    location: "Singapore",
    body: "Pursuing graduate study in enterprise business analytics with a focus on AI, ML, and applied decision systems.",
  },
  {
    marker: "2026",
    period: "Jan 2026 - Present",
    category: "Work Experience",
    title: "Singapore General Hospital",
    organisation: "AI/ML Intern",
    location: "Singapore",
    body: "Architecting LLM and RLHF-backed clinical risk decision systems while applying statistical models for proactive clinical incident management.",
  },
];

const experience = [
  {
    role: "AI/ML Intern",
    company: "Singapore General Hospital",
    period: "Jan 2026 - Present",
    location: "Singapore",
    highlights: [
      "Architecting an LLM and RLHF-backed decision acceleration framework for risk screening.",
      "Formulating proactive clinical incident strategies with Kaplan-Meier curves and Cox hazard models.",
    ],
  },
  {
    role: "Senior Data Scientist, Associate Manager",
    company: "Tredence Inc.",
    period: "Mar 2020 - Aug 2025",
    location: "Bengaluru, India",
    highlights: [
      "Led enterprise AI systems across knowledge management, data modelling, and customer intelligence.",
      "Worked with delivery and product teams to convert emerging AI capabilities into reusable accelerators.",
    ],
  },
  {
    role: "Research Associate / Intern",
    company: "IIT Delhi, MISN Lab",
    period: "Jul 2024 - Dec 2024",
    location: "Delhi, India",
    highlights: [
      "Researched hyperbolic graph machine learning and privacy-preserving distributed graph learning.",
    ],
  },
  {
    role: "Project Engineer",
    company: "Wipro Technologies",
    period: "Aug 2018 - Feb 2021",
    location: "Chennai, India",
    highlights: [
      "Reduced workflow validation time by 87% through a regression automation suite for complex workflows.",
    ],
  },
];

const selectedWork = [
  {
    label: "Healthcare AI",
    title: "Clinical Risk Decision Acceleration",
    context:
      "A hospital risk screening framework that reduces manual review load while preserving high-risk sensitivity.",
    methods: ["LLMs", "RLHF", "Survival analysis", "Clinical risk"],
    outcome: "Reduced manual risk screening time by 75% while maintaining 100% sensitivity to high-risk incidents.",
    proof: "Internal work - public artifact pending",
  },
  {
    label: "Enterprise Knowledge",
    title: "Knowledge Management System",
    context:
      "An enterprise search and retrieval system built over a large corpus of corporate assets.",
    methods: ["Agentic AI", "Multi-modal RAG", "LLMs", "Enterprise search"],
    outcome: "Reduced internal information search times by 90% across 75,000+ assets and 4,000+ employees.",
    proof: "Resume-backed - link to be supplied",
  },
  {
    label: "Autonomous Data Modelling",
    title: "Artificial Data Modeller",
    context:
      "A fully autonomous modelling accelerator designed to compress data engineering development cycles.",
    methods: ["LLM fine-tuning", "Model Context Protocol", "Data engineering", "Automation"],
    outcome: "Boosted productivity by 50%, compressing project cycles from 16 weeks to 8 weeks.",
    proof: "Resume-backed - link to be supplied",
  },
  {
    label: "Customer Intelligence",
    title: "Customer Cosmos",
    context:
      "An end-to-end customer 360 accelerator deployed across large consumer and retail use cases.",
    methods: ["Customer 360", "Segmentation", "Marketing analytics", "ML delivery"],
    outcome: "Optimized over $3B in marketing spend and re-engaged 25M+ at-risk customers.",
    proof: "Resume-backed - link to be supplied",
  },
];

const selectedResearch = [
  {
    type: "Award-winning capstone",
    title: "Occupational Burnout Estimation",
    body: "Used health, engagement, vocal biomarkers, and textual feedback data to cluster employees and estimate occupational burnout.",
    tags: ["NLP", "Factor analysis", "Healthcare analytics"],
    proof: "Best Capstone Award - link to be supplied",
  },
  {
    type: "Academic project",
    title: "Biological Age Modelling",
    body: "Applied regularization, dimensionality reduction, and advanced learning techniques to high-dimensional DNA methylation data.",
    tags: ["High-dimensional modelling", "p >> n", "Interpretability"],
    proof: "Project detail pending",
  },
  {
    type: "Research internship",
    title: "Graph ML at IIT Delhi",
    body: "Worked on hyperbolic graph machine learning and privacy-preserving distributed graph learning at MISN Lab.",
    tags: ["Graph ML", "Privacy-preserving ML", "Distributed learning"],
    proof: "Lab research - public artifact pending",
  },
  {
    type: "Conference paper",
    title: "Talk to Your Data",
    body: "Co-authored work on LLM-driven semantic parsing and Text-to-SQL for business intelligence and inventory management.",
    tags: ["Text-to-SQL", "LLMs", "Business intelligence"],
    proof: "Conference link to be supplied",
  },
  {
    type: "IEEE paper",
    title: "Chest X-ray Disease Detection",
    body: "Authored a comparative study of CNN architectures and image transformation approaches, with emphasis on CLAHE.",
    tags: ["CNNs", "OpenCV", "Medical imaging"],
    proof: "IEEE IATMSI - link to be supplied",
  },
  {
    type: "Methods paper",
    title: "Imbalanced Binary Classification",
    body: "Co-authored a 3-step framework for improving imbalanced binary classification through data generation algorithms.",
    tags: ["Classification", "Synthetic data", "Evaluation"],
    proof: "Publication link to be supplied",
  },
];

const skillGroups = [
  {
    title: "AI Systems",
    skills: ["LLMs", "RAG", "Agentic AI", "RLHF", "Model Context Protocol"],
  },
  {
    title: "Machine Learning",
    skills: ["Scikit-learn", "Keras", "PyTorch", "OpenCV", "Survival analysis"],
  },
  {
    title: "Analytics Engineering",
    skills: ["Python", "SQL", "R", "PySpark", "High-dimensional modelling"],
  },
  {
    title: "Decision Intelligence",
    skills: ["Power BI", "Tableau", "Customer 360", "Segmentation", "Experimentation"],
  },
  {
    title: "Cloud And Delivery",
    skills: ["Google Cloud Platform", "Microsoft Azure", "Enterprise deployment", "Stakeholder leadership"],
  },
];

const recognition = [
  "Winner - Best Innovation, MIT Hacking Medicine",
  "Best Capstone Project, Indian School of Business",
  "Luminous Award - Best Recruit, Wipro Technologies",
  "Organiser and Advisor, TEDxVITVellore",
  "Teacher and mentor, Make A Difference",
  "Toastmasters: Competent Communication, Competent Leader, Advanced Leadership Bronze",
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand-mark" href="#top" aria-label="Anuraag Bhavaraju home">
          AB
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#story">Story</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#research">Research</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Connect</a>
        </div>
      </nav>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">AI/ML engineer | Applied researcher | Singapore</p>
          <h1 className="sr-only">Anuraag Bhavaraju - AI/ML engineer and applied researcher</h1>
          <blockquote className="hero-quote">
            <p>
              &ldquo;We are travelers on a cosmic journey, stardust, swirling and dancing in the
              eddies and whirlpools of infinity. Life is eternal. We have stopped for a moment
              to encounter each other, to meet, to love, to share. This is a precious moment. It
              is a little parenthesis in eternity.&rdquo;
            </p>
            <cite>Paulo Coelho, The Alchemist</cite>
          </blockquote>
          <p className="tag-title">Currently Involved In:</p>
          <div className="proof-strip" aria-label="Professional focus areas">
            <span>LLM Reasoning</span>
            <span>AI for Healthcare</span>
            <span>Applied AI Research</span>
            <span>Quantum Algorithms</span>
          </div>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary-button" href="#work">View Selected Work</a>
            <a className="button secondary-button" href="mailto:e1583176@u.nus.edu">Contact Me</a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Portrait of Anuraag Bhavaraju">
          <div className="portrait-frame">
            <img src="/images/anuraag-hero.jpeg" alt="Anuraag Bhavaraju reading at a cafe" />
          </div>
        </div>
      </section>

      <section id="about" className="content-section about-section">
        <div className="section-heading">
          <p className="section-kicker">About me</p>
          <h2>Applied ML, enterprise analytics, research curiosity, and coffee-fueled conversations.</h2>
        </div>
        <div className="about-copy">
          <p>
            I am currently a MTech student at National University of Singapore with over 8 years of
            experience as Senior Data Scientist at Tredence Inc., Bengaluru. in building enterprise-scale
            machine learning models, furnishing insights, providing analytical solutions and business
            intelligence to guide impactful data driven decisions. I have consulted numerous Fortune 500
            companies like Unilever, Sysco Foods, American Eagle etc.
          </p>
          <p>
            I am also an independent Applied ML Researcher collaborating with scholars across the globe
            transforming state-of-the-art research in Machine Learning into solutions designed to tackle
            problems across health-care, business intelligence, cyber-security etc.
          </p>
          <p>
            I travel to explore stories, food and culture. I am of that kind who goes to trips without a
            planned return ticket. During my free times, I am glued to books like a bookish gecko with
            library obsession. I am always up for conversations related to Art, AI and Philosophy
            preferably over coffee, extra preferably at a book cafe :D
          </p>
        </div>
      </section>

      <section id="story" className="content-section story-section">
        <div className="section-heading">
          <p className="section-kicker">01 - Story</p>
          <h2>A chronological path through education, work, and applied research.</h2>
        </div>
        <div className="story-layout">
          <div className="timeline">
            {timeline.map((item) => (
              <article className="timeline-item" key={`${item.period}-${item.title}`}>
                <div className="timeline-marker" aria-hidden="true">{item.marker}</div>
                <div className="timeline-content">
                  <div className="timeline-meta">
                    <span>{item.period}</span>
                    <span>{item.category}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p className="timeline-org">{item.organisation} - {item.location}</p>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="content-section">
        <div className="section-heading">
          <p className="section-kicker">02 - Experience</p>
          <h2>Roles where I have made impact.</h2>
        </div>
        <div className="experience-list">
          {experience.map((job) => (
            <article className="experience-row" key={`${job.company}-${job.role}`}>
              <div>
                <p className="role-meta">{job.period} - {job.location}</p>
                <h3>{job.role}</h3>
                <strong>{job.company}</strong>
              </div>
              <ul>
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="content-section work-section">
        <div className="section-heading">
          <p className="section-kicker">03 - Selected work</p>
          <h2>Applied AI systems with measurable operating impact.</h2>
        </div>
        <div className="card-grid work-grid">
          {selectedWork.map((work) => (
            <article className="feature-card" key={work.title}>
              <span className="card-label">{work.label}</span>
              <h3>{work.title}</h3>
              <p>{work.context}</p>
              <div className="tag-row">
                {work.methods.map((method) => (
                  <span key={method}>{method}</span>
                ))}
              </div>
              <p className="outcome">{work.outcome}</p>
              <p className="proof-status">{work.proof}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="research" className="content-section research-section">
        <div className="section-heading">
          <p className="section-kicker">04 - Selected research</p>
          <h2>Research threads across healthcare, language models, graphs, and statistical learning.</h2>
        </div>
        <div className="card-grid research-grid">
          {selectedResearch.map((research) => (
            <article className="research-card" key={research.title}>
              <span className="card-label">{research.type}</span>
              <h3>{research.title}</h3>
              <p>{research.body}</p>
              <div className="tag-row">
                {research.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <p className="proof-status">{research.proof}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="content-section skills-section">
        <div className="section-heading">
          <p className="section-kicker">05 - Skills</p>
          <h2>What I bring to AI/ML delivery.</h2>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section credentials-section">
        <div className="section-heading">
          <p className="section-kicker">06 - Recognition</p>
          <h2>Delivery credibility, awards, and community leadership.</h2>
        </div>
        <article className="recognition-panel">
          <h3>Awards and organisations</h3>
          <ul>
            {recognition.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="metrics-band bottom-metrics" aria-labelledby="impact-title">
        <div className="section-kicker">Impact metrics</div>
        <h2 id="impact-title">Proof points from the latest resume</h2>
        <div className="metrics-grid">
          {metrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              <p>{metric.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div>
          <p className="section-kicker">07 - Connect</p>
          <h2>Let us talk about AI systems, analytics, research, or coffee.</h2>
          <p>
            Based in Singapore and currently pursuing M.Tech in Enterprise Business Analytics at NUS
            while working on healthcare AI at Singapore General Hospital.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button primary-button" href="mailto:e1583176@u.nus.edu">Email</a>
          <a className="button secondary-button" href="https://www.linkedin.com/in/bhavaraju-anuraag-87b2851b2/">LinkedIn</a>
          <a className="button secondary-button" href="https://github.com/anuraagbhavaraju">GitHub</a>
          <a className="button secondary-button" href="/files/anuraag-bhavaraju-resume.pdf">Resume</a>
        </div>
      </section>
    </main>
  );
}
