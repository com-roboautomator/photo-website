import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ImageSliderTitle from '../ImageSliderTitle'

describe('Image Slider Title', () => {

    it('should render correctly when shown', () => {

        const { getByTestId } = render(<ImageSliderTitle
            show={true}
            text="test-title"
            colour="test-colour"
        />)

        const comp = getByTestId('Image-Slider-Title')

        expect(comp.innerHTML).toContain('TEST-TITLE') // should convert to uppercase
        expect(comp).toHaveStyle("background: test-colour")

    })

    it('should render nothing when not shown', () => {

        const { getByTestId } = render(<ImageSliderTitle
            show={false}
            text="test-title"
            colour="test-colour"
        />)

        const comp = getByTestId('Image-Slider-Title')
        expect(comp.innerHTML).toEqual("")

    })

})