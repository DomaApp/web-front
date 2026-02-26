import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from '../../components/Footer'

describe('Footer', () => {
  it('renders brand and description', () => {
    render(<Footer />)
    const brandElements = screen.getAllByText(/Klipp/i)
    expect(brandElements.length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText(/Find your perfect home with AI-powered search/i)).toBeInTheDocument()
  })

  it('renders link sections', () => {
    render(<Footer />)
    expect(screen.getByText(/Product/i)).toBeInTheDocument()
    expect(screen.getByText(/Company/i)).toBeInTheDocument()
    expect(screen.getByText(/Legal/i)).toBeInTheDocument()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument()
  })
})
