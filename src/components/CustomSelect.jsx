import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

const inputStyle = {
  width: '100%',
  padding: '0.625rem 0.875rem',
  borderRadius: '0.625rem',
  border: '1px solid var(--color-input-border)',
  background: 'var(--color-input-bg)',
  color: 'var(--color-input-text)',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
}

export default function CustomSelect({ id, value, onChange, options }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const selected = options.find(o => o.value === value)

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        type="button"
        id={id}
        onClick={() => setOpen(p => !p)}
        style={{
          ...inputStyle,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          cursor: 'pointer', textAlign: 'left',
        }}
      >
        <span>{selected?.label}</span>
        <ChevronDown
          size={14}
          style={{
            color: 'var(--color-text-secondary)', flexShrink: 0,
            transition: 'transform 0.15s', transform: open ? 'rotate(180deg)' : 'none',
          }}
        />
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0, zIndex: 200,
          background: 'var(--color-nav-bg)', border: '1px solid var(--color-card-border)',
          borderRadius: '0.625rem', backdropFilter: 'blur(12px)', overflow: 'hidden',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
        }}>
          {options.map(opt => (
            <div
              key={opt.value}
              onClick={() => { onChange(opt.value); setOpen(false) }}
              style={{
                padding: '0.625rem 0.875rem', cursor: 'pointer', fontSize: '0.9rem',
                color: opt.value === value ? 'var(--color-blue-primary)' : 'var(--color-text-primary)',
                background: opt.value === value ? 'rgba(43, 127, 255, 0.08)' : 'transparent',
                fontWeight: opt.value === value ? 600 : 400,
                transition: 'background 0.1s',
              }}
              onMouseEnter={e => { if (opt.value !== value) e.currentTarget.style.background = 'rgba(43,127,255,0.05)' }}
              onMouseLeave={e => { if (opt.value !== value) e.currentTarget.style.background = 'transparent' }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
