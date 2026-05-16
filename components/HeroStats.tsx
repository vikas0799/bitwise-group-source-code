"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { heroStats } from "@/lib/data";

function Counter({
  value,
  suffix
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 70, damping: 18 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    return spring.on("change", (latest) => setDisplay(Math.round(latest)));
  }, [spring]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function HeroStats() {
  return (
    <div className="grid grid-cols-3 gap-3 sm:max-w-xl">
      {heroStats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.58 + index * 0.09, duration: 0.5 }}
          className="rounded-lg border border-blue-300 bg-blue-50 p-3 backdrop-blur-sm sm:p-4"
        >
          <div className="text-2xl font-semibold text-blue-900 sm:text-3xl">
            {"value" in stat ? (
              <Counter value={stat.value} suffix={stat.suffix} />
            ) : (
              stat.text
            )}
          </div>
          <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
