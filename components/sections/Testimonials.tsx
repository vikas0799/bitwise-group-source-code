"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % testimonials.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  const goTo = (direction: "prev" | "next") => {
    setActive((value) => {
      if (direction === "prev") {
        return value === 0 ? testimonials.length - 1 : value - 1;
      }
      return (value + 1) % testimonials.length;
    });
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="container-elite">
        <SectionTitle
          eyebrow="Testimonials"
          title="Trusted by operators, founders and learning leaders."
          description="Corporate teams choose Bitwise Ventures Group for clarity, execution and durable business impact."
        />

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="relative min-h-[420px] sm:min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[active].name}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <TestimonialCard testimonial={testimonials[active]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Show testimonial from ${testimonial.name}`}
                  className={`h-2.5 rounded-sm transition-all ${
                    active === index ? "w-10 bg-blue-600" : "w-2.5 bg-blue-200"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => goTo("prev")}
                aria-label="Previous testimonial"
                className="flex size-11 items-center justify-center rounded-lg border border-blue-300 bg-blue-50 text-blue-600 transition-colors hover:border-blue-500 hover:bg-blue-100"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => goTo("next")}
                aria-label="Next testimonial"
                className="flex size-11 items-center justify-center rounded-lg border border-blue-300 bg-blue-50 text-blue-600 transition-colors hover:border-blue-500 hover:bg-blue-100"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
