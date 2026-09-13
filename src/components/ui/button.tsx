"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-btn " +
  "whitespace-nowrap " +
  "transition-[transform,box-shadow,background-color,border-color] duration-150 ease-out " +
  "focus-visible:outline-3 focus-visible:outline-offset-2";

/* §10 — hover lifts and grows the offset shadow; active presses into it. */
const brutalMotion =
  "shadow-brutal-sm hover:-translate-y-0.5 hover:shadow-brutal " +
  "active:translate-y-0.5 active:shadow-none";

const variants: Record<Variant, string> = {
  primary: `bg-primary text-ink border-2 border-ink ${brutalMotion}`,
  secondary: `bg-surface text-ink border-2 border-ink ${brutalMotion}`,
  ghost:
    "text-ink border-2 border-transparent hover:bg-slate-200/70 hover:border-border-subtle",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-13 px-7 text-base",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md") {
  return `${base} ${sizes[size]} ${variants[variant]}`;
}

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children" | "onClick">;

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  onClick,
  ...props
}: ButtonLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#") || href.startsWith("/#")) {
      const id = href.replace(/^\/?#/, "");
      const elem = document.getElementById(id);
      if (elem) {
        e.preventDefault();
        elem.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${id}`);
      }
    }
    onClick?.(e);
  };

  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={`${buttonClasses(variant, size)} ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${buttonClasses(variant, size)} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}

