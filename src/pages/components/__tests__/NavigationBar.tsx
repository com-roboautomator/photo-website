import NavigationBar from '../NavigationBar'
import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {render} from '@testing-library/react'

describe('NavigationBar', () => {
    it('should render correctly', () => {
        // When
        // Given
        const component = render(
            <BrowserRouter>
                <Route render={(props: any) => <NavigationBar {...props} />} />
            </BrowserRouter>
        )

        // Then
        expect(component.queryByTestId('NavBar')).toBeTruthy()
    })
})
