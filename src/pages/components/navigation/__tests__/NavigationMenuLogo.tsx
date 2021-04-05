import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import Logo from '../NavigationMenuLogo'

describe('Logo', () => {
    it('should render logo correctly', () => {
        // When
        // Given
        const component = render(
            <BrowserRouter>
                <Route>
                    <Logo />
                </Route>
            </BrowserRouter>
        )

        // Then
        expect(
            component.getByTestId('Menu-Logo').className.includes('logo')
        ).toBeTruthy()
    })

    it('should load image correct src', () => {
        // When
        // Given
        const component = render(
            <BrowserRouter>
                <Route>
                    <Logo />
                </Route>
            </BrowserRouter>
        )

        const logo = component.getByTestId('Menu-Logo-Image')

        // Then
        expect(logo).toHaveAttribute('src', 'Logo.png')
    })
})
