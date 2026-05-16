"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type AnimatedButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  icon?: ReactNode;
  ariaLabel?: string;
};

const baseClasses =
  "group inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500";

const variants = {
  primary:
    "bg-blue-600 text-white shadow-md hover:bg-blue-700",
  secondary:
    "glass-ring border border-blue-300 bg-blue-50 text-blue-700 hover:border-blue-500 hover:bg-blue-100",
  ghost: "text-blue-700 hover:bg-blue-50 hover:text-blue-900"
} as const;

export default function AnimatedButton({
  children,
  href,
  variant = "primary",
  className,
  icon,
  ariaLabel
}: AnimatedButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      <span className="flex size-4 items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
        {icon ?? <ArrowRight className="size-4" aria-hidden="true" />}
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        aria-label={ariaLabel}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseClasses, variants[variant], className)}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      aria-label={ariaLabel}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseClasses, variants[variant], className)}
    >
      {content}
    </motion.button>
  );
}
