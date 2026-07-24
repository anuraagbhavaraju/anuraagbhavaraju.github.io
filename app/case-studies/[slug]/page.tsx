import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "../data";

type CaseStudyPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const study = getCaseStudy(params.slug);

  if (!study) {
    return {
      title: "Case Study Not Found - Anuraag Bhavaraju",
    };
  }

  return {
    title: `${study.title} - Anuraag Bhavaraju`,
    description: study.deck,
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = getCaseStudy(params.slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="case-study-main">
      <nav className="case-nav" aria-label="Case study navigation">
        <a className="brand-mark" href="/" aria-label="Anuraag Bhavaraju home">
          AB
        </a>
        <a className="button secondary-button" href="/#work">
          Back To Portfolio
        </a>
      </nav>

      <article className="case-study-article">
        <header className="case-hero">
          <p className="section-kicker">{study.kind}</p>
          <p className="case-eyebrow">{study.eyebrow} - {study.readTime}</p>
          <h1>{study.title}</h1>
          <p>{study.deck}</p>
        </header>

        <section className="case-stats" aria-label="Key proof points">
          {study.stats.map((stat) => (
            <div key={stat}>{stat}</div>
          ))}
        </section>

        <div className="case-body">
          <aside className="case-sidebar">
            <div>
              <p className="section-kicker">Methods</p>
              <div className="tag-row">
                {study.methods.map((method) => (
                  <span key={method}>{method}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="section-kicker">Further Reading</p>
              <ul className="source-list">
                {study.sourceLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="case-sections">
            {study.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
