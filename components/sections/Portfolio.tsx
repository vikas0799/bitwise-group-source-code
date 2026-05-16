"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import SectionTitle from "@/components/ui/SectionTitle";
import { portfolioItems } from "@/lib/data";

export default function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="container-elite">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            align="left"
            eyebrow="Portfolio"
            title="Premium systems designed for real operating environments."
            description="A sample of the product, analytics, growth and learning experiences the group can deliver."
            className="max-w-2xl"
          />
          <AnimatedButton href="#contact" variant="secondary" className="self-start lg:self-auto">
            Discuss a Build
          </AnimatedButton>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.06 }}
              className="group overflow-hidden rounded-lg border border-blue-200 bg-white shadow-md backdrop-blur-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-blue-200 bg-white">
                <Image
                  src={item.image}
                  alt={`${item.title} project preview`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                  <span className="rounded-md border border-blue-300 bg-primary/90 px-3 py-2 text-xs font-semibold uppercase text-blue-600 backdrop-blur-xl">
                    {item.category}
                  </span>
                  <span className="rounded-md bg-blue-600 px-3 py-2 text-xs font-semibold text-primary-dark">
                    {item.result}
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-5">
                  <h3 className="text-2xl font-semibold text-blue-900">{item.title}</h3>
                  <ArrowUpRight className="mt-1 size-5 shrink-0 text-blue-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-700">
                  {item.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-md border border-blue-300 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
