import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'

test('renders a heading', () => {
  render(<h1>Next.js works!</h1>)
  expect(screen.getByText('Next.js works!')).toBeDefined()
})
