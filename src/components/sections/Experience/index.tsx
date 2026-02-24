import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { SectionContainer, SectionHeading } from "@/components/ui/SectionContainer";
import { cn } from "@/lib/utils";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  const workItems = experiences.filter((e) => e.type === "work");
  const eduItems = experiences.filter((e) => e.type === "education");

  return (
    <SectionContainer id="experience" className="bg-[#0d0d0d]">
      <SectionHeading
        label="Experience"
        title="My Journey"
        subtitle="Professional work history and educational background."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Work Experience */}
        <div>
          <h3 className="flex items-center gap-2 text-white font-semibold text-lg mb-8">
            <Briefcase size={18} className="text-indigo-400" />
            Work Experience
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              style={{ originY: 0 }}
              className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500/50 to-transparent"
            />

            <div className="space-y-6">
              {workItems.map((entry, i) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative pl-10"
                >
                  {/* Dot */}
                  <div
                    className={cn(
                      "absolute left-0 top-4 w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors",
                      i === 0
                        ? "bg-indigo-500/20 border-indigo-500 text-indigo-400"
                        : "bg-white/5 border-white/20 text-zinc-500"
                    )}
                  >
                    <Briefcase size={13} />
                  </div>

                  {/* Card */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/20 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h4 className="text-white font-semibold text-sm">
                          {entry.company}
                        </h4>
                        <p className="text-indigo-400 text-xs font-medium mt-0.5">
                          {entry.role}
                        </p>
                      </div>
                      {i === 0 && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/20 flex-shrink-0">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-3 mb-3 text-xs text-zinc-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {entry.dateRange}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={11} />
                        {entry.location}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {entry.bullets.slice(0, 3).map((b, bi) => (
                        <li
                          key={bi}
                          className="text-zinc-400 text-xs leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-indigo-500 mt-0.5 flex-shrink-0">
                            ▸
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="flex items-center gap-2 text-white font-semibold text-lg mb-8">
            <GraduationCap size={18} className="text-purple-400" />
            Education
          </h3>
          <div className="relative">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              style={{ originY: 0 }}
              className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-purple-500/30 to-transparent"
            />
            <div className="space-y-6">
              {eduItems.map((entry, i) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative pl-10"
                >
                  <div className="absolute left-0 top-4 w-8 h-8 rounded-full flex items-center justify-center border-2 bg-purple-500/10 border-purple-500/50 text-purple-400">
                    <GraduationCap size={13} />
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/20 transition-colors">
                    <h4 className="text-white font-semibold text-sm">
                      {entry.company}
                    </h4>
                    <p className="text-purple-400 text-xs font-medium mt-0.5 mb-2">
                      {entry.role}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-3 text-xs text-zinc-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {entry.dateRange}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={11} />
                        {entry.location}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {entry.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="text-zinc-400 text-xs leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-purple-500 mt-0.5 flex-shrink-0">
                            ▸
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
