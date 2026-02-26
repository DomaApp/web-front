import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from '../../components/Hero'

describe('Hero', () => {
  it('renders headline and subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/Find Your/i)).toBeInTheDocument()
    expect(screen.getByText(/Perfect Home/i)).toBeInTheDocument()
    expect(screen.getByText(/AI-powered property search/i)).toBeInTheDocument()
  })

  it('renders stats', () => {
    render(<Hero />)
    expect(screen.getByText(/4.9★/i)).toBeInTheDocument()
    expect(screen.getByText(/50K\+/i)).toBeInTheDocument()
    expect(screen.getByText(/#1/i)).toBeInTheDocument()
  })
})
