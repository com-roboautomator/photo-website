import {fireEvent, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'
import collection from 'src/assets/data/ImageDataStructure'
import HomeImageSlider from '../HomeImageSlider'

const coll: collection[] = [
    {
        key: 'first-test-collection-key',
        title: 'first-test-collection-title',
        index: 0,

        images: [
            {
                key: 'test-image-key',
                url: 'test-image-url',
                title: 'test-image-title',
                index: 0,
            },
        ],
    },
    {
        key: 'second-test-collection-key',
        title: 'second-test-collection-title',
        index: 1,

        images: [
            {
                key: 'test-image-key',
                url: 'test-image-url',
                title: 'test-image-title',
                index: 0,
            },
        ],
    },
    {
        key: 'third-test-collection-key',
        title: 'third-test-collection-title',
        index: 2,

        images: [
            {
                key: 'test-image-key',
                url: 'test-image-url',
                title: 'test-image-title',
                index: 0,
            },
        ],
    },
]

describe('Home Image Slider', () => {
    it('should match snapshot', () => {
        const ImageSliderRender = renderer
            .create(<HomeImageSlider data={coll} />)
            .toJSON()
        expect(ImageSliderRender).toMatchSnapshot()
    })

    it('should render correctly', () => {
        const {getByTestId} = render(<HomeImageSlider data={coll} />)

        expect(getByTestId('ImageSlider-Container')).toBeInTheDocument()
        expect(getByTestId('ImageSlider-Card-Slider')).toBeInTheDocument()
        expect(
            getByTestId('Home-Collection-Card-first-test-collection-title')
        ).toBeInTheDocument()
    })

    it('should increment image on button press', () => {
        const {getByTestId} = render(
            <HomeImageSlider data={coll} startingIndex={0} />
        )

        const firstImage = getByTestId(
            'Home-Collection-Card-first-test-collection-title'
        )
        const secondImage = getByTestId(
            'Home-Collection-Card-second-test-collection-title'
        )

        expect(firstImage).toHaveStyle({opacity: '100%', transform: 'scale(1)'})
        expect(secondImage).toHaveStyle({
            opacity: '90%',
            transform: 'scale(0.8)',
        })

        fireEvent.click(getByTestId('Arrow-Button-Right'))

        expect(firstImage).toHaveStyle({
            opacity: '90%',
            transform: 'scale(0.8)',
        })
        expect(secondImage).toHaveStyle({
            opacity: '100%',
            transform: 'scale(1)',
        })
    })

    it('should decrement image on button press', () => {
        const {getByTestId} = render(
            <HomeImageSlider data={coll} startingIndex={1} />
        )

        const firstImage = getByTestId(
            'Home-Collection-Card-first-test-collection-title'
        )
        const secondImage = getByTestId(
            'Home-Collection-Card-second-test-collection-title'
        )

        expect(firstImage).toHaveStyle({
            opacity: '90%',
            transform: 'scale(0.8)',
        })
        expect(secondImage).toHaveStyle({
            opacity: '100%',
            transform: 'scale(1)',
        })

        fireEvent.click(getByTestId('Arrow-Button-Left'))

        expect(firstImage).toHaveStyle({
            opacity: '100%',
            transform: 'scale(1)',
        })
        expect(secondImage).toHaveStyle({
            opacity: '90%',
            transform: 'scale(0.8)',
        })
    })

    it('should move on mouse scroll', () => {
        const {getByTestId} = render(
            <HomeImageSlider data={coll} startingIndex={0} />
        )

        const firstImage = getByTestId(
            'Home-Collection-Card-first-test-collection-title'
        )
        const secondImage = getByTestId(
            'Home-Collection-Card-second-test-collection-title'
        )

        expect(firstImage).toHaveStyle({opacity: '100%', transform: 'scale(1)'})
        expect(secondImage).toHaveStyle({
            opacity: '90%',
            transform: 'scale(0.8)',
        })

        fireEvent.wheel(getByTestId('ImageSlider-Card-Slider'), {
            deltaY: 30,
        })

        expect(firstImage).toHaveStyle({
            opacity: '90%',
            transform: 'scale(0.8)',
        })
        expect(secondImage).toHaveStyle({
            opacity: '100%',
            transform: 'scale(1)',
        })
    })
})
