import NavigationBar from '../NavigationBar'
import {BrowserRouter, Route} from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import renderer from 'react-test-renderer'

describe('NavigationBar', () => {
    it('renders correctly when there are no items', () => {
        const navigationBarRender = renderer
            .create(
                <BrowserRouter>
                    <Route
                        render={(props: any) => <NavigationBar {...props} />}
                    />
                </BrowserRouter>
            )
            .toJSON()

        expect(navigationBarRender).toMatchSnapshot()
    })

    it('should render NavigationBar', () => {
        // When
        // Given
        const {getByTestId} = render(
            <BrowserRouter>
                <Route render={(props: any) => <NavigationBar {...props} />} />
            </BrowserRouter>
        )

        // Then
        expect(getByTestId('NavigationBar')).toBeInTheDocument()
    })

    it('should render Home button', () => {
        // When
        // Given
        const {getByTestId} = render(
            <BrowserRouter>
                <Route render={(props: any) => <NavigationBar {...props} />} />
            </BrowserRouter>
        )

        // Then
        expect(getByTestId('Button-HOME')).toBeInTheDocument()
        expect(
            getByTestId('Button-HOME-Button').firstChild?.textContent
        ).toEqual('HOME')
    })

    it('should render Gallery button', () => {
        // When
        // Given
        const {getByTestId} = render(
            <BrowserRouter>
                <Route render={(props: any) => <NavigationBar {...props} />} />
            </BrowserRouter>
        )

        // Then
        expect(getByTestId('Button-GALLERY')).toBeInTheDocument()
        expect(
            getByTestId('Button-GALLERY-Button').firstChild?.textContent
        ).toEqual('GALLERY')
    })

    it('should render About button', () => {
        // When
        // Given
        const {getByTestId} = render(
            <BrowserRouter>
                <Route render={(props: any) => <NavigationBar {...props} />} />
            </BrowserRouter>
        )

        // Then
        expect(getByTestId('Button-ABOUT')).toBeInTheDocument()
        expect(
            getByTestId('Button-ABOUT-Button').firstChild?.textContent
        ).toEqual('ABOUT')
    })

    it('should render Contact button', () => {
        // When
        // Given
        const {getByTestId} = render(
            <BrowserRouter>
                <Route render={(props: any) => <NavigationBar {...props} />} />
            </BrowserRouter>
        )

        // Then
        expect(getByTestId('Button-CONTACT')).toBeInTheDocument()
        expect(
            getByTestId('Button-CONTACT-Button').firstChild?.textContent
        ).toEqual('CONTACT')
    })
})
