'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Calendar, Github, ExternalLink, Info, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollAnimation } from '@/components/scroll-animation'
import { Footer } from '@/components/footer'
import { projects } from '@/lib/projects'
import { SectionHeading } from '@/components/ui/section-heading'

export default function BuildPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filteredProjects = useMemo(() => {
    let result = projects
    if (activeTag) {
      result = result.filter(p => p.stack.includes(activeTag))
    }
    return result
  }, [activeTag])

  // Collect all unique stack tags from all projects
  const availableTags = useMemo(() => {
    const tags = new Set<string>()
    projects.forEach(p => p.stack.forEach(t => tags.add(t)))
    return Array.from(tags).sort()
  }, [])

  const handleTagClick = (tag: string) => {
    setActiveTag(prev => prev === tag ? null : tag)
  }

  return (
    <>
      {/* Header + Projects Section */}
      <section
        data-section="1"
        className="bg-transparent pt-32 pb-[140px]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <SectionHeading label="builds" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
          >
            <h1 className="font-sans font-bold text-[clamp(36px,5.5vw,76px)] text-[#e2e2e2] tracking-[-0.02em] leading-[1.1]">
              Things i&apos;ve built.
            </h1>
            <h2 className="font-sans font-bold text-[clamp(36px,5.5vw,76px)] text-[#303030] tracking-[-0.02em] leading-[1.1]">
              The ones that shipped.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.2 }}
            className="font-sans font-normal text-[clamp(14px,1.8vw,16px)] leading-[1.9] text-[#6a6a6a] mt-8 max-w-[600px]"
          >
            a collection of projects ranging from ai systems to full-stack platforms. all built because they seemed genuinely useful.
          </motion.p>

          {/* Stack Tag Filter */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.3 }}
            className="flex flex-wrap gap-2 mt-10 mb-10"
          >
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`font-mono text-[9px] tracking-widest px-2.5 py-1 rounded transition-all duration-200 ${
                  activeTag === tag
                    ? 'bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.35)] text-[#e2e2e2]'
                    : 'bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] text-[#4a4a4a] hover:text-[#9a9a9a] hover:border-[rgba(255,255,255,0.12)]'
                }`}
              >
                {tag}
              </button>
            ))}
            {activeTag && (
              <button
                onClick={() => setActiveTag(null)}
                className="font-mono text-[9px] tracking-widest px-2.5 py-1 rounded bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] text-[#6a6a6a] hover:text-[#e2e2e2] hover:border-[rgba(255,255,255,0.2)] transition-all duration-200 flex items-center gap-1"
              >
                <X size={10} strokeWidth={1.5} />
                clear
              </button>
            )}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTag || 'all'}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  className="glass-card group"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-[#0d0d0d] rounded-t-[10px] overflow-hidden transition-all duration-300 group-hover:brightness-150">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="absolute inset-0 w-full h-full object-cover object-top"
                      />
                    ) : (
                      <p className="absolute inset-0 flex items-center justify-center font-sans font-bold text-[20px] text-[#e2e2e2] opacity-[0.06]">
                        {project.name}
                      </p>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-5 lg:p-6">
                    {/* Top row */}
                    <div className="flex items-center justify-end">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} strokeWidth={1.5} className="text-[#4a4a4a]" />
                        <span className="font-mono text-[10px] tracking-widest text-[#4a4a4a]">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-sans font-semibold text-[17px] text-[#e2e2e2] mt-2">
                      {project.name}
                    </h3>
                    <p className="font-sans text-[12px] text-[#6a6a6a] mt-1">
                      {project.tagline}
                    </p>

                    {/* Stack chips — clickable */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.stack.map((tech) => (
                        <button
                          key={tech}
                          onClick={() => handleTagClick(tech)}
                          className={`glass-chip cursor-pointer transition-all duration-200 ${
                            activeTag === tech
                              ? 'border-[rgba(255,255,255,0.35)] text-[#e2e2e2]'
                              : 'hover:border-[rgba(255,255,255,0.16)] hover:text-[#e2e2e2]'
                          }`}
                        >
                          {tech}
                        </button>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[rgba(255,255,255,0.05)]">
                      {project.github && (
                        <Link 
                          href={project.github} 
                          target="_blank"
                          className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest lowercase opacity-40 hover:opacity-100 transition-opacity"
                        >
                          <Github size={14} strokeWidth={1.5} />
                          code
                        </Link>
                      )}
                      {project.live && (
                        <Link 
                          href={project.live} 
                          target="_blank"
                          className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest lowercase opacity-40 hover:opacity-100 transition-opacity"
                        >
                          <ExternalLink size={14} strokeWidth={1.5} />
                          live
                        </Link>
                      )}
                      <Link 
                        href={`/build/${project.slug}`}
                        className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest lowercase opacity-40 hover:opacity-100 transition-opacity"
                      >
                        <Info size={14} strokeWidth={1.5} />
                        view details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Closer Section */}
      <section
        data-section="2"
        className="section-base"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <ScrollAnimation>
            <h2 className="heading-md">There&apos;s more where that came from.</h2>
          </ScrollAnimation>

          <ScrollAnimation delay={1} className="mt-12 flex items-center justify-center w-full">
            <div className="flex-1 max-w-[200px] h-px bg-linear-to-r from-transparent to-[rgba(255,255,255,0.15)] mr-6 hidden md:block" />
            <Link 
              href="https://github.com/Garvit-Nag"
              target="_blank"
              className="bordered-button group inline-flex"
            >
              <span className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                <Github size={14} strokeWidth={1.5} />
                view all on github
              </span>
            </Link>
            <div className="flex-1 max-w-[200px] h-px bg-linear-to-l from-transparent to-[rgba(255,255,255,0.15)] ml-6 hidden md:block" />
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </>
  )
}
