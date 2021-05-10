import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ImageSliderTitle from '../GalleryImageSliderTitle'

describe('Image Slider Title', () => {
    it('should render correctly', () => {
        const {getByTestId} = render(
            <ImageSliderTitle text="test-title" colour="test-colour" />
        )

        const comp = getByTestId('Image-Slider-Title')

        expect(comp).toHaveStyle('background: test-colour')

        expect(comp.innerHTML).not.toContain('test-title')
        expect(comp.innerHTML).toContain('TEST-TITLE') // should convert to upper case
    })
})
