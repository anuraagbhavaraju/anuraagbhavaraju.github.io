import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the AI portfolio homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Anuraag Bhavaraju - AI\/ML Engineer<\/title>/i);
  assert.match(html, /travelers on a cosmic journey/);
  assert.match(html, /Paulo Coelho, The Alchemist/);
  assert.match(html, /\/images\/anuraag-hero\.jpeg/);
  assert.match(html, /Anuraag Bhavaraju reading at a cafe/);
  assert.match(html, /Currently Involved In:/);
  assert.match(html, /LLM Reasoning/);
  assert.match(html, /AI for Healthcare/);
  assert.match(html, /Applied AI Research/);
  assert.match(html, /Quantum Algorithms/);
  assert.match(html, /View Selected Work/);
  assert.match(html, /Contact Me/);
  assert.doesNotMatch(html, /AI\/ML \| books \| coffee/);
  assert.match(html, /About me/);
  assert.match(html, /over 8 years of/);
  assert.match(html, /Fortune 500/);
  assert.match(html, /book cafe :D/);
  assert.match(html, /01 - Experience/);
  assert.match(html, /Roles where I have made impact/);
  assert.match(html, /Selected work/);
  assert.match(html, /Selected research/);
  assert.match(html, /Wipro Technologies/);
  assert.match(html, /Tredence Inc/);
  assert.match(html, /IIT Delhi, MISN Lab/);
  assert.match(html, /Singapore General Hospital/);
  assert.doesNotMatch(html, /01 - Story|A chronological path through education, work, and applied research/);
  assert.match(html, /Clinical Risk Decision Acceleration/);
  assert.match(html, /TReK Knowledge Management System/);
  assert.match(html, /actionable brain for teams/);
  assert.match(html, /Customer Cosmos/);
  assert.match(html, /customer 360 feature layer/);
  assert.match(html, /Occupational Burnout Estimation/);
  assert.match(html, /exhaustion, depersonalisation, and personal growth/);
  assert.match(html, /Biological Age Modelling/);
  assert.match(html, /Horvath, Hannum, and GrimAge/);
  assert.match(html, /\/case-studies\/trek-knowledge-management-system/);
  assert.match(html, /\/case-studies\/customer-cosmos/);
  assert.match(html, /\/case-studies\/occupational-burnout-estimation/);
  assert.match(html, /\/case-studies\/biological-age-modelling-novagene/);
  assert.match(html, /Read 3-5 min case study/);
  assert.match(html, /Read 3-5 min research note/);
  assert.match(html, /75%/);
  assert.match(html, /100%/);
  assert.match(html, /90%/);
  assert.match(html, /anuraag-bhavaraju-resume\.pdf/);
  assert.doesNotMatch(html, /My work sits where machine learning, analytics, and practical decision systems meet/);
  assert.doesNotMatch(html, /Beyond work|Curious by habit/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview|react-loading-skeleton/i);

  assert.ok(html.indexOf("About me") < html.indexOf("01 - Experience"));
  assert.ok(html.indexOf("Jan 2026 - Present") < html.indexOf("Mar 2020 - Aug 2025"));
  assert.ok(html.indexOf("Mar 2020 - Aug 2025") < html.indexOf("Aug 2018 - Feb 2021"));
  assert.ok(html.indexOf("Senior Data Scientist") < html.indexOf("Research Associate"));
  assert.ok(html.indexOf("Research Associate") < html.indexOf("Project Engineer"));
  assert.ok(html.indexOf("Impact metrics") > html.indexOf("Awards and organisations"));
  assert.ok(html.indexOf("Impact metrics") < html.indexOf("06 - Connect"));
});

test("keeps portfolio assets and removes starter preview scaffolding", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /const selectedWork = \[/);
  assert.match(page, /const selectedResearch = \[/);
  assert.match(page, /proofHref/);
  assert.match(page, /caseStudyHref/);
  assert.match(page, /hero-quote/);
  assert.match(page, /about-section/);
  assert.match(page, /bottom-metrics/);
  assert.match(page, /tag-title/);
  assert.doesNotMatch(page, /Building enterprise and healthcare AI systems that move from research to measurable impact/);
  assert.doesNotMatch(page, /hero-lede|beyond-section|Beyond work|portrait-caption/);
  assert.match(page, /portrait-frame/);
  assert.doesNotMatch(page, /experience-marker|story-layout|timeline-meta|timeline-org|story-education|Academic path behind the work/);
  assert.match(page, /proof-status/);
  assert.doesNotMatch(page, /signal-panel|system-map|map-node|Decision system/);
  assert.match(layout, /openGraph:/);
  assert.match(layout, /\/og\.png/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(page, /_sites-preview|SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);

  await access(new URL("../public/og.png", import.meta.url));
  await access(new URL("../public/images/anuraag-hero.jpeg", import.meta.url));
  await access(new URL("../public/files/anuraag-bhavaraju-resume.pdf", import.meta.url));
  await access(new URL("../public/files/eba5002-occupational-burnout-final-report.pdf", import.meta.url));
  await access(new URL("../public/files/eba5006-novagene-biological-age-report.pdf", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
  await assert.rejects(access(new URL("../app/_sites-preview/preview.css", import.meta.url)));

  const previewFiles = await readdir(new URL("../app/_sites-preview", import.meta.url));
  assert.deepEqual(previewFiles, []);
});

test("renders internal case-study reads with full source links", async () => {
  const routes = [
    ["/case-studies/trek-knowledge-management-system", /Tredence GenAI healthcare and life sciences PoV mentioning TREK/],
    ["/case-studies/customer-cosmos", /Tredence Customer Cosmos solution page/],
    ["/case-studies/occupational-burnout-estimation", /Full EBA5002 final report/],
    ["/case-studies/biological-age-modelling-novagene", /Full NovaGene project report/],
  ];

  for (const [route, sourcePattern] of routes) {
    const response = await render(route);
    assert.equal(response.status, 200);
    const html = await response.text();

    assert.match(html, /3-5 min read/);
    assert.match(html, /Further Reading/);
    assert.match(html, /Back To Portfolio/);
    assert.match(html, sourcePattern);
  }

  const burnout = await (await render("/case-studies/occupational-burnout-estimation")).text();
  assert.match(burnout, /97k employee reviews/);
  assert.match(burnout, /eba5002-occupational-burnout-final-report\.pdf/);
  assert.match(burnout, /isb\.edu\/faculty-and-research/);

  const novagene = await (await render("/case-studies/biological-age-modelling-novagene")).text();
  assert.match(novagene, /11,652,288 CpG methylation measurements/);
  assert.match(novagene, /eba5006-novagene-biological-age-report\.pdf/);
  assert.match(novagene, /github\.com\/AyaanIrfanNUS\/novagene-epigenetic-dashboard/);
});
