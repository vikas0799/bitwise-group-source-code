"use client";

import { motion } from "framer-motion";
import { Award, Handshake, Layers3, Lightbulb, ShieldCheck, TrendingUp } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { features } from "@/lib/data";

const icons = [Lightbulb, Layers3, ShieldCheck, Award, TrendingUp, Handshake] as const;

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="container-elite">
        <SectionTitle
          eyebrow="Why Choose Us"
          title="Built like a technology partner, measured like a growth partner."
          description="The value is not only in what we create. It is in how cleanly it plugs into the business, how fast teams adopt it and how long it keeps compounding."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
              >
                <GlassCard className="h-full p-6">
                  <div className="flex items-start justify-between gap-5">
                    <Icon className="size-8 text-blue-600" aria-hidden="true" />
                    <span className="rounded-md border border-blue-300 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      {feature.metric}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-blue-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
