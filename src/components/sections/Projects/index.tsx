import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import {
  SectionContainer,
  SectionHeading,
} from "@/components/ui/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";
import type { ProjectType, Project } from "@/types";
import { ProjectModal } from "./ProjectModal";

type Filter = "all" | ProjectType;

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "web-app", label: "Web App" },
  { value: "website", label: "Website" },
];

const cardVariants = {
  hidden: { scale: 0.95, opacity: 0, y: 20 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 150, damping: 18 },
  },
  exit: { scale: 0.95, opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.projectType === filter);

  return (
    <SectionContainer id="projects" className="bg-[#0d0d0d]">
      <SectionHeading
        label="Projects"
        title="Things I've Built"
        subtitle="A selection of web apps, websites, and systems I've developed professionally."
      />

      {/* Filter tabs */}
      <div className="flex justify-center gap-2 mb-10">
        {FILTERS.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer",
              filter === value
                ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20"
                : "text-zinc-500 hover:text-zinc-300 border border-white/10 hover:border-white/20",
            )}
          >
            {label}
            <span className="ml-2 text-xs opacity-60">
              {value === "all"
                ? projects.length
                : projects.filter((p) => p.projectType === value).length}
            </span>
          </button>
        ))}
      </div>

      {/* Cards grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setSelectedProject(project)}
              className="group relative flex flex-col rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden shrink-0 bg-black/40">
                <img
                  src={project.coverImage ?? project.thumbnail ?? ""}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect fill='%23111' width='400' height='200'/%3E%3Ctext fill='%23444' font-family='sans-serif' font-size='14' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ENo Preview%3C/text%3E%3C/svg%3E";
                  }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-zinc-300 text-xs leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </div>
                {/* Type badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={cn(
                      "text-xs font-semibold px-2.5 py-1 rounded-full",
                      project.projectType === "web-app"
                        ? "bg-indigo-500/80 text-white"
                        : "bg-purple-500/80 text-white",
                    )}
                  >
                    {project.projectType === "web-app" ? "Web App" : "Website"}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-4 gap-3">
                <div>
                  <h3 className="text-white font-semibold text-base leading-tight group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 text-xs mt-1">
                    {project.organization}
                  </p>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 flex-1">
                  {project.technologies?.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="tech">
                      {tech}
                    </Badge>
                  ))}
                  {(project.technologies?.length ?? 0) > 4 && (
                    <Badge variant="tech">
                      +{(project.technologies?.length ?? 0) - 4}
                    </Badge>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-2 pt-1 border-t border-white/5">
                  {(project.demoLink ?? project.demoLink2) && (
                    <a
                      href={project.demoLink ?? project.demoLink2}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-indigo-400 transition-colors group/link"
                    >
                      <ExternalLink size={13} />
                      <span>Demo</span>
                      <ChevronRight
                        size={11}
                        className="-translate-x-1 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all"
                      />
                    </a>
                  )}
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors ml-auto"
                    >
                      <Github size={13} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </SectionContainer>
  );
}
