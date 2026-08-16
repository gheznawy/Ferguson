import type { ReactNode } from "react";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type LegalSection = {
  title: string;
  content: ReactNode;
};

export function LegalPage({ title, introduction, sections }: { title: string; introduction: string; sections: LegalSection[] }) {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="legal-hero" aria-labelledby="legal-title">
          <div className="site-container">
            <p className="section-eyebrow"><span aria-hidden="true" />Ferguson &amp; Sons Mechanical LLC</p>
            <h1 id="legal-title">{title}</h1>
            <p>{introduction}</p>
            <small>Last updated: August 16, 2026</small>
          </div>
        </section>
        <div className="legal-content">
          <div className="site-container legal-content__layout">
            <aside aria-label={`${title} contents`}><p>On this page</p><ol>{sections.map((section, index) => <li key={section.title}><a href={`#legal-section-${index + 1}`}>{section.title}</a></li>)}</ol></aside>
            <article>
              {sections.map((section, index) => <section id={`legal-section-${index + 1}`} key={section.title}><h2>{section.title}</h2>{section.content}</section>)}
            </article>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
