import { render} from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '../NavigationMenuButton'

describe('NavigationMenuButton', () => {

    it('should render correctly when selected', () => {
        //When
        //Given
        const component = render(
            <Button text="Test" path="/path" selected={true} />
        )

        //Then
        expect(component.getByTestId('Button-Test-Button')).toBeTruthy()
        expect(
            component.getByTestId('Button-Test').className.includes('wrapper')
        ).toBeTruthy()
        expect(
            component
                .getByTestId('Button-Test-Button')
                .className.includes('item_selected')
        ).toBeTruthy()
        expect(
            component
                .getByTestId('Button-Test-Underline')
                .className.includes('line_selected')
        ).toBeTruthy()

    })

    it('should render correctly when unselected', () => {
        //When
        //Given
        const component = render(
            <Button text="Test" path="/path" selected={false} />
        )

        //Then
        expect(component.getByTestId('Button-Test-Button')).toBeTruthy()
        expect(
            component.getByTestId('Button-Test').className.includes('wrapper')
        ).toBeTruthy()
        expect(
            component
                .getByTestId('Button-Test-Button')
                .className.includes('item_unselected')
        ).toBeTruthy()
        expect(
            component
                .getByTestId('Button-Test-Underline')
                .className.includes('line_unselected')
        ).toBeTruthy()
    })
})
