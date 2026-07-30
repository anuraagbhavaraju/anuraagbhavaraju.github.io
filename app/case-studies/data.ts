export type CaseStudy = {
  slug: string;
  kind: string;
  title: string;
  eyebrow: string;
  readTime: string;
  deck: string;
  stats: string[];
  sections: Array<{
    heading: string;
    body: string[];
  }>;
  methods: string[];
  sourceLinks: Array<{
    label: string;
    href: string;
  }>;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "trek-knowledge-management-system",
    kind: "Selected Work",
    title: "TReK Knowledge Management System",
    eyebrow: "Enterprise Knowledge AI",
    readTime: "3-5 min read",
    deck:
      "A GenAI-powered enterprise knowledge platform designed to collapse information search from hours into seconds and make organizational knowledge easier to discover, reuse, and trust.",
    stats: [
      "90% faster enterprise search",
      "75,000+ corporate assets indexed",
      "4,000+ employees reached",
      "Built around agentic AI and multi-modal RAG",
    ],
    methods: ["Agentic AI", "Multi-modal RAG", "Enterprise search", "Knowledge retrieval", "LLM UX"],
    sections: [
      {
        heading: "The Problem",
        body: [
          "Enterprise knowledge is rarely absent. It is usually hidden: in old decks, project folders, proposal archives, expert inboxes, policy documents, solution collateral, and shared drives that each team navigates differently. For consulting, analytics, and AI delivery teams, that creates a very real productivity tax. A case study might exist, a reusable approach might exist, or an internal expert might have already solved the same problem, but finding that evidence can take longer than starting from scratch.",
          "TReK was positioned as an answer to that friction. Public Tredence material describes it as an AI-powered central hub for access to critical organizational documents, and the LinkedIn launch post frames the core idea simply: when information hides, productivity suffers. The portfolio version of this story should emphasize the underlying product problem: retrieval is not just search, it is a workflow that affects delivery speed, reuse, collaboration, and confidence.",
        ],
      },
      {
        heading: "The System Idea",
        body: [
          "The system works as a knowledge management layer over a large internal corpus. Instead of asking users to remember where something lives, the platform lets them ask for what they need: a relevant client example, a policy reference, a reusable analytical approach, a proposal snippet, or a person who might know the answer. Behind that experience is the familiar RAG pattern, but adapted for enterprise use where source quality, access control, freshness, document structure, and answer traceability matter.",
          "The resume-backed metrics are the clearest impact signal: the system ingested 75,000+ corporate assets and reached 4,000+ employees, reducing internal search time by 90%. That is not just a better interface. It is a shift from manual knowledge hunting to intelligent self-service, with enough scale to change daily work habits across an organization.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "Tredence LinkedIn launch post",
        href: "https://www.linkedin.com/posts/tredence_built-at-tredence-activity-7412803390642188288-4sNq/",
      },
      {
        label: "Tredence GenAI healthcare and life sciences PoV mentioning TREK",
        href: "https://www.tredence.com/maximizing-business-impact-with-generative-ai",
      },
    ],
  },
  {
    slug: "customer-cosmos",
    kind: "Selected Work",
    title: "Customer Cosmos",
    eyebrow: "Customer Intelligence",
    readTime: "3-5 min read",
    deck:
      "A customer intelligence accelerator that harmonizes fragmented omnichannel data into a customer 360 layer for personalization, activation, marketing optimization, and customer lifetime value decisions.",
    stats: [
      "$3B+ marketing spend optimized",
      "25M+ at-risk customers re-engaged",
      "$300 nearly increased customer lifetime value per household",
      "200+ customer attributes powering intelligence",
    ],
    methods: ["Customer 360", "CLTV", "Propensity models", "Feature stores", "CX personalization"],
    sections: [
      {
        heading: "The Problem",
        body: [
          "Most large consumer businesses have more customer data than they can actually use. The issue is fragmentation: transaction data in one system, loyalty data in another, digital behavior elsewhere, campaign response data in yet another layer, and limited visibility into what customers do outside the brand's own ecosystem. This makes personalization slow, segmentation shallow, and marketing optimization dependent on partial signals.",
          "Tredence describes Customer Cosmos as an end-to-end customer intelligence solution built to harmonize siloed omnichannel data, enrich customer insights, and create rest-of-market visibility. That framing is important: the problem is not only reporting. It is turning scattered customer data into a decision layer that can power growth, retention, monetization, and activation.",
        ],
      },
      {
        heading: "The Product Logic",
        body: [
          "Customer Cosmos creates a unified customer view across first-party omnichannel sources and enriches it with external data partnerships. The public solution page describes a comprehensive feature store with 200+ attributes, including signals such as recency, subscription, app download, tenure, clickstream behavior, and more. On top of that feature layer, the solution supports models for propensity, customer lifetime value, headroom, and price sensitivity.",
          "The strongest part of the case is the movement from data foundation to business activation. A customer 360 layer becomes valuable only when it is used by downstream teams: marketing, merchandising, digital, loyalty, store innovation, supplier monetization, and executive decision-making. Customer Cosmos links analytics to activation through reporting, segmentation, next-best-experience logic, and customer intelligence applications.",
        ],
      },
      {
        heading: "How I Worked On It",
        body: [
          "I worked on Customer Cosmos as a senior data science delivery problem, not as a one-off modelling exercise. The work meant leading data scientists through client implementations where the same accelerator had to adapt to different customer data realities, commercial priorities, and activation channels. The technical surface included segmentation, propensity modelling, customer lifetime value estimation, marketing analytics, and reusable delivery assets that made implementations faster and more consistent.",
          "What I like about this work is that the ML is tied very directly to decisions. A propensity score, CLTV estimate, or customer attribute is only useful if a marketer, category lead, loyalty team, or executive can act on it. Customer Cosmos connected those model outputs to the operating questions businesses actually ask: who is at risk, who has room to grow, what message should go next, and where marketing spend is being wasted.",
          "The scale is the proof point. The public solution page reports over $3B in marketing spend optimized, 25M+ at-risk customers re-engaged, and nearly $300 increase in customer lifetime value per household. For me, that makes it a strong example of enterprise ML working as a decision layer rather than a dashboard parked on the side.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "Tredence Customer Cosmos solution page",
        href: "https://www.tredence.com/solutions/customer-cosmos",
      },
    ],
  },
  {
    slug: "occupational-burnout-estimation",
    kind: "Selected Research",
    title: "Occupational Burnout Estimation",
    eyebrow: "Workforce Wellbeing Analytics",
    readTime: "3-5 min read",
    deck:
      "A multi-dimensional analytics project that uses structured ratings and unstructured employee feedback to estimate burnout risk and translate workforce signals into actionable HR recommendations.",
    stats: [
      "97k employee reviews referenced in the ISB research profile",
      "3 latent burnout axes",
      "K-means segments: Healthy, Transition to Burnout, Burnout",
      "Best Capstone Project, ISB",
    ],
    methods: ["Factor analysis", "K-means clustering", "VADER", "BERTopic", "Random Forest", "Bi-LSTM"],
    sections: [
      {
        heading: "The Problem",
        body: [
          "Burnout is difficult to manage because it is not a single metric. It shows up through exhaustion, cynicism, reduced efficacy, disengagement, absenteeism, attrition, and declining productivity. The ISB research page frames it as a multi-dimensional occupational phenomenon and describes the goal as helping employers understand their employees better through the burnout lens.",
          "The project turns that broad problem into a data science pipeline. The aim is early detection: identify risk drivers before interventions become purely reactive. For leaders and HR teams, the practical question is not just whether burnout exists, but which groups are at risk, what factors are driving the risk, and what actions could improve wellbeing and retention.",
        ],
      },
      {
        heading: "The Data And Modelling Approach",
        body: [
          "The project combined structured ratings with unstructured review text. The ISB page references reviews of about 97k employees across four companies and describes factor analysis over ratings data. The project report expands the analytical stack: anomaly detection with Isolation Forest, association rules, PCA, confirmatory factor analysis, K-means clustering, sentiment analysis, topic modelling, regression, tree-based models, Bi-LSTM, and transformer-based predictive modelling.",
          "The core interpretability move was the latent factor design. Variables such as work-life balance, company culture, work satisfaction, career growth, salary benefits, skill development, and job security were mapped into meaningful burnout axes. In the final framing, the employee experience was represented through factors such as exhaustion, depersonalisation, and personal growth. K-means then segmented employees into Healthy, Transition to Burnout, and Burnout groups.",
        ],
      },
      {
        heading: "What Made It Useful",
        body: [
          "The modelling was not only predictive; it was explanatory. The report describes OLS regression over latent factors with an R2 of 0.745, indicating that the psychological factors explained a large share of variance in employee satisfaction-related outcomes. The tree-based models helped identify interpretable drivers such as work-life balance, job satisfaction, management rating, and sentiment score.",
          "The NLP layer added texture that ratings alone cannot capture. VADER sentiment scoring helped separate positive and negative review corpora, while topic modelling surfaced themes that leaders could act on. This combination matters because burnout is both quantitative and narrative: numbers show the pattern, text explains the lived experience behind it.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "ISB occupational burnout research profile",
        href: "https://www.isb.edu/faculty-and-research/isb-institute-of-data-science/research/using-a-combination-of-multiple-facets-of-health-engagement-and-productivity-to-estimate-occupational-burnout",
      },
      {
        label: "Full EBA5002 final report",
        href: "/files/eba5002-occupational-burnout-final-report.pdf",
      },
    ],
  },
  {
    slug: "biological-age-modelling-novagene",
    kind: "Selected Research",
    title: "Biological Age Modelling: NovaGene",
    eyebrow: "Cloud Epigenomics",
    readTime: "3-5 min read",
    deck:
      "A cloud-native epigenomic platform that processes raw DNA methylation array data, computes validated biological-age clocks, and serves cohort and individual reports through Azure, Power BI, and Streamlit.",
    stats: [
      "24 real PGP UK participant samples",
      "48 IDAT files processed",
      "11,652,288 CpG methylation measurements",
      "Horvath, Hannum, and GrimAge clocks",
    ],
    methods: ["DNA methylation", "Elastic Net", "LASSO", "Azure Data Factory", "PySpark", "Power BI"],
    sections: [
      {
        heading: "The Problem",
        body: [
          "Biological age modelling asks a deceptively simple question: does a person's cellular aging signal look older or younger than their chronological age? DNA methylation makes that question measurable because methylation patterns at CpG sites change predictably with age. The challenge is operational. Raw IDAT files from methylation arrays are large, technical, and usually require specialized local bioinformatics environments to process.",
          "NovaGene was designed as an end-to-end platform to close that engineering gap. Instead of treating epigenetic clocks as a one-off notebook exercise, the project built a cloud pipeline that ingests raw epigenomic data, processes methylation signals, computes validated clocks, and presents results in dashboards and individual reports.",
        ],
      },
      {
        heading: "The Data And Clock Models",
        body: [
          "The project used Personal Genome Project UK data, accessed through API metadata and FTP-hosted IDAT files. The report describes 24 participant samples, 48 IDAT files, and 24 x 485,512 CpG methylation measurements. That creates the classic high-dimensional modelling context: far more methylation features than samples, requiring careful feature selection, prior clock definitions, and robust data processing.",
          "The modelling layer focused on three epigenetic clocks. Horvath's pan-tissue clock uses elastic net regression and a 353-CpG signature. Hannum's blood-calibrated clock uses LASSO and 71 CpG predictors. GrimAge incorporates methylation signals connected to plasma protein surrogates, smoking exposure, mortality, and healthspan risk. Together, the clocks provide complementary views of biological aging rather than a single absolute truth.",
        ],
      },
      {
        heading: "The Platform Architecture",
        body: [
          "NovaGene was built on Microsoft Azure with a layered architecture: PGP UK API and FTP sources, Azure Data Factory for orchestration, Azure Data Lake Gen2 with landing/raw/processing/output zones, an Ubuntu VM for heavy R and Spark computation, Azure SQL for analytical serving, and Power BI plus Streamlit for user-facing interpretation.",
          "The report highlights practical engineering constraints too. Under an Azure for Students subscription, service principal creation was restricted, so the team introduced an Azure Function App as an HTTP bridge between Data Factory and the VM. Spark was used in both SparkR and PySpark contexts to convert outputs to Parquet and unify feature engineering across SQL tables.",
        ],
      },
      {
        heading: "My Role And Takeaway",
        body: [
          "My contribution covered exploratory data analysis, data understanding, domain understanding, and the Horvath and Hannum machine learning algorithm sections. That role matters because biological age modelling is not only implementation. It requires understanding how methylation clocks were constructed, why regularization is essential in high-dimensional epigenomic data, and how to explain age acceleration to non-specialist users.",
          "As a portfolio story, NovaGene shows a different side of applied ML: healthcare-adjacent data engineering, high-dimensional modelling, cloud orchestration, and interpretable analytics. It is a strong research card because it connects statistical learning with a deployable data platform and a user-facing reporting layer.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "Full NovaGene project report",
        href: "/files/eba5006-novagene-biological-age-report.pdf",
      },
      {
        label: "NovaGene dashboard repository referenced in the report",
        href: "https://github.com/AyaanIrfanNUS/novagene-epigenetic-dashboard",
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
