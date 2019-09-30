import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
describe('App', () => {
  it('It renders without error', () => {
    render(<App />)
  })
})
