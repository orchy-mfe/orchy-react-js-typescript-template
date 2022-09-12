import {describe, it, expect} from 'vitest'
import {render, screen, fireEvent} from '@testing-library/react'

import App from './App'

describe('App', () => {
    it('renders correctly', () => {
        render(<App/>)
        expect(screen.getByText('Click on the Vite and React logos to learn more')).toBeDefined()
    })

    it('count increments correctly', async () => {
        render(<App />)

        const initialCountButton = screen.getAllByRole('button').at(0) as HTMLElement
        expect(initialCountButton).toBeDefined()
        expect(initialCountButton.innerHTML).toEqual('count is 0')

        fireEvent.click(initialCountButton)

        expect(initialCountButton.innerHTML).toEqual('count is 1')
    })
})