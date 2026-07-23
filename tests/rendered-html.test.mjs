import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
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
  assert.match(html, /Selected work/);
  assert.match(html, /Selected research/);
  assert.match(html, /Academic path behind the work/);
  assert.match(html, /M\.Tech in Enterprise Business Analytics/);
  assert.match(html, /Clinical Risk Decision Acceleration/);
  assert.match(html, /Occupational Burnout Estimation/);
  assert.match(html, /75%/);
  assert.match(html, /100%/);
  assert.match(html, /90%/);
  assert.match(html, /anuraag-bhavaraju-resume\.pdf/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview|react-loading-skeleton/i);
});

test("keeps portfolio assets and removes starter preview scaffolding", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /const selectedWork = \[/);
  assert.match(page, /const selectedResearch = \[/);
  assert.match(page, /hero-quote/);
  assert.doesNotMatch(page, /Building enterprise and healthcare AI systems that move from research to measurable impact/);
  assert.match(page, /portrait-frame/);
  assert.match(page, /story-layout/);
  assert.match(page, /story-education/);
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
  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
  await assert.rejects(access(new URL("../app/_sites-preview/preview.css", import.meta.url)));

  const previewFiles = await readdir(new URL("../app/_sites-preview", import.meta.url));
  assert.deepEqual(previewFiles, []);
});
