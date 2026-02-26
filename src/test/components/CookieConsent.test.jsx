import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import CookieConsent from '../../components/CookieConsent'

function renderConsent(props = {}) {
  return render(<CookieConsent onAccept={vi.fn()} onDecline={vi.fn()} {...props} />)
}

describe('CookieConsent', () => {
  it('renders the dialog with title and description', () => {
    renderConsent()
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText(/Cookies & préférences/i)).toBeInTheDocument()
    expect(screen.getByText(/préférence de thème/i)).toBeInTheDocument()
  })

  it('renders Accepter and Refuser buttons', () => {
    renderConsent()
    expect(screen.getByRole('button', { name: /accepter/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /refuser/i })).toBeInTheDocument()
  })

  it('calls onAccept when Accepter is clicked', () => {
    const onAccept = vi.fn()
    renderConsent({ onAccept })
    fireEvent.click(screen.getByRole('button', { name: /accepter/i }))
    expect(onAccept).toHaveBeenCalledOnce()
  })

  it('calls onDecline when Refuser is clicked', () => {
    const onDecline = vi.fn()
    renderConsent({ onDecline })
    fireEvent.click(screen.getByRole('button', { name: /refuser/i }))
    expect(onDecline).toHaveBeenCalledOnce()
  })
})
