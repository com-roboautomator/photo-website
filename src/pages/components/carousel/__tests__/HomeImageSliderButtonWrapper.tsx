import {fireEvent, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import HomeImageSliderButtonWrapper from '../HomeImageSliderButtonWrapper'

describe('Home Image Slider Button Wrapper', () => {
    it('should render correctly', () => {
        const {getByTestId} = render(
            <HomeImageSliderButtonWrapper
                length={300}
                index={0}
                previous={() => {}}
                next={() => {}}
            />
        )

        expect(getByTestId('Arrow-Button-Left')).toBeInTheDocument()
        expect(getByTestId('Arrow-Button-Right')).toBeInTheDocument()

        expect(getByTestId('ImageSlider-button-wrapper')).toBeInTheDocument()
        expect(getByTestId('ImageSlider-button-wrapper')).toHaveStyle(
            'background:linear-gradient(to right, white, transparent 30%), linear-gradient(to left, white, transparent 30%)'
        )
    })

    it('should call methods as buttons are pushed', () => {
        const mockLeft = jest.fn()
        const mockRight = jest.fn()

        const {getByTestId} = render(
            <HomeImageSliderButtonWrapper
                length={300}
                index={0}
                previous={mockLeft()}
                next={mockRight()}
            />
        )

        fireEvent.click(getByTestId('Arrow-Button-Left'))
        fireEvent.click(getByTestId('Arrow-Button-Right'))

        expect(mockLeft).toHaveBeenCalled()
        expect(mockRight).toHaveBeenCalled()
    })
})
