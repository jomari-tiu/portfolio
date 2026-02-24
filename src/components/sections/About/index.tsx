import { motion } from "framer-motion";
import {
  SectionContainer,
  SectionHeading,
} from "@/components/ui/SectionContainer";
import meImg from "@/assets/me-bnw.jpg";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "15+", label: "Projects Shipped" },
  { value: "4", label: "Companies" },
];

export function AboutSection() {
  return (
    <SectionContainer id="about" className="bg-[#0d0d0d]">
      <SectionHeading
        label="About Me"
        title="Who I Am"
        subtitle="A passionate frontend engineer who loves crafting beautiful, performant web experiences."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-40 blur-lg transition-all duration-500" />
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border border-white/10">
              <img
                src={meImg}
                alt="Jomari Tiu"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-zinc-400 leading-relaxed"
          >
            <p>
              I'm <span className="text-white font-medium">Jomari Tiu</span>, a
              Frontend Developer based in the Philippines with over{" "}
              <span className="text-indigo-400 font-medium">4 years</span> of
              industry experience building modern web and mobile applications.
            </p>
            <p>
              I specialize in{" "}
              <span className="text-white font-medium">React</span>,{" "}
              <span className="text-white font-medium">Next.js</span>, and{" "}
              <span className="text-white font-medium">TypeScript</span>, with a
              keen eye for UI detail, performance, and accessibility. I've
              worked across agencies and product companies — from WordPress
              microsites for The Economist to full-stack healthcare management
              systems.
            </p>
            <p>
              When I'm not building interfaces, I explore mobile development
              with{" "}
              <span className="text-white font-medium">
                React Native & Expo
              </span>{" "}
              and contribute to design system thinking and component library
              architecture.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-4 pt-4"
          >
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-colors"
              >
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-purple-400">
                  {value}
                </div>
                <div className="text-xs text-zinc-500 mt-1">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
