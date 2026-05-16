"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-blue-200 bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white/50 backdrop-blur-sm"
      )}
    >
      <nav className="container-elite flex h-20 items-center justify-between gap-4">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <span className="glass-ring flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 border border-blue-200">
            <Sparkles className="size-5 text-blue-600" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block text-base font-bold text-blue-900">
              Bitwise Ventures
            </span>
            <span className="block text-[10px] font-bold tracking-wider uppercase text-blue-600">
              Group
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <AnimatedButton href="#contact" className="min-h-10 px-4 py-2">
            Start a Project
          </AnimatedButton>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className={cn(
            "glass-ring flex size-11 items-center justify-center rounded-lg border lg:hidden",
            isScrolled
              ? "border-blue-300 bg-blue-50 text-blue-700"
              : "border-primary/20 bg-primary/10 text-primary-dark"
          )}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-blue-200 bg-white/95 backdrop-blur-xl lg:hidden shadow-lg"
          >
            <div className="container-elite grid gap-2 py-5">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.035 }}
                  className="flex items-center justify-between rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700"
                >
                  {item.label}
                  <ChevronRight className="size-4 text-blue-600" aria-hidden="true" />
                </motion.a>
              ))}
              <AnimatedButton href="#contact" className="mt-2 w-full" ariaLabel="Contact Bitwise Ventures Group">
                Contact Us
              </AnimatedButton>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
