'use client'

import Link from 'next/link'
import { ArrowRight, Github, ExternalLink, Calendar } from 'lucide-react'
import { ScrollAnimation, StaggerContainer, StaggerItem } from '@/components/scroll-animation'
import { getFeaturedProjects } from '@/lib/projects'
import { SectionHeading } from '@/components/ui/section-heading'

export function FeaturedWorkSection() {
  const featuredProjects = getFeaturedProjects()

  return (
    <section 
      id="featured"
      data-section="3"
      className="section-base"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <ScrollAnimation className="mb-8">
          <SectionHeading
            title="featured work"
            label="craft"
          />
        </ScrollAnimation>

        <ScrollAnimation delay={1}>
          <p className="font-sans text-xl md:text-2xl text-[#8a8a8a] mt-2 mb-12 lowercase">
            a couple things i&apos;m proud of.
          </p>
        </ScrollAnimation>

        {/* Project Cards */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.slug}>
              <Link href={`/build/${project.slug}`} className="block">
                <div className="project-card group flex flex-col">
                  {/* Featured Badge - solid dark bg, always visible */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="featured-badge">
                      <span className="w-[5px] h-[5px] rounded-full bg-[#e2e2e2] pulse-dot" />
                      featured
                    </span>
                  </div>

                  {/* Thumbnail */}
                  <div className="card-thumbnail aspect-video bg-[#0d0d0d] rounded-t-[12px]">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="absolute inset-0 w-full h-full object-cover object-top"
                      />
                    ) : (
                      <p className="absolute inset-0 flex items-center justify-center font-sans font-bold text-[32px] text-[#e2e2e2] opacity-[0.06]">
                        {project.name}
                      </p>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-6 lg:p-7 flex flex-col flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-sans font-bold text-[20px] text-[#e2e2e2]">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={13} strokeWidth={1.5} className="text-[#5a5a5a]" />
                        <span className="font-mono text-[10px] tracking-widest text-[#5a5a5a]">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    <p className="font-sans text-[13px] text-[#7a7a7a] mt-1.5">
                      {project.tagline.replace(/\.$/, '')}
                    </p>

                    {/* Spacer */}
                    <div className="flex-1 min-h-5" />

                    {/* Links */}
                    <div className="flex items-center gap-5 pt-5 border-t border-[rgba(255,255,255,0.06)]">
                      {project.github && (
                        <span
                          onClick={(e) => { e.preventDefault(); window.open(project.github, '_blank'); }}
                          className="card-link"
                        >
                          <Github size={13} strokeWidth={1.5} />
                          code
                        </span>
                      )}
                      {project.live && (
                        <span
                          onClick={(e) => { e.preventDefault(); window.open(project.live, '_blank'); }}
                          className="card-link"
                        >
                          <ExternalLink size={13} strokeWidth={1.5} />
                          live
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All Button */}
        <ScrollAnimation delay={2} className="mt-16 flex items-center justify-center w-full">
          <div className="flex-1 max-w-[200px] h-px bg-linear-to-r from-transparent to-[rgba(255,255,255,0.15)] mr-6 hidden md:block" />
          <Link href="/build" className="bordered-button group inline-flex">
            <span className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
              view all work
              <ArrowRight size={14} strokeWidth={1.5} />
            </span>
          </Link>
          <div className="flex-1 max-w-[200px] h-px bg-linear-to-l from-transparent to-[rgba(255,255,255,0.15)] ml-6 hidden md:block" />
        </ScrollAnimation>
      </div>
    </section>
  )
}
