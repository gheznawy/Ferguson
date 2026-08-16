import heroPhoto from "../../../Selected-Pictures-for-Website/Service Detail Template/01-service-detail-hero-ac-repair.png";
import realServicePhoto from "../../../Selected-Pictures-for-Website/Service Detail Template/02-service-detail-real-service-residential-equipment.png";
import { ServiceDetailPage, type ServiceDetailContent } from "@/components/service-detail-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "A/C Repair & Diagnosis in Chesapeake, VA | Ferguson & Sons",
  description: "Get careful A/C repair, no-cooling diagnosis, and HVAC troubleshooting for homes and businesses in Chesapeake and South Hampton Roads.",
  path: "/services/ac-repair/",
});

const content: ServiceDetailContent = {
  eyebrow: "A/C Repair & No-Cooling Diagnosis",
  title: <><strong>A/C Not Cooling?</strong><span>We’ll Find the<br />Problem.</span></>,
  lead: "When the summer heat hits South Hampton Roads and your system isn’t keeping up, you need a team that diagnoses accurately before recommending replacement. Ferguson & Sons provides dependable, honest A/C repair service to restore your comfort.",
  heroImage: heroPhoto,
  heroAlt: "Ferguson & Sons technician diagnosing a residential air-conditioning system",
  imageBadge: "Find the Problem First",
  problemsHeading: <>When Your A/C Isn’t <em>Keeping You Comfortable</em></>,
  problemsIntro: "Recognize these common warning signs? We identify the root cause before recommending major repairs or replacement.",
  problems: [
    { label: "A/C Not Cooling", icon: "thermostat" },
    { label: "System Blowing Warm Air", icon: "snowflake" },
    { label: "Weak or Uneven Airflow", icon: "airflow" },
    { label: "System Running but Not Cooling", icon: "gauge" },
    { label: "Cycling On and Off Frequently", icon: "power" },
    { label: "Unusual HVAC Performance", icon: "alert" },
  ],
  approachTitle: <>Diagnose First.<span>Recommend the Right<br />Next Step.</span></>,
  approachIntro: "We believe in honest troubleshooting, not high-pressure sales. Our service approach is to identify the factual root of the problem before suggesting solutions.",
  steps: [
    {
      title: "Inspect & Diagnose",
      description: "We carefully evaluate the system and test relevant A/C components to isolate the point of failure behind the no-cooling issue.",
      icon: "diagnosis",
    },
    {
      title: "Explain the Findings",
      description: "We explain what we found in clear language and walk through the practical service or repair options before moving forward.",
      icon: "family",
    },
    {
      title: "Repair or Recommend the Next Step",
      description: "We aim to repair the system when that is the sensible solution. If replacement is more appropriate, we provide a straightforward recommendation.",
      icon: "tools",
    },
  ],
  realServiceEyebrow: "Real HVAC Service",
  realServiceTitle: <>Repairs Start With<br />Understanding the System</>,
  realServiceDescription: "A/C problems are not all the same. Ferguson & Sons approaches service calls by evaluating the equipment, identifying the issue, and helping the customer understand the available options before moving forward.",
  realServicePoints: ["Straightforward Communication", "Service-Focused Recommendations", "Residential & Commercial Experience"],
  realServiceImage: realServicePhoto,
  realServiceAlt: "Residential HVAC equipment and service tools during an A/C repair visit",
  supportEyebrow: "Component Repair",
  supportTitle: "Sometimes the Problem Is One Part — Not the Whole System.",
  supportDescription: "Depending on the diagnosis, Ferguson & Sons can repair or replace HVAC components such as capacitors, compressors, condenser fan motors, and related parts.",
  supportItems: [
    { label: "Capacitors", icon: "zap" },
    { label: "Compressors", icon: "gear" },
    { label: "Condenser Fan Motors", icon: "fan" },
    { label: "Related HVAC Components", icon: "tools" },
  ],
  relatedServices: [
    { title: "HVAC Maintenance / Tune-Ups / Cleaning", description: "Regular service to support reliable system operation year-round.", href: "/services/hvac-maintenance/", icon: "gear" },
    { title: "HVAC Component Repair / Replacement", description: "Targeted service for specific parts to restore system operation.", href: "/services/hvac-component-repair/", icon: "tools" },
    { title: "Heat Pump Service / Repair", description: "Diagnosis, service, and repair for heat pump systems.", href: "/services/heat-pump-repair/", icon: "thermostat" },
    { title: "HVAC Replacement / Installation", description: "System replacement and installation when that is the sensible option.", href: "/services/hvac-replacement-installation/", icon: "furnace" },
  ],
  serviceAreaEyebrow: "Local A/C Service",
  serviceAreaTitle: "Serving South Hampton Roads",
  serviceAreaDescription: "Ferguson & Sons is based in Chesapeake and provides regular HVAC service throughout Chesapeake, Virginia Beach, Norfolk, Portsmouth, eastern Suffolk, and surrounding communities within its regular South Hampton Roads coverage area.",
  finalCtaHeading: "A/C Not Cooling? Let’s Find Out Why.",
  finalCtaDescription: "Dependable local A/C diagnostics and repair throughout Ferguson & Sons’ regular South Hampton Roads service area.",
};

export default function AcRepairPage() {
  return <ServiceDetailPage content={content} />;
}
