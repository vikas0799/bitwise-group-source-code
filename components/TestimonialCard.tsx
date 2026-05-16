"use client";

import { Quote } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import type { Testimonial } from "@/lib/data";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <GlassCard hover={false} className="p-6 sm:p-8">
      <Quote className="size-9 text-blue-600" aria-hidden="true" />
      <p className="mt-6 text-lg leading-9 text-blue-900">
        &quot;{testimonial.quote}&quot;
      </p>
      <div className="mt-8 border-t border-blue-200 pt-6">
        <p className="font-semibold text-blue-900">{testimonial.name}</p>
        <p className="mt-1 text-sm text-slate-600">
          {testimonial.role}, {testimonial.company}
        </p>
      </div>
    </GlassCard>
  );
}
