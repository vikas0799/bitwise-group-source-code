"use client";

import { motion } from "framer-motion";
import { Factory, GraduationCap, Leaf, PackageCheck, Rocket, Store } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { industries } from "@/lib/data";

const industryIcons = [GraduationCap, Leaf, Factory, Store, Rocket, PackageCheck] as const;
const industryCopy = [
  "Learning platforms, cohort analytics and institution-scale digital delivery.",
  "Farm operations, supply intelligence and market enablement for agriculture teams.",
  "Fleet visibility, workflow automation and business reporting for movement-heavy companies.",
  "Commerce systems, customer growth and inventory-informed decision support.",
  "Product launch systems, analytics discipline and growth architecture for founders.",
  "Affordable technology stacks, automation and marketing systems built for traction."
] as const;

export default function Industries() {
  return (
    <section id="industries" className="scroll-mt-24 relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="container-elite">
        <SectionTitle
          eyebrow="Industries Served"
          title="Specialized enough for domain needs. Flexible enough for tomorrow."
          description="Bitwise Ventures Group works across sectors where technology, data and capability building can unlock measurable growth."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industryIcons[index];
            return (
              <motion.article
                key={industry}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.04 }}
                whileHover={{ y: -8 }}
                className="group relative min-h-64 overflow-hidden rounded-lg border border-blue-200 bg-white p-6 shadow-md backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 via-transparent to-blue-100/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <Icon className="size-9 text-blue-600" aria-hidden="true" />
                    <h3 className="mt-7 text-2xl font-semibold text-blue-900">
                      {industry}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-700">
                      {industryCopy[index]}
                    </p>
                  </div>
                  <span className="mt-8 h-px w-full bg-gradient-to-r from-electric-300/70 to-transparent" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
