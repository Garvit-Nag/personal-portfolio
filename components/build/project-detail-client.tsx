'use client'

import { motion } from 'framer-motion'
import type { Project } from '@/lib/projects'

interface ProjectDetailClientProps {
  project: Project
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="flex items-center gap-3"
      >
        <span className="font-mono text-[10px] tracking-widest text-[#6a6a6a]">
          {project.year}
        </span>
        <span className="w-1 h-1 rounded-full bg-[#4a4a4a]" />
        <span className="font-mono text-[10px] tracking-widest text-[#6a6a6a]">
          {project.stack.length} technologies
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
        className="font-sans font-bold text-[clamp(40px,5vw,68px)] text-[#e2e2e2] tracking-[-0.02em] mt-4"
      >
        {project.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut', delay: 0.2 }}
        className="font-sans text-[16px] text-[#9a9a9a] mt-4 max-w-[560px]"
      >
        {project.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut', delay: 0.3 }}
        className="mt-6"
      >
        <div className="accent-line" />
      </motion.div>
    </>
  )
}
