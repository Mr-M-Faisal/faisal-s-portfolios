import { motion } from "motion/react";
import { ArrowDown, Download, Sparkles } from "lucide-react";

const stack = ["Next.js", "React", "Node.js", "AWS", "MongoDB", "Socket.IO"];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center px-4 pt-28 pb-20 sm:px-6"
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="chip !text-foreground/80"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          Available for internships & freelance
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-5xl leading-[0.95] font-bold sm:text-7xl lg:text-8xl"
        >
          Muhammad
          <br />
          <span className="text-gradient">Faisal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-mono text-sm tracking-wide text-accent sm:text-base"
        >
          Software Engineering Student &amp; Full-Stack Cloud Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-xl text-lg text-muted-foreground"
        >
          Building modern, scalable web applications with Next.js, Node.js, and AWS Cloud.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform duration-300 hover:scale-[1.04]"
          >
            View My Work
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
          <a
            href="/cv-muhammad-faisal.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 flex flex-wrap gap-2"
        >
          {stack.map((s) => (
            <li key={s} className="chip font-mono">
              {s}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
