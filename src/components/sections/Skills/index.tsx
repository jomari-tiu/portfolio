import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiFramer, SiRedux, SiVite, SiFigma, SiSass, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiPhp, SiWordpress, SiPrisma, SiPostgresql,
  SiMongodb, SiMysql, SiExpo, SiAndroid, SiFirebase, SiVercel,
  SiNetlify, SiDocker, SiGit, SiGithub,
  SiPostman, SiPnpm, SiVitest, SiStorybook,
  SiGithubactions,
} from "react-icons/si";
import { SectionContainer, SectionHeading } from "@/components/ui/SectionContainer";
import { cn } from "@/lib/utils";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ReactNode> = {
  SiReact: <SiReact />,
  SiNextdotjs: <SiNextdotjs />,
  SiTypescript: <SiTypescript />,
  SiJavascript: <SiJavascript />,
  SiTailwindcss: <SiTailwindcss />,
  SiFramer: <SiFramer />,
  SiZustand: <SiReact />,
  SiReactquery: <SiReact />,
  SiReacthookform: <SiReact />,
  SiAxios: <SiNodedotjs />,
  SiRedux: <SiRedux />,
  SiVite: <SiVite />,
  SiFigma: <SiFigma />,
  SiSass: <SiSass />,
  SiStyledcomponents: <SiReact />,
  SiW3C: <SiHtml5 />,
  SiStorybook: <SiStorybook />,
  SiShadcnui: <SiReact />,
  SiRadixui: <SiReact />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <SiCss3 />,
  SiNodedotjs: <SiNodedotjs />,
  SiExpress: <SiExpress />,
  SiPhp: <SiPhp />,
  SiWordpress: <SiWordpress />,
  SiPrisma: <SiPrisma />,
  SiPostgresql: <SiPostgresql />,
  SiMongodb: <SiMongodb />,
  SiMysql: <SiMysql />,
  SiOpenapi: <SiNodedotjs />,
  SiExpo: <SiExpo />,
  SiAndroid: <SiAndroid />,
  SiFirebase: <SiFirebase />,
  SiPwa: <SiReact />,
  SiVercel: <SiVercel />,
  SiNetlify: <SiNetlify />,
  SiGithubactions: <SiGithubactions />,
  SiDocker: <SiDocker />,
  SiAmazonwebservices: <SiVercel />,
  SiLinux: <SiNodedotjs />,
  SiGit: <SiGit />,
  SiGithub: <SiGithub />,
  SiVisualstudiocode: <SiGithub />,
  SiPostman: <SiPostman />,
  SiPnpm: <SiPnpm />,
  SiVitest: <SiVitest />,
  SiPlaywright: <SiNodedotjs />,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 200, damping: 15 },
  },
  exit: { scale: 0.8, opacity: 0, transition: { duration: 0.15 } },
};

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);

  const activeCategory = skillCategories.find((c) => c.id === activeTab)!;

  return (
    <SectionContainer id="skills" className="bg-black/20">
      <SectionHeading
        label="Skills"
        title="What I Work With"
        subtitle="Technologies and tools I've used across frontend, backend, mobile, and DevOps."
      />

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {skillCategories.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer",
              activeTab === id
                ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/40"
                : "text-zinc-500 hover:text-zinc-300 border border-transparent hover:border-white/10"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Skill grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
        >
          {activeCategory.skills.map(({ name, icon }) => (
            <motion.div
              key={name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/30 hover:bg-white/8 transition-all duration-200 group"
            >
              <span className="text-xl text-indigo-400 group-hover:text-indigo-300 flex-shrink-0">
                {iconMap[icon] ?? <SiReact />}
              </span>
              <span className="text-sm text-zinc-300 group-hover:text-white transition-colors font-medium leading-tight">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </SectionContainer>
  );
}
