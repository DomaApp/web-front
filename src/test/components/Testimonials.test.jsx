import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Testimonials from '../../components/Testimonials'

describe('Testimonials', () => {
  it('renders section header', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Loved by home seekers/i)).toBeInTheDocument()
  })

  it('renders all 3 testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Sarah K./i)).toBeInTheDocument()
    expect(screen.getByText(/Marcus T./i)).toBeInTheDocument()
    expect(screen.getByText(/Priya M./i)).toBeInTheDocument()
  })
})
