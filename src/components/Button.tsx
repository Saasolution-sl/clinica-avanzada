import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "whatsapp" | "ghost";
  size?: "md" | "lg";
  className?: string;
  icon?: ReactNode;
};

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
  onClick?: () => void;
  type?: never;
};

type ButtonAsButton = BaseProps & {
  href?: never;
  external?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

const variantClasses: Record<NonNullable<BaseProps["variant"]>, string> = {
  primary: "bg-primary text-white hover:bg-primary-hover",
  secondary:
    "bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-white",
  whatsapp: "bg-whatsapp text-white hover:brightness-95",
  ghost: "bg-white/10 text-white border border-white/40 hover:bg-white/20",
};

const sizeClasses: Record<NonNullable<BaseProps["size"]>, string> = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
    icon,
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={props.onClick}
          className={classes}
        >
          {icon}
          {children}
        </a>
      );
    }
    return (
      // next-intl's typed Link expects a known pathname key; Button accepts
      // any internal path string, so we widen the type at this boundary.
      <Link href={props.href as Parameters<typeof Link>[0]["href"]} onClick={props.onClick} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button
      type={"type" in props ? props.type ?? "button" : "button"}
      onClick={"onClick" in props ? props.onClick : undefined}
      className={classes}
    >
      {icon}
      {children}
    </button>
  );
}
