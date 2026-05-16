"use client";

import { motion } from "framer-motion";
import { Compass, Rocket, Target, TrendingUp } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

const values = [
  {
    title: "Mission",
    description:
      "Help ambitious organizations scale with reliable technology, sharper operations, stronger brands and market-ready talent.",
    Icon: Target
  },
  {
    title: "Vision",
    description:
      "Become a trusted innovation group that connects product, data, growth and education across the digital economy.",
    Icon: Compass
  },
  {
    title: "Growth Mindset",
    description:
      "Build repeatable systems, measure what matters and keep improving through every release, campaign and cohort.",
    Icon: TrendingUp
  },
  {
    title: "Innovation Culture",
    description:
      "Combine enterprise discipline with startup speed so ideas move from strategy to shipped outcomes.",
    Icon: Rocket
  }
] as const;

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="container-elite">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionTitle
            align="left"
            eyebrow="About Bitwise Ventures Group"
            title="A multi-domain innovation company built for modern business velocity."
            description="Bitwise Ventures Group helps businesses scale through technology, data, marketing and education. The official group philosophy is simple: Innovate. Transform. Grow Together."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {values.map(({ title, description, Icon }) => (
              <GlassCard key={title} className="p-6">
                <Icon className="size-7 text-blue-600" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold text-blue-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-700">{description}</p>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
