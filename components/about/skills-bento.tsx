'use client'

import { useState } from 'react'
import { ScrollAnimation } from '@/components/scroll-animation'
import { SectionHeading } from '@/components/ui/section-heading'
import { SKILL_ROWS } from '@/lib/constants'

export function SkillsBento() {
  const [hoveredCat, setHoveredCat] = useState<string | null>(null)

  return (
    <section
      data-section="2"
      className="section-alt"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollAnimation>
          <SectionHeading
            title="What I Work With"
            label="toolkit"
          />
          <p className="font-mono text-sm text-[#6a6a6a] -mt-4 mb-10 tracking-[0.04em]">
            tools of the trade.
          </p>
        </ScrollAnimation>

        <div className="mt-6 border-t border-[rgba(255,255,255,0.1)]">
          {SKILL_ROWS.map((row) => (
            <div
              key={row.name}
              onMouseEnter={() => setHoveredCat(row.name)}
              onMouseLeave={() => setHoveredCat(null)}
              className={`grid grid-cols-1 sm:grid-cols-[220px_1fr] border-b border-[rgba(255,255,255,0.06)] transition-opacity duration-200 cursor-default ${
                hoveredCat !== null && hoveredCat !== row.name ? 'opacity-30' : 'opacity-100'
              }`}
            >
              {/* Left — icon + label */}
              <div className="flex items-center gap-3 py-5 sm:pr-6 sm:border-r sm:border-[rgba(255,255,255,0.06)]">
                <div className={`w-[34px] h-[34px] shrink-0 border rounded-lg flex items-center justify-center transition-all duration-180 ${
                  hoveredCat === row.name
                    ? 'border-[rgba(255,255,255,0.28)] text-[#c8c8c8]'
                    : 'border-[rgba(255,255,255,0.12)] text-[#6a6a6a]'
                }`}>
                  <row.icon size={15} strokeWidth={1.5} />
                </div>
                <div>
                  <p className={`font-sans font-semibold text-[13px] transition-colors duration-180 ${
                    hoveredCat === row.name ? 'text-[#e2e2e2]' : 'text-[#c8c8c8]'
                  }`}>
                    {row.name}
                  </p>
                  <p className={`font-mono text-[10px] tracking-widest mt-0.5 transition-colors duration-180 ${
                    hoveredCat === row.name ? 'text-[#787878]' : 'text-[#4a4a4a]'
                  }`}>
                    {row.hint}
                  </p>
                </div>
              </div>

              {/* Right — chips */}
              <div className="flex flex-wrap items-center gap-2.5 py-5 sm:pl-7">
                {row.chips.map((chip) => (
                  <span
                    key={chip.label}
                    className={`font-mono text-[11px] tracking-[0.08em] border rounded px-2.5 py-1.5 transition-all duration-150 ${
                      chip.hi
                        ? hoveredCat === row.name
                          ? 'border-[rgba(255,255,255,0.22)] text-[#e2e2e2] bg-[rgba(255,255,255,0.06)]'
                          : 'border-[rgba(255,255,255,0.1)] text-[#b0b0b0] bg-[rgba(255,255,255,0.03)]'
                        : hoveredCat === row.name
                          ? 'border-[rgba(255,255,255,0.1)] text-[#9a9a9a] bg-[rgba(255,255,255,0.02)]'
                          : 'border-[rgba(255,255,255,0.06)] text-[#6a6a6a]'
                    }`}
                  >
                    {chip.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
