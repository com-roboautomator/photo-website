import {fireEvent, render} from '@testing-library/react'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import ImageSlider from '../ImageSlider'
import {data} from '../../../../assets/data/HomeTestImages'

describe('Image Slider', () => {
    it('renders correctly when there are no items', () => {
        const ImageSliderRender = renderer
            .create(<ImageSlider data={data} mode='Home' />)
            .toJSON()

        expect(ImageSliderRender).toMatchSnapshot()
    })

    it('should increment image index on arrow button click', () => {
        const component = render(<ImageSlider data={data} mode='Home' />)

        expect(component).toBeTruthy()
        expect(component.getByTestId('Arrow-Button-Right')).toBeTruthy()
        expect(
            component.getByTestId('Collection-Card-Nature Collection')
        ).toBeTruthy()
        expect(
            component.getByTestId('Collection-Card-Urban Collection')
        ).toBeTruthy()

        expect(
            component.getByTestId('Collection-Card-Nature Collection')
                .firstChild
        ).toHaveClass('CollectionCard-spacing_selected-9')
        expect(
            component.getByTestId('Collection-Card-Urban Collection').firstChild
        ).toHaveClass('CollectionCard-spacing_unselected-10')

        fireEvent.click(component.getByTestId('Arrow-Button-Right'))

        expect(
            component.getByTestId('Collection-Card-Nature Collection')
                .firstChild
        ).toHaveClass('CollectionCard-spacing_unselected-10')
        expect(
            component.getByTestId('Collection-Card-Urban Collection').firstChild
        ).toHaveClass('CollectionCard-spacing_selected-9')
    })

    it('should decrement image index on arrow button click', () => {
        const component = render(<ImageSlider data={data} startingIndex={3} mode='Home' />)

        expect(component).toBeTruthy()
        expect(component.getByTestId('Arrow-Button-Left')).toBeTruthy()
        expect(
            component.getByTestId('Collection-Card-Mechanical Collection')
        ).toBeTruthy()
        expect(
            component.getByTestId('Collection-Card-Animal Collection')
        ).toBeTruthy()

        expect(
            component.getByTestId('Collection-Card-Mechanical Collection')
                .firstChild
        ).toHaveClass('CollectionCard-spacing_selected-9')
        expect(
            component.getByTestId('Collection-Card-Animal Collection')
                .firstChild
        ).toHaveClass('CollectionCard-spacing_unselected-10')

        fireEvent.click(component.getByTestId('Arrow-Button-Left'))

        expect(
            component.getByTestId('Collection-Card-Mechanical Collection')
                .firstChild
        ).toHaveClass('CollectionCard-spacing_unselected-10')
        expect(
            component.getByTestId('Collection-Card-Animal Collection')
                .firstChild
        ).toHaveClass('CollectionCard-spacing_selected-9')
    })

    it('should increment image index on positive wheel move', () => {
        const component = render(<ImageSlider data={data} mode='Home' />)

        expect(component.getByTestId('ImageSlider-Card-Slider')).toBeTruthy()
        expect(
            component.getByTestId('Collection-Card-Nature Collection')
        ).toBeTruthy()
        expect(
            component.getByTestId('Collection-Card-Urban Collection')
        ).toBeTruthy()

        expect(
            component.getByTestId('Collection-Card-Nature Collection')
                .firstChild
        ).toHaveClass('CollectionCard-spacing_selected-9')
        expect(
            component.getByTestId('Collection-Card-Urban Collection').firstChild
        ).toHaveClass('CollectionCard-spacing_unselected-10')

        fireEvent.wheel(component.getByTestId('ImageSlider-Card-Slider'), {
            deltaY: 30,
        })

        expect(
            component.getByTestId('Collection-Card-Nature Collection')
                .firstChild
        ).toHaveClass('CollectionCard-spacing_unselected-10')
        expect(
            component.getByTestId('Collection-Card-Urban Collection').firstChild
        ).toHaveClass('CollectionCard-spacing_selected-9')
    })

    it('should decrement image index on negative wheel move', () => {
        const component = render(<ImageSlider data={data} startingIndex={3} mode='Home' />)

        expect(component.getByTestId('ImageSlider-Card-Slider')).toBeTruthy()
        expect(
            component.getByTestId('Collection-Card-Mechanical Collection')
        ).toBeTruthy()
        expect(
            component.getByTestId('Collection-Card-Animal Collection')
        ).toBeTruthy()

        expect(
            component.getByTestId('Collection-Card-Mechanical Collection')
                .firstChild
        ).toHaveClass('CollectionCard-spacing_selected-9')
        expect(
            component.getByTestId('Collection-Card-Animal Collection')
                .firstChild
        ).toHaveClass('CollectionCard-spacing_unselected-10')

        fireEvent.wheel(component.getByTestId('ImageSlider-Card-Slider'), {
            deltaY: -30,
        })

        expect(
            component.getByTestId('Collection-Card-Mechanical Collection')
                .firstChild
        ).toHaveClass('CollectionCard-spacing_unselected-10')
        expect(
            component.getByTestId('Collection-Card-Animal Collection')
                .firstChild
        ).toHaveClass('CollectionCard-spacing_selected-9')
    })

    it('should set left arrow button to disabled when index is 0', () => {
        const component = render(<ImageSlider data={data} startingIndex={0} mode='Home' />)

        expect(component).toBeTruthy()
        expect(component.getByTestId('Arrow-Button-Left')).toBeTruthy()
        expect(component.getByTestId('Arrow-Button-Right')).toBeTruthy()

        expect(component.getByTestId('Arrow-Button-Left')).toHaveAttribute(
            'disabled'
        )
        expect(component.getByTestId('Arrow-Button-Right')).not.toBeDisabled()
    })

    it('should set Right arrow button to disabled when index is max length', () => {
        const component = render(
            <ImageSlider data={data} startingIndex={data.length - 1} mode='Home' />
        )

        expect(component).toBeTruthy()
        expect(component.getByTestId('Arrow-Button-Left')).toBeTruthy()
        expect(component.getByTestId('Arrow-Button-Right')).toBeTruthy()

        expect(component.getByTestId('Arrow-Button-Left')).not.toBeDisabled()
        expect(component.getByTestId('Arrow-Button-Right')).toHaveAttribute(
            'disabled'
        )
    })

    it('should render image slider correctly', () => {
        const component = render(<ImageSlider data={data} mode='Home' />)

        expect(component).toBeTruthy()
        expect(component.getByTestId('ImageSlider-Container')).toHaveClass(
            'ImageSlider-wrapper-2'
        )
        expect(component.getByTestId('ImageSlider-Container')).toHaveStyle(
            'pointerEvents: auto'
        )
        expect(component.getByTestId('ImageSlider-Container')).toHaveStyle(
            'position: relative'
        )
        expect(component.getByTestId('ImageSlider-Container')).toHaveStyle(
            'display: flex'
        )
        expect(component.getByTestId('ImageSlider-Container')).toHaveStyle(
            'justifyContent: center'
        )
        expect(component.getByTestId('ImageSlider-Container')).toHaveStyle(
            'overflowX: hidden'
        )

        expect(component.getByTestId('ImageSlider-Card-Slider')).toHaveClass(
            'ImageSlider-card_slider-3'
        )
        expect(component.getByTestId('ImageSlider-Card-Slider')).toHaveStyle(
            'pointerEvents: auto'
        )
        expect(component.getByTestId('ImageSlider-Card-Slider')).toHaveStyle(
            'position: relative'
        )
        expect(component.getByTestId('ImageSlider-Card-Slider')).toHaveStyle(
            'maxWidth: 370px'
        )
        expect(component.getByTestId('ImageSlider-Card-Slider')).toHaveStyle(
            'width: 370px'
        )

        expect(component.getByTestId('ImageSlider-button-wrapper')).toHaveClass(
            'ImageSliderButtonWrapper-button_wrapper-7'
        )
        expect(component.getByTestId('ImageSlider-button-wrapper')).toHaveStyle(
            'zIndex: 99'
        )
        expect(component.getByTestId('ImageSlider-button-wrapper')).toHaveStyle(
            'pointerEvents: none'
        )
        expect(component.getByTestId('ImageSlider-button-wrapper')).toHaveStyle(
            'position: absolute'
        )
        expect(component.getByTestId('ImageSlider-button-wrapper')).toHaveStyle(
            'width: 100%'
        )
        expect(component.getByTestId('ImageSlider-button-wrapper')).toHaveStyle(
            'display: flex'
        )
        expect(component.getByTestId('ImageSlider-button-wrapper')).toHaveStyle(
            'justifyContent: space-between'
        )
        expect(component.getByTestId('ImageSlider-button-wrapper')).toHaveStyle(
            'alignSelf: center'
        )
        expect(component.getByTestId('ImageSlider-button-wrapper')).toHaveStyle(
            'background: linear-gradient(to right, white, transparent 50%), linear-gradient(to left, white, transparent 50%)'
        )

        expect(component.getByTestId('ImageSlider-arrow')).toHaveClass(
            'ImageSliderButtonWrapper-arrow-8'
        )
        expect(component.getByTestId('ImageSlider-arrow')).toHaveStyle(
            'pointerEvents: auto'
        )
        expect(component.getByTestId('ImageSlider-arrow')).toHaveStyle(
            'margin: 20px'
        )
    })
})
