import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const NAME_LETTERS = "JOMARI".split("");
const FLOATING_BADGES = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "Expo",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const letterVariants = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 12 },
  },
};

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0d0d0d] px-4"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {FLOATING_BADGES.map((badge, i) => {
          const angle = (i / FLOATING_BADGES.length) * Math.PI * 2;
          const radiusX = 38;
          const radiusY = 28;
          const x = 50 + radiusX * Math.cos(angle);
          const y = 50 + radiusY * Math.sin(angle);
          return (
            <motion.div
              key={badge}
              className="absolute hidden lg:block"
              style={{ left: `${x}%`, top: `${y}%` }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 0.6,
                scale: 1,
                y: [0, -8, 0],
              }}
              transition={{
                opacity: { delay: 1.2 + i * 0.1, duration: 0.4 },
                scale: { delay: 1.2 + i * 0.1, duration: 0.4 },
                y: {
                  delay: 1.5 + i * 0.2,
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 backdrop-blur-sm whitespace-nowrap">
                {badge}
              </span>
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-1 sm:gap-2 mb-6"
        >
          {NAME_LETTERS.map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className="text-6xl sm:text-8xl md:text-[9rem] font-black text-white tracking-tight leading-none select-none"
              style={{
                textShadow: "0 0 80px rgba(99,102,241,0.3)",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-zinc-400 text-lg sm:text-xl mb-3"
        >
          Frontend Engineer
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-10"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-indigo-500" />
          <span className="text-sm font-semibold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 uppercase">
            Full Stack · Mobile · Open to Work
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500" />
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={() => scrollTo("projects")}
            className="group"
          >
            View My Work
            <ChevronRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo("contact")}
          >
            Contact Me
          </Button>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 hover:text-indigo-400 transition-colors cursor-pointer group"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} className="group-hover:text-indigo-400" />
        </motion.div>
      </motion.button>
    </section>
  );
}
