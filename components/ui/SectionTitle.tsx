"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  className
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "mx-0 text-left",
        className
      )}
    >
      <p className="mb-3 text-sm font-semibold uppercase text-blue-600">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold leading-tight text-blue-900 md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-slate-700 md:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
