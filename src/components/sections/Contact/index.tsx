import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  CheckCircle,
} from "lucide-react";
import {
  SectionContainer,
  SectionHeading,
} from "@/components/ui/SectionContainer";
import { Button } from "@/components/ui/Button";
import { socialLinks, contactInfo } from "@/data/contact";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={20} />,
  linkedin: <Linkedin size={20} />,
  mail: <Mail size={20} />,
};

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionContainer id="contact" className="bg-black/20">
      <SectionHeading
        label="Contact"
        title="Get In Touch"
        subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
        {/* Form */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center justify-center gap-4 py-16 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                <CheckCircle size={32} className="text-green-400" />
              </div>
              <h3 className="text-white text-xl font-semibold">
                Message Sent!
              </h3>
              <p className="text-zinc-400 text-sm max-w-xs">
                Thanks for reaching out. I'll get back to you as soon as
                possible.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", message: "" });
                }}
                className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                {
                  id: "name",
                  label: "Name",
                  type: "text",
                  placeholder: "Jomari Tiu",
                },
                {
                  id: "email",
                  label: "Email",
                  type: "email",
                  placeholder: "jomtiu16@example.com",
                },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id} className="space-y-1.5">
                  <label
                    htmlFor={id}
                    className="block text-xs font-medium text-zinc-400"
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    value={form[id as keyof typeof form]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                  />
                </div>
              ))}

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-zinc-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-zinc-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all resize-none"
                />
              </div>

              <Button type="submit" className="w-full group">
                <Send
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
                Send Message
              </Button>
            </form>
          )}
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Let's work together
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              I'm currently{" "}
              <span className="text-green-400 font-medium">available</span> for
              new projects and collaborations. Whether it's a web app, a website
              redesign, or a mobile app — let's build something great.
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 text-zinc-400 text-sm">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
              <MapPin size={18} className="text-indigo-400" />
            </div>
            <div>
              <p className="text-zinc-500 text-xs">Location</p>
              <p className="text-white">{contactInfo.location}</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 text-zinc-400 text-sm">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
              <Mail size={18} className="text-indigo-400" />
            </div>
            <div>
              <p className="text-zinc-500 text-xs">Email</p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-white hover:text-indigo-400 transition-colors"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Social links */}
          <div>
            <p className="text-zinc-500 text-xs mb-3 uppercase tracking-widest">
              Find me on
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ label, url, icon }) => (
                <a
                  key={label}
                  href={url}
                  target={url.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-indigo-500/30 hover:bg-white/10 transition-all duration-200 text-sm"
                >
                  {iconMap[icon]}
                  {label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
