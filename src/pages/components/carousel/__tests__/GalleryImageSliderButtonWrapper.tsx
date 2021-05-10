import {fireEvent, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import GalleryImageSliderButtonWrapper from '../GalleryImageSliderButtonWrapper'

describe('Gallery Image Slider Button Wrapper', () => {
    it('should render correctly', () => {
        const {getByTestId} = render(
            <GalleryImageSliderButtonWrapper
                length={300}
                index={0}
                previous={() => {}}
                next={() => {}}
            />
        )

        expect(getByTestId('Arrow-Button-Left')).toBeInTheDocument()
        expect(getByTestId('Arrow-Button-Right')).toBeInTheDocument()
    })

    it('should call methods as buttons are pushed', () => {
        const mockLeft = jest.fn()
        const mockRight = jest.fn()

        const {getByTestId} = render(
            <GalleryImageSliderButtonWrapper
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
