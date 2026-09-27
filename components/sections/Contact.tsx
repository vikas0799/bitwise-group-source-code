"use client";

import { motion } from "framer-motion";
import { Facebook, Globe2, Linkedin, Mail, MapPin, MessageCircle, Phone, Send, Twitter } from "lucide-react";
import { FormEvent, useState } from "react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { contactInfo } from "@/lib/data";

const contactItems = [
  {
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    Icon: Mail
  },
  {
    label: "Mobile",
    value: contactInfo.phone,
    href: contactInfo.phoneHref,
    Icon: Phone
  },
  {
    label: "Website",
    value: contactInfo.website,
    href: contactInfo.websiteHref,
    Icon: Globe2
  },
  {
    label: "Office",
    value: contactInfo.officeAddress,
    href: "#contact",
    Icon: MapPin
  }
] as const;

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bitwise-school-of-technology-5a5296377/", Icon: Linkedin },
  { label: "X (Twitter)", href: "https://x.com/bitwiseschool", Icon: Twitter },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61578938786384", Icon: Facebook }
] as const;

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // No backend yet: open the visitor's email app with the message filled in.
    const form = new FormData(event.currentTarget);
    const body = [
      `Name: ${form.get("name") ?? ""}`,
      `Email: ${form.get("email") ?? ""}`,
      `Company: ${form.get("company") ?? ""}`,
      "",
      String(form.get("message") ?? "")
    ].join("\n");
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      "Project enquiry from bitwiseventuresgroup.org"
    )}&body=${encodeURIComponent(body)}`;
    setStatus(
      `Your email app should now be open. Press Send there. If nothing opened, email ${contactInfo.email} or use WhatsApp.`
    );
  };

  return (
    <section id="contact" className="scroll-mt-24 relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="container-elite">
        <SectionTitle
          eyebrow="Contact"
          title="Build the next operating advantage with Bitwise Ventures Group."
          description="Share the goal. We will help shape the right technology, data, marketing or training path."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <GlassCard hover={false} className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-blue-900">
                  Full name
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    className="min-h-12 rounded-lg border border-blue-300 bg-white px-4 text-sm text-blue-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-blue-900">
                  Work email
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="min-h-12 rounded-lg border border-blue-300 bg-white px-4 text-sm text-blue-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                    placeholder="you@company.com"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold text-blue-900">
                Company
                <input
                  name="company"
                  autoComplete="organization"
                  className="min-h-12 rounded-lg border border-blue-300 bg-white px-4 text-sm text-blue-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                  placeholder="Company or institution"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-blue-900">
                What do you want to build?
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="resize-none rounded-lg border border-blue-300 bg-white px-4 py-3 text-sm leading-7 text-blue-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-500"
                  placeholder="Tell us about the opportunity, challenge or training need."
                />
              </label>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <AnimatedButton icon={<Send className="size-4" aria-hidden="true" />}>
                  Send Message
                </AnimatedButton>
                <AnimatedButton
                  href={contactInfo.whatsappHref}
                  variant="secondary"
                  icon={<MessageCircle className="size-4" aria-hidden="true" />}
                >
                  WhatsApp
                </AnimatedButton>
              </div>
              {status ? (
                <p className="rounded-lg border border-blue-300 bg-white px-4 py-3 text-sm font-semibold text-blue-700">
                  {status}
                </p>
              ) : null}
            </form>
          </GlassCard>

          <div className="grid gap-6">
            <GlassCard hover={false} className="p-6 sm:p-8">
              <div className="grid gap-5">
                {contactItems.map(({ label, value, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-center gap-4 rounded-lg border border-blue-200 bg-white p-4 transition-colors hover:border-blue-400 hover:bg-blue-50"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-white border border-blue-200 text-blue-600">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase text-slate-600">
                        {label}
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-blue-900 group-hover:text-blue-700">
                        {value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
              <div className="mt-7 flex gap-3">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex size-11 items-center justify-center rounded-lg border border-blue-300 bg-blue-50 text-blue-600 transition-colors hover:border-blue-500 hover:text-blue-700 hover:bg-blue-100"
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <div className="mt-7 rounded-lg border border-blue-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase text-slate-600">Proprietor</p>
                <p className="mt-1 text-sm font-semibold text-blue-900">{contactInfo.proprietor}</p>
                <p className="mt-4 text-xs font-semibold uppercase text-slate-600">Contact</p>
                <p className="mt-1 text-sm font-semibold text-blue-900">
                  {contactInfo.contactPerson}
                  <span className="block text-slate-600">({contactInfo.contactRole})</span>
                </p>
              </div>
            </GlassCard>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative min-h-72 overflow-hidden rounded-lg border border-blue-200 bg-white shadow-md"
              aria-label="Map placeholder for Bitwise Ventures Group office"
            >
              <div className="absolute inset-0 bg-grid-lines bg-[length:42px_42px] opacity-5" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-transparent to-blue-50/40" />
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
                <span className="flex size-14 items-center justify-center rounded-lg bg-blue-600 text-primary-dark shadow-md">
                  <MapPin className="size-7" aria-hidden="true" />
                </span>
                <p className="mt-4 max-w-xs text-sm font-semibold text-blue-900">
                  Bitwise Ventures Group office presence
                </p>
                <p className="mt-2 max-w-xs text-xs leading-5 text-slate-600">
                  {contactInfo.officeAddress}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
