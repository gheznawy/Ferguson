import type { SVGProps } from "react";

export type IconName =
  | "air-quality"
  | "airflow"
  | "alert"
  | "arrow-right"
  | "briefcase"
  | "building"
  | "check"
  | "chevron-down"
  | "clock"
  | "diagnosis"
  | "facebook"
  | "family"
  | "fan"
  | "furnace"
  | "gear"
  | "google"
  | "gauge"
  | "home"
  | "heat-pump"
  | "location"
  | "mail"
  | "message"
  | "menu"
  | "phone"
  | "power"
  | "send"
  | "shield"
  | "snowflake"
  | "star"
  | "thermostat"
  | "tools"
  | "zap"
  | "x";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

export function Icon({ name, ...props }: IconProps) {
  const commonProps = {
    "aria-hidden": true,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2,
  };

  const paths: Record<IconName, React.ReactNode> = {
    "air-quality": <><path d="M5 18c6 0 10-4 10-10 3 2 4 5 3 8-1.3 3.8-5.7 5.6-9.4 4.2C5.4 19 3.4 16 4 12.7" /><path d="M8 16c3-2 6-4 8-8" /></>,
    airflow: <><path d="M3 8h10a3 3 0 1 0-3-3" /><path d="M3 12h15a3 3 0 1 1-3 3" /><path d="M3 16h7" /></>,
    alert: <><path d="m12 3 10 18H2L12 3Z" /><path d="M12 9v5M12 18h.01" /></>,
    "arrow-right": <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="12" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" /></>,
    building: <><path d="M4 21V4h10v17M14 9h6v12M8 8h2M8 12h2M8 16h2M17 13h1M17 17h1M2 21h20" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    "chevron-down": <path d="m7 10 5 5 5-5" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    diagnosis: <><circle cx="10" cy="10" r="6" /><path d="m15 15 5 5M7 10h6M10 7v6" /></>,
    facebook: <path fill="currentColor" stroke="none" d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V4a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3h2.8v8h3.4Z" />,
    family: <><circle cx="8" cy="7" r="3" /><circle cx="17" cy="8" r="2.5" /><path d="M2.5 20v-2a5.5 5.5 0 0 1 11 0v2M14 14a4.5 4.5 0 0 1 7.5 3.4V20" /></>,
    fan: <><circle cx="12" cy="12" r="2" /><path d="M12 10c-1-5 1-7 3-7s3 2 2 4-3 3-5 3ZM14 12c5-1 7 1 7 3s-2 3-4 2-3-3-3-5ZM12 14c1 5-1 7-3 7s-3-2-2-4 3-3 5-3ZM10 12c-5 1-7-1-7-3s2-3 4-2 3 3 3 5Z" /></>,
    furnace: <><rect x="5" y="3" width="14" height="18" rx="2" /><circle cx="12" cy="11" r="4" /><path d="M10 17h4M9 6h6" /></>,
    gear: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6 1.7 1.7 0 0 0 10 3V2.8h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" /></>,
    google: <path fill="currentColor" stroke="none" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.7h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.8 3-4.3 3-7.2ZM12 22c2.7 0 5-.9 6.6-2.5l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.2H3.1v2.6A10 10 0 0 0 12 22ZM6.4 13.8A6 6 0 0 1 6.1 12c0-.6.1-1.2.3-1.8V7.6H3.1A10 10 0 0 0 2 12c0 1.6.4 3.1 1.1 4.4l3.3-2.6ZM12 6c1.5 0 2.8.5 3.8 1.5l2.9-2.8A9.7 9.7 0 0 0 12 2a10 10 0 0 0-8.9 5.6l3.3 2.6A6 6 0 0 1 12 6Z" />,
    gauge: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l4 2M5 16h14" /></>,
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v11h14V10M9 21v-6h6v6" /></>,
    "heat-pump": <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="12" cy="12" r="5" /><path d="M12 9c2-2 4-1 4 1s-2 3-4 2M10 12c-2 2-1 4 1 4s3-2 2-4M12 10c-2-2-4-1-4 1s2 3 4 2" /></>,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
    message: <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.7 9.7 0 0 1-4.1-.9L3 20.5l1.4-4.2A8 8 0 0 1 3 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5Z" />,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    phone: <path d="M21 16.8v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.1 4 2 2 0 0 1 3.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L7 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c1 .3 2 .6 3 .7a2 2 0 0 1 1.6 1.9Z" />,
    power: <><path d="M12 2v10" /><path d="M5.6 5.6a9 9 0 1 0 12.8 0" /></>,
    send: <><path d="m22 2-7 20-4-9-9-4 20-7Z" /><path d="M22 2 11 13" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>,
    snowflake: <><path d="M12 2v20M4.2 6.5l15.6 11M4.2 17.5l15.6-11" /><path d="m9 4 3 3 3-3M9 20l3-3 3 3M4.5 10l4 .8-.8-4M19.5 14l-4-.8.8 4M4.5 14l4-.8-.8 4M19.5 10l-4 .8.8-4" /></>,
    star: <path d="m12 2.5 2.9 5.9 6.5 1-4.7 4.5 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5-4.7-4.5 6.5-1L12 2.5Z" />,
    thermostat: <><path d="M10 14.8V5a2 2 0 1 1 4 0v9.8a4 4 0 1 1-4 0Z" /><path d="M12 7v9" /></>,
    tools: <><path d="m14.7 6.3 3-3a5 5 0 0 1-6.4 6.4L5.7 15.3a2 2 0 0 0 2.8 2.8l5.6-5.6a5 5 0 0 0 6.4-6.4l-3 3-2.8-.8-.8-2.8Z" /><path d="m5 3 4 4M3 5l4 4" /></>,
    zap: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
    x: <><path d="M6 6l12 12M18 6 6 18" /></>,
  };

  return (
    <svg viewBox="0 0 24 24" {...commonProps} {...props}>
      {paths[name]}
    </svg>
  );
}
