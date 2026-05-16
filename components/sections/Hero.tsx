"use client";

import { motion } from "framer-motion";
import { ArrowDown, BarChart3, Binary, BrainCircuit, Cloud, Code2, Megaphone, ShieldCheck } from "lucide-react";
import HeroStats from "@/components/HeroStats";
import AnimatedButton from "@/components/ui/AnimatedButton";

const particles = [
  { left: "8%", top: "22%", delay: 0, duration: 8 },
  { left: "15%", top: "72%", delay: 0.6, duration: 9 },
  { left: "24%", top: "38%", delay: 1.2, duration: 7 },
  { left: "38%", top: "18%", delay: 0.3, duration: 10 },
  { left: "46%", top: "78%", delay: 1.7, duration: 8 },
  { left: "58%", top: "28%", delay: 0.9, duration: 9 },
  { left: "72%", top: "16%", delay: 1.4, duration: 8 },
  { left: "82%", top: "42%", delay: 0.4, duration: 10 },
  { left: "90%", top: "76%", delay: 1, duration: 9 },
  { left: "66%", top: "68%", delay: 0.2, duration: 7 }
] as const;

const floatingCards = [
  {
    label: "Software",
    value: "Solutions",
    Icon: Code2,
    position: { left: "-0.75rem", top: "3.25rem" }
  },
  {
    label: "Data Analytics",
    value: "Business Support",
    Icon: BarChart3,
    position: { right: "-0.75rem", top: "6.5rem" }
  },
  {
    label: "Media",
    value: "Marketing Services",
    Icon: Megaphone,
    position: { left: "-0.5rem", bottom: "8.5rem" }
  },
  {
    label: "Training",
    value: "Career Services",
    Icon: BrainCircuit,
    position: { right: "0.5rem", bottom: "2.5rem" }
  }
] as const;

function ParticleField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className="absolute size-1 rounded-sm bg-blue-500/60"
          style={{ left: particle.left, top: particle.top }}
          animate={{ y: [0, -18, 0], opacity: [0.3, 0.95, 0.3] }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      <svg className="absolute inset-0 h-full w-full opacity-20" aria-hidden="true">
        <line x1="8%" y1="22%" x2="38%" y2="18%" stroke="rgba(37,99,235,0.35)" strokeWidth="1" />
        <line x1="38%" y1="18%" x2="72%" y2="16%" stroke="rgba(37,99,235,0.32)" strokeWidth="1" />
        <line x1="24%" y1="38%" x2="58%" y2="28%" stroke="rgba(37,99,235,0.28)" strokeWidth="1" />
        <line x1="58%" y1="28%" x2="82%" y2="42%" stroke="rgba(37,99,235,0.28)" strokeWidth="1" />
        <line x1="46%" y1="78%" x2="66%" y2="68%" stroke="rgba(37,99,235,0.28)" strokeWidth="1" />
      </svg>
    </div>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 36 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
      className="relative mx-auto hidden min-h-[560px] w-full max-w-[560px] lg:block"
    >
      <div className="absolute inset-7 rounded-lg border border-blue-300/40 bg-radial-lines opacity-60" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        className="absolute inset-16 rounded-lg border border-dashed border-blue-300/30"
      />
      <div className="absolute left-1/2 top-1/2 z-20 w-[72%] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="scanline glass-ring overflow-hidden rounded-lg border border-blue-200 bg-white p-6 shadow-md backdrop-blur-sm"
        >
          <div className="flex items-center justify-between border-b border-blue-200 pb-4">
            <div>
              <p className="text-xs font-semibold uppercase text-blue-600">
                One Vision
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-blue-900">
                Four Powers Growth Grid
              </h2>
            </div>
            <ShieldCheck className="size-8 text-blue-600" aria-hidden="true" />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {["Build", "Analyze", "Market", "Train"].map((item, index) => (
                <div key={item} className="rounded-lg border border-blue-200 bg-white p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-700">
                  <span className="size-2 rounded-sm bg-blue-600" />
                  {item}
                </div>
                <div className="mt-4 h-2 rounded-sm bg-blue-200">
                  <motion.div
                    className="h-2 rounded-sm bg-gradient-to-r from-blue-600 to-blue-500"
                    initial={{ width: "20%" }}
                    animate={{ width: `${62 + index * 8}%` }}
                    transition={{ duration: 1.2, delay: 0.5 + index * 0.08 }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg border border-blue-200 bg-white p-4">
            <div className="flex items-center gap-3">
              <Cloud className="size-5 text-blue-600" aria-hidden="true" />
              <p className="text-sm font-semibold text-blue-900">
                Innovate. Transform. Grow Together.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {floatingCards.map(({ label, value, Icon, position }, index) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: 0.55 + index * 0.08 },
            scale: { duration: 0.5, delay: 0.55 + index * 0.08 },
            y: { duration: 5 + index, repeat: Infinity, ease: "easeInOut" }
          }}
          style={position}
          className="glass-ring absolute z-10 w-52 rounded-lg border border-blue-200 bg-white p-4 shadow-md backdrop-blur-sm xl:w-56"
        >
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-lg bg-white border border-blue-200">
              <Icon className="size-5 text-blue-600" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-blue-900">{label}</span>
              <span className="block text-xs text-slate-600">{value}</span>
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-28 lg:pt-20 bg-white hero-aurora animate-aurora"
      aria-labelledby="hero-heading"
    >
      <ParticleField />
      <div className="absolute inset-0 bg-grid-lines bg-[length:72px_72px] opacity-5" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />

      <div className="container-elite relative z-10 grid min-h-[calc(100vh-5rem)] items-center gap-12 pb-20 pt-10 lg:grid-cols-[1.02fr_0.98fr] lg:pb-12">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-md border border-blue-300 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700"
          >
            <Binary className="size-4" aria-hidden="true" />
            One Vision - Four Powers - Endless Possibilities
          </motion.div>
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
            className="text-balance text-4xl font-semibold leading-[1.05] text-blue-900 sm:text-5xl md:text-6xl xl:text-7xl"
          >
            Transforming Businesses Through Technology, Data & Innovation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: "easeOut" }}
            className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl md:leading-9"
          >
            Bitwise Ventures Group helps startups, businesses and institutions
            innovate, transform and grow together through software, analytics,
            marketing and technology training.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <AnimatedButton href="#services">Explore Services</AnimatedButton>
            <AnimatedButton href="#contact" variant="secondary">
              Contact Us
            </AnimatedButton>
          </motion.div>
          <div className="mt-10">
            <HeroStats />
          </div>
        </div>

        <HeroVisual />
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 rounded-lg border border-blue-300 bg-blue-50 p-3 text-blue-600 backdrop-blur-xl transition-colors hover:text-blue-700 hover:bg-blue-100 md:block"
      >
        <ArrowDown className="size-5 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
