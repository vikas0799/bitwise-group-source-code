"use client";

import type { LucideIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  Icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  services: readonly string[];
  metric: string;
  accent: string;
};

export default function ServiceCard({
  Icon,
  eyebrow,
  title,
  description,
  services,
  metric,
  accent
}: ServiceCardProps) {
  return (
    <GlassCard className="h-full p-6 sm:p-7">
      <div className="flex items-start justify-between gap-5">
        <div
          className={cn(
            "flex size-12 items-center justify-center rounded-lg bg-gradient-to-br text-primary-dark shadow-md",
            accent
          )}
        >
          <Icon className="size-6" aria-hidden="true" />
        </div>
        <span className="rounded-md border border-blue-300 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase text-blue-600">
          {eyebrow}
        </span>
      </div>
      <h3 className="mt-6 text-2xl font-semibold leading-tight text-blue-900">
        {title}
      </h3>
      <p className="mt-4 min-h-24 text-sm leading-7 text-slate-700">
        {description}
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {services.map((service) => (
          <div key={service} className="flex items-center gap-2 text-sm text-slate-700">
            <CheckCircle2 className="size-4 shrink-0 text-blue-600" aria-hidden="true" />
            <span>{service}</span>
          </div>
        ))}
      </div>
      <div className="mt-7 border-t border-blue-200 pt-5 text-sm font-semibold text-blue-900">
        {metric}
      </div>
    </GlassCard>
  );
}
