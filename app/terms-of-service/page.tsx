import Link from "next/link";

import { LegalPage } from "@/components/legal-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Website Terms of Service | Ferguson & Sons Mechanical LLC",
  description: "Review the terms that govern use of the Ferguson & Sons Mechanical LLC website and its general HVAC service information.",
  path: "/terms-of-service/",
});

const sections = [
  {
    title: "Website Use",
    content: <><p>This website provides general information about Ferguson &amp; Sons Mechanical LLC and its HVAC services. You may use the site for lawful personal or business purposes related to learning about the company, contacting the team, or requesting service information.</p><p>You may not attempt to disrupt the site, gain unauthorized access, introduce malicious code, misuse forms, or use site content in a way that violates applicable law or another party’s rights.</p></>,
  },
  {
    title: "Quotes and Service Requests",
    content: <><p>A website form, phone call, or request for a free quote is an inquiry only. It does not create an appointment, service agreement, price commitment, or guarantee of availability.</p><p>The scope, scheduling, pricing, and other terms of HVAC work must be confirmed directly with Ferguson &amp; Sons. Service availability also depends on whether the requested location falls within the regular coverage area.</p></>,
  },
  {
    title: "Website Information",
    content: <p>Ferguson &amp; Sons aims to keep website information useful and accurate, but service descriptions and other site content are general and may change. Website content is not a substitute for an on-site HVAC diagnosis or a written service agreement.</p>,
  },
  {
    title: "Third-Party Services and Links",
    content: <p>The site may include maps and links to third-party platforms such as Google and Facebook. Those services are operated independently and are governed by their own terms and policies. A link does not give Ferguson &amp; Sons control over a third-party site.</p>,
  },
  {
    title: "Content and Intellectual Property",
    content: <p>The Ferguson &amp; Sons name, website design, written content, logos, and business photography are protected by applicable intellectual-property laws. Except for ordinary viewing and personal use of the site, content may not be copied, republished, sold, or used to imply an affiliation without permission.</p>,
  },
  {
    title: "Disclaimers and Limitation",
    content: <p>The website is provided on an “as available” basis for general informational use. To the extent permitted by law, Ferguson &amp; Sons is not responsible for losses caused by reliance on general website content, temporary site unavailability, or third-party sites. Nothing in these terms limits rights or obligations that cannot legally be limited.</p>,
  },
  {
    title: "Changes and Contact",
    content: <p>These terms may be updated as the website changes. Continued use of the site after an update means the current version applies to that use. Questions may be sent through the <Link href="/contact/">Contact page</Link> or discussed by calling <a href="tel:+17574067135">(757) 406-7135</a>. Please also review the <Link href="/privacy-policy/">Privacy Policy</Link>.</p>,
  },
];

export default function TermsOfServicePage() {
  return <LegalPage title="Terms of Service" introduction="These terms govern use of the Ferguson & Sons Mechanical LLC website. They apply to the website itself, not to separately agreed HVAC service terms." sections={sections} />;
}
