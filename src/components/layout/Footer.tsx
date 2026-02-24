import { Github, Linkedin, Mail } from "lucide-react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const SOCIALS = [
  { icon: Github, href: "https://github.com/Hohenheimn", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jomari-tiu/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:jomari.tiu@gmail.com", label: "Email" },
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <span className="text-white font-bold text-lg">
            <span className="text-indigo-400">J</span>omari Tiu
          </span>

          {/* Nav links */}
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <button
                  onClick={() => handleNavClick(href)}
                  className="text-zinc-500 hover:text-white text-sm transition-colors cursor-pointer"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-500 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <p className="text-center text-zinc-600 text-xs mt-8">
          © {new Date().getFullYear()} Jomari Tiu. Built with React + Vite + Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
