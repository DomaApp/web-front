import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import IPhoneMockup from '../../components/IPhoneMockup'

describe('IPhoneMockup', () => {
  it('renders screenshot when src is provided', () => {
    render(<IPhoneMockup src="test.png" alt="Test Screen" />)
    const img = screen.getByAltText(/Test Screen/i)
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'test.png')
  })

  it('renders placeholder when no src is provided', () => {
    render(<IPhoneMockup />)
    expect(screen.getByText(/SCREENSHOT/i)).toBeInTheDocument()
  })
})
