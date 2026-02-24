import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

type NavbarProps = {
  activeSection: string;
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

export function Navbar({ activeSection, theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("#hero")}
          className="text-white font-bold text-xl tracking-tight hover:text-indigo-400 transition-colors cursor-pointer"
        >
          <span className="text-indigo-400">J</span>omari
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => {
            const id = href.slice(1);
            const isActive = activeSection === id;
            return (
              <li key={href}>
                <button
                  onClick={() => handleNavClick(href)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer",
                    isActive
                      ? "text-white bg-indigo-500/15 border border-indigo-500/30"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <ul className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map(({ href, label }) => {
                const id = href.slice(1);
                const isActive = activeSection === id;
                return (
                  <li key={href}>
                    <button
                      onClick={() => handleNavClick(href)}
                      className={cn(
                        "w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer",
                        isActive
                          ? "text-white bg-indigo-500/15 border border-indigo-500/30"
                          : "text-zinc-400 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
