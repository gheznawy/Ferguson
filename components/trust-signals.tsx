import { Icon, type IconName } from "./icons";

export type TrustSignalItem = {
  label: string;
  icon: IconName;
};

export const defaultTrustSignals: TrustSignalItem[] = [
  { label: "22 Years Experience", icon: "clock" },
  { label: "Licensed & Insured", icon: "shield" },
  { label: "Family-Owned & Operated", icon: "family" },
  { label: "5.0 Google Rating", icon: "star" },
];

type TrustSignalsProps = {
  items?: TrustSignalItem[];
  variant?: "grid" | "bar" | "inline";
  inverse?: boolean;
};

export function TrustSignals({ items = defaultTrustSignals, variant = "grid", inverse = false }: TrustSignalsProps) {
  const signalItems = items.map((item) => (
    <li key={item.label}>
      <Icon name={item.icon} width={22} height={22} />
      <span>{item.label}</span>
    </li>
  ));

  return (
    <div className={`trust-signals trust-signals--${variant}${inverse ? " trust-signals--inverse" : ""}`}>
      <div className="trust-signals__viewport">
        <div className="trust-signals__track">
          <ul className="trust-signals__list">{signalItems}</ul>
          <ul className="trust-signals__list" aria-hidden="true">{signalItems}</ul>
        </div>
      </div>
    </div>
  );
}
