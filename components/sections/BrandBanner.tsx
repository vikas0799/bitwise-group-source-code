"use client";

import { motion } from "framer-motion";
import { Sparkles, Award, Users, Target, Zap } from "lucide-react";

const visionPillars = [
  { icon: Target, label: "One Vision", description: "Clear direction for growth" },
  { icon: Zap, label: "Four Powers", description: "Technology, Data, Marketing, Education" },
  { icon: Users, label: "Expert Teams", description: "Cross-functional specialists" },
  { icon: Award, label: "Proven Results", description: "Enterprise-grade delivery" }
] as const;

export default function BrandBanner() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="container-elite">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-3">
              <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-600">
                Brand Identity
              </span>
            </div>
            <h2 className="mb-4 text-4xl sm:text-5xl font-bold leading-tight text-blue-950">
              Bitwise Ventures Group
            </h2>
            <p className="mb-8 text-lg leading-8 text-slate-600">
              One connected ecosystem bringing together software engineering, data analytics, digital marketing, and technology training to drive innovation and business transformation across industries.
            </p>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-lg bg-white border-2 border-blue-200 p-6"
            >
              <div className="flex items-start gap-3">
                <Sparkles className="mt-1 size-6 shrink-0 text-blue-600" aria-hidden="true" />
                <div>
                  <p className="text-xl font-bold text-blue-950 mb-1">Innovate. Transform. Grow Together.</p>
                  <p className="text-sm text-blue-700">Our mission guides every project, partnership, and solution we deliver.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Pillars Grid */}
          <motion.div
            className="grid gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {visionPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.label}
                  variants={itemVariants}
                  className="group rounded-xl border-2 border-blue-200 bg-white p-6 hover:shadow-lg hover:border-blue-400 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-blue-600 p-3 text-primary-dark group-hover:bg-blue-700 transition-colors">
                      <Icon className="size-6" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-blue-950 mb-1">{pillar.label}</h3>
                      <p className="text-sm text-slate-600">{pillar.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
