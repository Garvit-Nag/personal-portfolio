'use client'

import Link from 'next/link'
import { RefreshCw, Home } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#080808', color: '#e2e2e2', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
          <div style={{ textAlign: 'center', maxWidth: '480px' }}>
            <p style={{ fontFamily: 'monospace', fontSize: 'clamp(100px,20vw,180px)', fontWeight: 'bold', color: '#1a1a1a', lineHeight: 1, letterSpacing: '-0.05em', userSelect: 'none' }}>
              500
            </p>
            <h1 style={{ fontSize: '22px', fontWeight: 600, color: '#e2e2e2', marginTop: '8px' }}>
              something went very wrong
            </h1>
            <p style={{ fontFamily: 'monospace', fontSize: '12px', color: '#5a5a5a', marginTop: '12px', lineHeight: 1.7 }}>
              the root layout itself crashed.<br />
              this is a critical error.
            </p>

            <div style={{ marginTop: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
              <button
                onClick={reset}
                style={{
                  fontFamily: 'monospace',
                  fontSize: '13px',
                  color: '#c8c8c8',
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '8px',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                ↻ try again
              </button>
              <a
                href="/"
                style={{
                  fontFamily: 'monospace',
                  fontSize: '13px',
                  color: '#c8c8c8',
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '8px',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                ⌂ go home
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
