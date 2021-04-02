import NavigationBar from '../NavigationBar'
import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
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
        const component = render(
            <BrowserRouter>
                <Route render={(props: any) => <NavigationBar {...props} />} />
            </BrowserRouter>
        )

        // Then
        expect(component.queryByTestId('NavigationBar')).toBeTruthy()
    })

    it('should render Home button', () => {
        // When
        // Given
        const component = render(
            <BrowserRouter>
                <Route render={(props: any) => <NavigationBar {...props} />} />
            </BrowserRouter>
        )

        // Then
        expect(component.queryByTestId('Button-HOME')).toBeTruthy()
        expect(
            component.getByTestId('Button-HOME-Button').firstChild?.textContent
        ).toEqual('HOME')
    })

    it('should render Gallery button', () => {
        // When
        // Given
        const component = render(
            <BrowserRouter>
                <Route render={(props: any) => <NavigationBar {...props} />} />
            </BrowserRouter>
        )

        // Then
        expect(component.queryByTestId('Button-GALLERY')).toBeTruthy()
        expect(
            component.getByTestId('Button-GALLERY-Button').firstChild
                ?.textContent
        ).toEqual('GALLERY')
    })

    it('should render About button', () => {
        // When
        // Given
        const component = render(
            <BrowserRouter>
                <Route render={(props: any) => <NavigationBar {...props} />} />
            </BrowserRouter>
        )

        // Then
        expect(component.queryByTestId('Button-ABOUT')).toBeTruthy()
        expect(
            component.getByTestId('Button-ABOUT-Button').firstChild?.textContent
        ).toEqual('ABOUT')
    })

    it('should render Contact button', () => {
        // When
        // Given
        const component = render(
            <BrowserRouter>
                <Route render={(props: any) => <NavigationBar {...props} />} />
            </BrowserRouter>
        )

        // Then
        expect(component.queryByTestId('Button-CONTACT')).toBeTruthy()
        expect(
            component.getByTestId('Button-CONTACT-Button').firstChild
                ?.textContent
        ).toEqual('CONTACT')
    })
})
