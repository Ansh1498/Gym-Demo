import { Link } from "react-router-dom";
import { navLinks } from "@/data/navLinks";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-extrabold">FITINDIA GYM</h3>
          <p className="mt-2 text-sm text-slate-300">{siteConfig.tagline}</p>
          <p className="mt-4 text-sm text-slate-300">{siteConfig.address}</p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-brand">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-brand">
            Contact
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.email}</li>
            <li>{siteConfig.timing.weekdays}</li>
            <li>{siteConfig.timing.sunday}</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-300">
            {siteConfig.socials.map((s) => (
              <a key={s.label} href={s.href} className="transition-colors hover:text-white">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}