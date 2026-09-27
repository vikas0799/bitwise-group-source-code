"use client";

import type { LucideIcon } from "lucide-react";
import { BarChart3, BrainCircuit, Code2, Megaphone, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { pillars, type PillarIcon } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap: Record<PillarIcon, LucideIcon> = {
  software: Code2,
  analytics: BarChart3,
  media: Megaphone,
  training: BrainCircuit
};

const colorMap: Record<PillarIcon, { bg: string; border: string; icon: string; header: string }> = {
  software: {
    bg: "bg-white",
    border: "border-blue-300",
    icon: "text-blue-600",
    header: "bg-blue-600"
  },
  analytics: {
    bg: "bg-white",
    border: "border-emerald-300",
    icon: "text-emerald-600",
    header: "bg-emerald-600"
  },
  media: {
    bg: "bg-white",
    border: "border-orange-300",
    icon: "text-orange-600",
    header: "bg-orange-600"
  },
  training: {
    bg: "bg-white",
    border: "border-purple-300",
    icon: "text-purple-600",
    header: "bg-purple-600"
  }
};

export default function BusinessPillars() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="scroll-mt-24 relative overflow-hidden py-24 sm:py-28">
      <div className="container-elite">
        <SectionTitle
          eyebrow="One Vision. Four Powers."
          title="Endless Possibilities"
          description="Four specialized divisions working as one connected ecosystem to drive digital transformation across technology, data, marketing, and education."
        />

        <motion.div
          className="mt-14 grid gap-6 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {pillars.map((pillar) => {
            const colors = colorMap[pillar.icon];
            return (
              <motion.div
                key={pillar.title}
                id={pillar.icon === "training" ? "training" : undefined}
                className="scroll-mt-28"
                variants={itemVariants}
              >
                <div className={cn("relative rounded-xl border-2 p-7 sm:p-8 overflow-hidden group hover:shadow-xl transition-shadow duration-300", colors.bg, colors.border)}>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className={cn("p-3 rounded-lg text-white shadow-md", colors.header)}>
                        {React.createElement(iconMap[pillar.icon], { className: "size-6", "aria-hidden": "true" })}
                      </div>
                      <span className={cn("text-xs font-bold uppercase px-3 py-1 rounded-md", colors.icon)}>
                        {pillar.eyebrow}
                      </span>
                    </div>

                    <h3 className={cn("text-2xl sm:text-3xl font-bold leading-tight mb-3", colors.icon)}>
                      {pillar.title}
                    </h3>

                    <p className="text-sm leading-7 text-slate-700 mb-6 min-h-20">
                      {pillar.description}
                    </p>

                    <div className="grid gap-2 sm:grid-cols-2 mb-7">
                      {pillar.services.slice(0, 8).map((service) => (
                        <div key={service} className="flex items-start gap-2">
                          <CheckCircle2 className={cn("size-5 shrink-0 mt-0.5", colors.icon)} aria-hidden="true" />
                          <span className="text-sm text-slate-700">{service}</span>
                        </div>
                      ))}
                    </div>

                    <div className={cn("border-t-2 pt-4 text-sm sm:text-base font-semibold", colors.border, colors.icon)}>
                      {pillar.metric}
                    </div>

                    {pillar.icon === "training" && (
                      <a
                        href="https://www.bitwiseschool.com"
                        className={cn("mt-4 inline-flex items-center gap-1 text-sm font-semibold underline underline-offset-4", colors.icon)}
                      >
                        Visit Bitwise School &rarr;
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
