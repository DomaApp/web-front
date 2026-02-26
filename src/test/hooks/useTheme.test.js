import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { useTheme } from '../../hooks/useTheme'

beforeEach(() => {
  document.cookie = 'theme=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
  document.documentElement.removeAttribute('data-theme')
})

describe('useTheme', () => {
  it('defaults to light when no cookie is set', () => {
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe('light')
  })

  it('reads theme from existing cookie', () => {
    document.cookie = 'theme=dark; path=/'
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe('dark')
  })

  it('sets data-theme attribute on documentElement after mount', () => {
    renderHook(() => useTheme())
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
  })

  it('sets data-theme="dark" when cookie is dark', () => {
    document.cookie = 'theme=dark; path=/'
    renderHook(() => useTheme())
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
  })

  it('toggleTheme switches from light to dark', () => {
    const { result } = renderHook(() => useTheme())
    act(() => {
      result.current.toggleTheme()
    })
    expect(result.current.theme).toBe('dark')
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
  })

  it('toggleTheme switches from dark back to light', () => {
    document.cookie = 'theme=dark; path=/'
    const { result } = renderHook(() => useTheme())
    act(() => {
      result.current.toggleTheme()
    })
    expect(result.current.theme).toBe('light')
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
  })

  it('writes cookie when toggleTheme is called', () => {
    const { result } = renderHook(() => useTheme())
    act(() => {
      result.current.toggleTheme()
    })
    expect(document.cookie).toContain('theme=dark')
  })
})
