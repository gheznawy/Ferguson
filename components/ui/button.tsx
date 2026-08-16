import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline";

function buttonClasses(variant: ButtonVariant, inverse = false, className = "") {
  return ["button", `button--${variant}`, inverse ? "button--inverse" : "", className]
    .filter(Boolean)
    .join(" ");
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  inverse?: boolean;
  className?: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  inverse = false,
  className,
  external = false,
}: ButtonLinkProps) {
  const props = external ? { target: "_blank", rel: "noreferrer" } : {};

  return (
    <Link className={buttonClasses(variant, inverse, className)} href={href} {...props}>
      {children}
    </Link>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  inverse?: boolean;
};

export function Button({
  variant = "primary",
  inverse = false,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return <button className={buttonClasses(variant, inverse, className)} type={type} {...props} />;
}
