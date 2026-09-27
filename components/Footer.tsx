import { Globe2, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { contactInfo, navItems, pillars } from "@/lib/data";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bitwise-school-of-technology-5a5296377/", Icon: Linkedin },
  { label: "X (Twitter)", href: "https://x.com/bitwiseschool", Icon: Twitter }
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-blue-200 bg-white">
      <div className="container-elite grid gap-10 py-12 md:grid-cols-[1.15fr_0.85fr_0.85fr_1fr]">
        <div>
          <a href="#home" className="text-xl font-semibold text-blue-700">
            Bitwise Ventures Group
          </a>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
            A multi-domain technology group helping organizations build, operate,
            grow and learn with modern digital systems. Innovate. Transform.
            Grow Together.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-lg border border-blue-300 bg-blue-50 text-blue-600 transition-colors hover:border-blue-500 hover:text-blue-700 hover:bg-blue-100"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase text-blue-700">Quick Links</h2>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-600 hover:text-blue-700">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase text-blue-700">Services</h2>
          <div className="mt-4 grid gap-3">
            {pillars.map((pillar) => (
              <a key={pillar.title} href="#services" className="text-sm text-slate-600 hover:text-blue-700">
                {pillar.title.replace("Bitwise ", "")}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase text-blue-700">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm text-slate-600">
            <a href={`mailto:${contactInfo.email}`} className="flex gap-3 hover:text-blue-700">
              <Mail className="mt-0.5 size-4 shrink-0 text-blue-600" aria-hidden="true" />
              {contactInfo.email}
            </a>
            <a href={contactInfo.phoneHref} className="flex gap-3 hover:text-blue-700">
              <Phone className="mt-0.5 size-4 shrink-0 text-blue-600" aria-hidden="true" />
              {contactInfo.phone}
            </a>
            <a href={contactInfo.websiteHref} className="flex gap-3 hover:text-blue-700">
              <Globe2 className="mt-0.5 size-4 shrink-0 text-blue-600" aria-hidden="true" />
              {contactInfo.website}
            </a>
            <p className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-blue-600" aria-hidden="true" />
              {contactInfo.officeAddress}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-200 py-5">
        <div className="container-elite flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Bitwise Ventures Group. All rights reserved.</p>
          <p>One Vision. Four Powers. Endless Possibilities.</p>
        </div>
      </div>
    </footer>
  );
}
