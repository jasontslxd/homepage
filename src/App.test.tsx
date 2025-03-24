import { render, screen } from '@testing-library/react'
import { App } from './App'
import { BrowserRouter } from 'react-router'
test('renders navbar', () => {
  render(<App />, { wrapper: BrowserRouter })
  const navbar = screen.getByRole('navigation')
  expect(navbar).toBeInTheDocument()
})
