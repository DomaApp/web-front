import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Features from '../../components/Features'

describe('Features', () => {
  it('renders section header', () => {
    render(<Features />)
    expect(screen.getByText(/Everything you need to find home/i)).toBeInTheDocument()
  })

  it('renders all 6 feature cards', () => {
    render(<Features />)
    expect(screen.getByText(/AI-Powered Search/i)).toBeInTheDocument()
    expect(screen.getByText(/Virtual Tours/i)).toBeInTheDocument()
    expect(screen.getByText(/Market Insights/i)).toBeInTheDocument()
    expect(screen.getByText(/Instant Alerts/i)).toBeInTheDocument()
    expect(screen.getByText(/Agent Connect/i)).toBeInTheDocument()
    expect(screen.getByText(/Neighborhood Guide/i)).toBeInTheDocument()
  })
})
