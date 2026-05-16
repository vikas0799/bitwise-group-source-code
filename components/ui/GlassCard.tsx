"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function GlassCard({
  children,
  className,
  hover = true
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
      className={cn(
        "glass-ring group relative overflow-hidden rounded-lg border border-blue-200 bg-white shadow-md backdrop-blur-sm",
        "before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.08),transparent_35%,rgba(37,99,235,0.04))] opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/60 to-transparent opacity-70" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
