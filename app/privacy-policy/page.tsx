import Link from "next/link";

import { LegalPage } from "@/components/legal-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy | Ferguson & Sons Mechanical LLC",
  description: "Read how information may be handled when you use the Ferguson & Sons Mechanical LLC website or submit a contact or quote request.",
  path: "/privacy-policy/",
});

const sections = [
  {
    title: "Information You Provide",
    content: <><p>If you use a contact or quote-request form, you may provide your first and last name, phone number, email address, city, the service you need, and details about your request. You may also provide information directly when you call Ferguson &amp; Sons.</p><p>Please do not submit sensitive personal, financial, or medical information through a website form.</p></>,
  },
  {
    title: "How Information Is Used",
    content: <><p>Information provided through the website may be used to review and respond to your request, discuss service needs, coordinate an appropriate next step, and maintain business records related to the inquiry.</p><p>Submitting a request does not guarantee service availability or create a service agreement.</p></>,
  },
  {
    title: "Website and Technical Data",
    content: <p>The website’s hosting and security services may process standard technical data such as IP address, browser type, device information, requested pages, and timestamps to deliver, secure, and maintain the site. The site may also use embedded or linked third-party services, including Google Maps, Google Business, and Facebook, which operate under their own privacy policies.</p>,
  },
  {
    title: "Sharing and Retention",
    content: <><p>Information may be handled by service providers that support website hosting, communications, security, or business operations. It may also be disclosed when required by law, to protect legal rights, or in connection with a business transfer.</p><p>Information is kept only as long as reasonably needed for the purpose for which it was provided, normal business recordkeeping, security, and legal obligations.</p></>,
  },
  {
    title: "Your Choices",
    content: <p>You may choose not to submit a website form and contact Ferguson &amp; Sons by phone instead. To ask about information you previously provided through the site, call <a href="tel:+17574067135">(757) 406-7135</a>. Reasonable identity verification may be required before a request can be completed.</p>,
  },
  {
    title: "Children’s Privacy",
    content: <p>This website is intended for people seeking residential or commercial HVAC services and is not directed to children. Do not submit personal information about a child through the website.</p>,
  },
  {
    title: "Policy Updates and Contact",
    content: <p>This policy may be updated as the website or its information-handling practices change. The date above identifies the latest version. Questions about this policy may be directed to Ferguson &amp; Sons through the <Link href="/contact/">Contact page</Link> or by calling <a href="tel:+17574067135">(757) 406-7135</a>.</p>,
  },
];

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" introduction="This policy explains how information may be handled when you use the Ferguson & Sons Mechanical LLC website or submit a contact or quote request." sections={sections} />;
}
