import type { Metadata } from "next";
import { notFound } from "next/navigation";

import chesapeakePhoto from "../../../Selected-Pictures-for-Website/Gallery/05-residential-hvac-service-technician.jpg";
import norfolkPhoto from "../../../Selected-Pictures-for-Website/Gallery/02-commercial-rooftop-diagnostics.webp";
import portsmouthPhoto from "../../../Selected-Pictures-for-Website/Gallery/09-residential-ac-diagnostics.jpg";
import suffolkPhoto from "../../../Selected-Pictures-for-Website/Gallery/13-residential-heat-pump-installation.webp";
import virginiaBeachPhoto from "../../../Selected-Pictures-for-Website/Gallery/12-residential-condenser-deep-cleaning.jpg";
import { ServiceAreaDetailPage, type ServiceAreaDetailContent } from "@/components/service-area-detail-page";
import { createPageMetadata } from "@/lib/seo";

const sharedServices: ServiceAreaDetailContent["services"] = [
  { title: "A/C Repair & Diagnostics", description: "Troubleshooting and repair for no-cooling and cooling-performance problems.", href: "/services/ac-repair/", icon: "snowflake" },
  { title: "HVAC Maintenance", description: "Tune-ups, cleaning, and preventative service for reliable system care.", href: "/services/hvac-maintenance/", icon: "tools" },
  { title: "Heat Pump Service", description: "Heat-pump diagnostics, service, repair, and maintenance.", href: "/services/heat-pump-repair/", icon: "heat-pump" },
];

const areas: Record<string, ServiceAreaDetailContent> = {
  "chesapeake-va": {
    slug: "chesapeake-va",
    place: "Chesapeake",
    eyebrow: "Based in Chesapeake, Virginia",
    title: "Local HVAC Service in Chesapeake, VA",
    lead: "Ferguson & Sons Mechanical LLC is a family-owned Chesapeake HVAC company serving local homes and businesses with diagnostics, repair, maintenance, and installation.",
    heroImage: chesapeakePhoto,
    heroAlt: "Ferguson & Sons technician servicing residential HVAC equipment",
    overviewTitle: "Chesapeake Is Home",
    overview: [
      "Chesapeake is the home base of Ferguson & Sons and the center of the company’s regular South Hampton Roads service area. Chance and Kara Ferguson bring a hands-on, family-owned approach to every service request.",
      "The work starts with careful troubleshooting and clear explanations. Repair and service remain the priority when they are the sensible solution, with replacement available when the system’s condition calls for it.",
    ],
    callout: "Ferguson & Sons is locally known and a neighborhood favorite in Las Gaviotas.",
    servicesIntro: "Chesapeake customers can call on the full confirmed Ferguson & Sons service range for residential and commercial systems.",
    services: [...sharedServices, { title: "Commercial HVAC", description: "Diagnostics, repair, maintenance, and rooftop-unit service for local businesses.", href: "/services/commercial-hvac/", icon: "building" }],
    areaContextTitle: "Serving Chesapeake and the Surrounding Coverage Area",
    areaContext: "From its Chesapeake home base, Ferguson & Sons regularly serves Virginia Beach, Norfolk, Portsmouth, eastern Suffolk, and surrounding communities within the normal South Hampton Roads coverage area.",
    nearby: [{ label: "Virginia Beach", href: "/service-area/virginia-beach-va/" }, { label: "Norfolk", href: "/service-area/norfolk-va/" }, { label: "Portsmouth", href: "/service-area/portsmouth-va/" }],
    faqs: [
      { question: "Is Ferguson & Sons based in Chesapeake?", answer: "Yes. Ferguson & Sons Mechanical LLC is based in Chesapeake, Virginia." },
      { question: "Do you serve both homes and businesses in Chesapeake?", answer: "Yes. Ferguson & Sons provides residential and commercial HVAC diagnostics, repair, maintenance, and installation services." },
      { question: "Do you always recommend replacing an HVAC system?", answer: "No. The service approach begins with diagnosis and practical repair options. Replacement is available when it is the sensible solution for the system." },
      { question: "How can I request HVAC service in Chesapeake?", answer: "Use the quote form or call Ferguson & Sons at (757) 406-7135." },
    ],
  },
  "virginia-beach-va": {
    slug: "virginia-beach-va",
    place: "Virginia Beach",
    eyebrow: "Regular Virginia Beach Coverage",
    title: "HVAC Service in Virginia Beach, VA",
    lead: "Ferguson & Sons regularly serves Virginia Beach with straightforward HVAC diagnostics, repair, maintenance, and installation for homes and businesses.",
    heroImage: virginiaBeachPhoto,
    heroAlt: "Deep cleaning of a residential outdoor HVAC unit",
    overviewTitle: "Practical Service for Virginia Beach Systems",
    overview: [
      "Heating and cooling equipment benefits from careful inspection, cleaning, and timely component service. Ferguson & Sons brings 22 years of hands-on experience to residential and commercial systems throughout its regular Virginia Beach coverage.",
      "Customers receive a clear explanation of the problem and the available options, with repair and system care emphasized before replacement when that approach makes sense.",
    ],
    callout: "Available work includes condenser and coil cleaning, component diagnosis, cooling repair, heating service, and system replacement when appropriate.",
    servicesIntro: "The Virginia Beach service mix covers common comfort problems, routine system care, and both residential and commercial HVAC needs.",
    services: [...sharedServices, { title: "Indoor Air Quality", description: "Available filters, UV lights, humidifiers, and dehumidifiers to support comfort and system care.", href: "/services/indoor-air-quality/", icon: "air-quality" }],
    areaContextTitle: "Part of the Regular South Hampton Roads Route",
    areaContext: "Virginia Beach is one of Ferguson & Sons’ primary regular service areas, alongside Chesapeake, Norfolk, Portsmouth, and eastern Suffolk.",
    nearby: [{ label: "Chesapeake", href: "/service-area/chesapeake-va/" }, { label: "Norfolk", href: "/service-area/norfolk-va/" }, { label: "Portsmouth", href: "/service-area/portsmouth-va/" }],
    faqs: [
      { question: "Does Ferguson & Sons regularly serve Virginia Beach?", answer: "Yes. Virginia Beach is part of the company’s regular South Hampton Roads service area." },
      { question: "Can you diagnose an A/C system that is not cooling?", answer: "Yes. A/C repair and no-cooling diagnosis are confirmed Ferguson & Sons services." },
      { question: "Is HVAC maintenance available in Virginia Beach?", answer: "Yes. Ferguson & Sons provides tune-ups, cleaning, preventative maintenance, and an annual maintenance plan with two professional visits per system." },
      { question: "Do you provide commercial HVAC service?", answer: "Yes. Commercial diagnostics, repair, maintenance, and rooftop-unit service are available within the regular service area." },
    ],
  },
  "norfolk-va": {
    slug: "norfolk-va",
    place: "Norfolk",
    metadataTitle: "HVAC Service in Norfolk, VA | Ferguson & Sons",
    eyebrow: "Regular Norfolk Coverage",
    title: "Residential & Commercial HVAC Service in Norfolk, VA",
    lead: "Ferguson & Sons provides Norfolk homeowners and businesses with experienced HVAC diagnostics, repair, maintenance, and replacement when appropriate.",
    heroImage: norfolkPhoto,
    heroAlt: "Technician diagnosing commercial rooftop HVAC equipment",
    overviewTitle: "Support for Homes and Local Businesses",
    overview: [
      "Ferguson & Sons serves both residential and commercial customers in Norfolk. That includes common home comfort problems as well as commercial repair, diagnostics, maintenance, and rooftop-unit work.",
      "The same service-first standard applies across both settings: identify the problem, explain the practical options, and repair or maintain the existing equipment when that is the sensible path.",
    ],
    callout: "Residential and commercial capability is backed by 22 years of HVAC experience.",
    servicesIntro: "Norfolk coverage includes focused repair and maintenance support for household systems and business equipment.",
    services: [sharedServices[0], sharedServices[1], { title: "Commercial HVAC", description: "Commercial diagnostics, repair, maintenance, and rooftop-unit support.", href: "/services/commercial-hvac/", icon: "building" }, { title: "HVAC Component Repair", description: "Diagnosis and service for capacitors, compressors, fan motors, contactors, and related components.", href: "/services/hvac-component-repair/", icon: "gear" }],
    areaContextTitle: "Norfolk Within the Core Coverage Area",
    areaContext: "Norfolk is regularly served from the company’s Chesapeake base and sits within the established South Hampton Roads coverage area.",
    nearby: [{ label: "Chesapeake", href: "/service-area/chesapeake-va/" }, { label: "Virginia Beach", href: "/service-area/virginia-beach-va/" }, { label: "Portsmouth", href: "/service-area/portsmouth-va/" }],
    faqs: [
      { question: "Is Norfolk in the regular Ferguson & Sons service area?", answer: "Yes. Norfolk is one of the company’s confirmed regular South Hampton Roads service areas." },
      { question: "Do you work on commercial rooftop HVAC units?", answer: "Yes. Commercial rooftop-unit service and diagnostics are included in the confirmed commercial HVAC scope." },
      { question: "Can Ferguson & Sons repair HVAC components?", answer: "Yes. Component work includes diagnosis and service for capacitors, compressors, condenser fan motors, contactors, and related operating components." },
      { question: "How do I contact Ferguson & Sons?", answer: "Call (757) 406-7135 or use the website quote form." },
    ],
  },
  "portsmouth-va": {
    slug: "portsmouth-va",
    place: "Portsmouth",
    eyebrow: "Regular Portsmouth Coverage",
    title: "HVAC Repair & Maintenance in Portsmouth, VA",
    lead: "Ferguson & Sons regularly serves Portsmouth with careful HVAC troubleshooting, practical repairs, preventative maintenance, and system installation when needed.",
    heroImage: portsmouthPhoto,
    heroAlt: "Technician checking residential air-conditioning equipment",
    overviewTitle: "Diagnosis Before the Recommendation",
    overview: [
      "When an HVAC system is not heating or cooling correctly, the first step is understanding why. Ferguson & Sons provides hands-on diagnostics and clear explanations for Portsmouth customers.",
      "The goal is to service or repair the system when that is the practical solution. Maintenance, component work, and replacement are also available based on what the equipment actually needs.",
    ],
    callout: "The company’s confirmed service range covers A/C, heat pumps, furnaces, components, thermostats, and more.",
    servicesIntro: "Portsmouth customers have access to repair-first service along with preventative care and appropriate replacement options.",
    services: [sharedServices[0], sharedServices[1], sharedServices[2], { title: "Furnace Service", description: "Furnace diagnostics, service, repair, and maintenance.", href: "/services/furnace-repair/", icon: "furnace" }],
    areaContextTitle: "Connected to the South Hampton Roads Service Area",
    areaContext: "Portsmouth is within Ferguson & Sons’ regular service coverage, together with Chesapeake, Virginia Beach, Norfolk, eastern Suffolk, and surrounding communities in the normal coverage area.",
    nearby: [{ label: "Chesapeake", href: "/service-area/chesapeake-va/" }, { label: "Norfolk", href: "/service-area/norfolk-va/" }, { label: "Eastern Suffolk", href: "/service-area/suffolk-va/" }],
    faqs: [
      { question: "Does Ferguson & Sons serve Portsmouth?", answer: "Yes. Portsmouth is part of the company’s confirmed regular service area." },
      { question: "Do you repair heat pumps and furnaces?", answer: "Yes. Ferguson & Sons provides diagnostics, repair, service, and maintenance for heat pumps and furnaces." },
      { question: "Can I schedule routine HVAC cleaning?", answer: "Yes. Confirmed maintenance services include tune-ups, condenser and coil cleaning, filter and airflow-related maintenance, and seasonal service." },
      { question: "Is replacement the first recommendation?", answer: "No. Ferguson & Sons emphasizes careful diagnosis and repair or service when it makes sense, while offering replacement when appropriate." },
    ],
  },
  "suffolk-va": {
    slug: "suffolk-va",
    place: "Eastern Suffolk",
    metadataDescription: "Ferguson & Sons provides residential and commercial HVAC service within its regular eastern Suffolk and South Hampton Roads coverage area.",
    eyebrow: "Eastern Suffolk Coverage",
    title: "HVAC Service in Eastern Suffolk, VA",
    lead: "Ferguson & Sons serves eastern Suffolk as part of its regular South Hampton Roads coverage, providing residential and commercial HVAC service within the normal service footprint.",
    heroImage: suffolkPhoto,
    heroAlt: "Installed residential heat-pump equipment",
    overviewTitle: "Coverage Focused on Eastern Suffolk",
    overview: [
      "The regular Ferguson & Sons service area includes eastern Suffolk rather than unrestricted coverage across the entire city. Customers can contact the team to confirm whether a specific address falls within the normal route.",
      "Within the coverage area, Ferguson & Sons provides the same straightforward mix of diagnostics, repair, maintenance, and installation available throughout South Hampton Roads.",
    ],
    callout: "Not sure whether your Suffolk address is covered? Call (757) 406-7135 or send a quote request with your city and service details.",
    servicesIntro: "Eastern Suffolk customers can request help with cooling, heating, routine care, and system replacement when it is the appropriate solution.",
    services: [...sharedServices, { title: "HVAC Replacement", description: "System changeouts and installation when replacement is the sensible next step.", href: "/services/hvac-replacement-installation/", icon: "home" }],
    areaContextTitle: "The Western Edge of Regular Coverage",
    areaContext: "Eastern Suffolk is served alongside Portsmouth, Chesapeake, Norfolk, and Virginia Beach. Coverage outside the normal eastern Suffolk footprint should be confirmed directly before scheduling.",
    nearby: [{ label: "Portsmouth", href: "/service-area/portsmouth-va/" }, { label: "Chesapeake", href: "/service-area/chesapeake-va/" }, { label: "Norfolk", href: "/service-area/norfolk-va/" }],
    faqs: [
      { question: "Do you serve all of Suffolk?", answer: "The confirmed regular service area is eastern Suffolk. Please contact Ferguson & Sons to confirm whether a specific address is within the normal coverage area." },
      { question: "What HVAC services are available in eastern Suffolk?", answer: "Confirmed services include diagnostics, repair, maintenance, component service, heating and cooling work, and installation." },
      { question: "Do you serve both residential and commercial customers?", answer: "Yes. Ferguson & Sons serves homes and businesses within its regular service area." },
      { question: "What are the confirmed business hours?", answer: "The confirmed business-hour time is 8:00 AM–5:00 PM." },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(areas).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = areas[slug];
  if (!area) return {};
  return createPageMetadata({
    title: area.metadataTitle ?? `${area.title} | Ferguson & Sons`,
    description: area.metadataDescription ?? area.lead,
    path: `/service-area/${slug}/`,
  });
}

export default async function ServiceAreaCityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = areas[slug];
  if (!content) notFound();
  return <ServiceAreaDetailPage content={content} />;
}
