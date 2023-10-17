import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import App from './App'

describe('App', () => {
    it('Renders Hello World', () => {
        render(<App />)

        expect(screen.getByRole('heading')).toHaveTextContent('Hello World')
    })
})
