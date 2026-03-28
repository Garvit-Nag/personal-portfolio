'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FileText, History, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '@/lib/constants'

export function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(8,8,8,0.88)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.05)]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="font-sans font-bold text-[20px] text-[#e2e2e2] hover:opacity-80 hover:scale-105 transition-all duration-300 cursor-target inline-block"
        >
          gn.
        </Link>

        {/* Center Nav Links — desktop */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono text-[13px] tracking-widest lowercase transition-all duration-300 relative cursor-target inline-block hover:scale-[1.03] ${
                isActive(link.href) 
                  ? 'opacity-100' 
                  : 'opacity-40 hover:opacity-70'
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-[rgba(255,255,255,0.4)]" />
              )}
            </Link>
          ))}
        </div>

        {/* Right side — desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="https://v1.garvitnag.com"
            target="_blank"
            className="flex items-center gap-1.5 font-mono text-[11px] tracking-widest lowercase text-[#a0a0a0] border border-[rgba(255,255,255,0.1)] rounded-md px-2.5 py-1 hover:bg-[rgba(255,255,255,0.05)] hover:text-[#e2e2e2] hover:scale-[1.03] transition-all duration-300 cursor-target"
          >
            <span className="flex items-center gap-1.5 align-middle">
              <History size={12} strokeWidth={1.5} />
              old portfolio
            </span>
          </Link>
          
          <div className="w-px h-4 bg-[rgba(255,255,255,0.15)] mx-1" />

          <Link
            href="/Resume.pdf"
            target="_blank"
            className="flex items-center gap-1.5 font-mono text-[13px] tracking-widest lowercase opacity-40 hover:opacity-100 hover:scale-[1.03] transition-all duration-300 cursor-target"
          >
            <span className="flex items-center gap-1.5 align-middle">
               resume
               <FileText size={14} strokeWidth={1.5} />
            </span>
          </Link>
        </div>

        {/* Hamburger — mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex items-center justify-center w-10 h-10 text-[#e2e2e2]"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-[rgba(8,8,8,0.96)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.05)]"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-mono text-[14px] tracking-widest lowercase py-3 border-b border-[rgba(255,255,255,0.05)] transition-all duration-300 ${
                    isActive(link.href) 
                      ? 'text-[#e2e2e2]' 
                      : 'text-[#6a6a6a]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="h-3" />

              <div className="flex items-center gap-4 pt-2">
                <Link
                  href="https://v1.garvitnag.com"
                  target="_blank"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-1.5 font-mono text-[11px] tracking-widest lowercase text-[#a0a0a0] border border-[rgba(255,255,255,0.1)] rounded-md px-2.5 py-1.5 hover:bg-[rgba(255,255,255,0.05)] transition-all duration-300"
                >
                  <History size={12} strokeWidth={1.5} />
                  old portfolio
                </Link>

                <Link
                  href="/Resume.pdf"
                  target="_blank"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-1.5 font-mono text-[11px] tracking-widest lowercase text-[#a0a0a0] border border-[rgba(255,255,255,0.1)] rounded-md px-2.5 py-1.5 hover:bg-[rgba(255,255,255,0.05)] transition-all duration-300"
                >
                  <FileText size={12} strokeWidth={1.5} />
                  resume
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
