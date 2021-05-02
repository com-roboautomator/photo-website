import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ArrowButton from '../../navigation/Arrow'

describe('Slider arrow buttons', () => {
    it('should render left arrow button', () => {
        const component = render(
            <ArrowButton disabled={false} orientation="Left" />
        )

        expect(component).toBeTruthy()
        expect(component.getByTestId('Arrow-Button-Image')).toHaveAttribute(
            'src',
            'arrow-enabled.png'
        )
        expect(component.getByTestId('Arrow-Button-Image')).toHaveAttribute(
            'alt',
            ''
        )
        expect(component.getByTestId('Arrow-Button-Image')).toHaveAttribute(
            'width',
            '40'
        )

        expect(component.getByTestId('Arrow-Button-Image')).toHaveStyle(
            'transform: rotate(180deg)'
        )
    })

    it('should render right arrow button', () => {
        const component = render(
            <ArrowButton disabled={false} orientation="Right" />
        )

        expect(component).toBeTruthy()
        expect(component.getByTestId('Arrow-Button-Image')).toHaveAttribute(
            'src',
            'arrow-enabled.png'
        )
        expect(component.getByTestId('Arrow-Button-Image')).toHaveAttribute(
            'alt',
            ''
        )
        expect(component.getByTestId('Arrow-Button-Image')).toHaveAttribute(
            'width',
            '40'
        )

        expect(component.getByTestId('Arrow-Button-Image')).toHaveStyle(
            'transform: rotate(0deg)'
        )
    })
})
