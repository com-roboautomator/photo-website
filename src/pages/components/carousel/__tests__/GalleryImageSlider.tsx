import {fireEvent, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'
import GalleryImageSlider from '../GalleryImageSlider'
import collection from 'src/assets/data/ImageDataStructure'

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

describe('Gallery Image Slider', () => {
    it('should match snapshot', () => {
        const ImageSliderRender = renderer
            .create(<GalleryImageSlider data={coll} />)
            .toJSON()
        expect(ImageSliderRender).toMatchSnapshot()
    })

    it('should render correctly', () => {
        const {getByTestId} = render(<GalleryImageSlider data={coll} />)

        expect(getByTestId('Image-Slider-Title')).toBeInTheDocument()
        expect(getByTestId('Buttom-Wrapper')).toBeInTheDocument()
        expect(getByTestId('ImageSlider-Card-Slider')).toBeInTheDocument()
        expect(
            getByTestId('Collection-Card-first-test-collection-title')
        ).toBeInTheDocument()
    })

    it('should increment image', () => {
        const {getByTestId} = render(
            <GalleryImageSlider data={coll} startingIndex={0} />
        )

        const firstImage = getByTestId(
            'Collection-Card-first-test-collection-title'
        )
        const secondImage = getByTestId(
            'Collection-Card-second-test-collection-title'
        )
        const thirdImage = getByTestId(
            'Collection-Card-third-test-collection-title'
        )

        expect(firstImage).toHaveStyle({opacity: '100%', transform: 'scale(1)'})
        expect(secondImage).toHaveStyle({
            opacity: '97%',
            transform: 'scale(0.8)',
            filter: 'blur(1px)',
        })
        expect(thirdImage).toHaveStyle({
            transform: 'scale(0.5)',
            opacity: '60%',
            filter: 'blur(4px)',
        })

        fireEvent.click(getByTestId('Arrow-Button-Right'))

        expect(firstImage).toHaveStyle({
            opacity: '97%',
            transform: 'scale(0.8)',
            filter: 'blur(1px)',
        })
        expect(secondImage).toHaveStyle({
            opacity: '100%',
            transform: 'scale(1)',
        })
        expect(thirdImage).toHaveStyle({
            opacity: '97%',
            transform: 'scale(0.8)',
            filter: 'blur(1px)',
        })
    })

    it('should decrement image', () => {
        const {getByTestId} = render(
            <GalleryImageSlider data={coll} startingIndex={2} />
        )

        const firstImage = getByTestId(
            'Collection-Card-first-test-collection-title'
        )
        const secondImage = getByTestId(
            'Collection-Card-second-test-collection-title'
        )
        const thirdImage = getByTestId(
            'Collection-Card-third-test-collection-title'
        )

        expect(thirdImage).toHaveStyle({opacity: '100%', transform: 'scale(1)'})
        expect(secondImage).toHaveStyle({
            opacity: '97%',
            transform: 'scale(0.8)',
            filter: 'blur(1px)',
        })
        expect(firstImage).toHaveStyle({
            transform: 'scale(0.5)',
            opacity: '60%',
            filter: 'blur(4px)',
        })

        fireEvent.click(getByTestId('Arrow-Button-Left'))

        expect(firstImage).toHaveStyle({
            opacity: '97%',
            transform: 'scale(0.8)',
            filter: 'blur(1px)',
        })
        expect(secondImage).toHaveStyle({
            opacity: '100%',
            transform: 'scale(1)',
        })
        expect(thirdImage).toHaveStyle({
            opacity: '97%',
            transform: 'scale(0.8)',
            filter: 'blur(1px)',
        })
    })

    it('should move on wheel scroll', () => {
        const {getByTestId} = render(
            <GalleryImageSlider data={coll} startingIndex={2} />
        )

        const firstImage = getByTestId(
            'Collection-Card-first-test-collection-title'
        )
        const secondImage = getByTestId(
            'Collection-Card-second-test-collection-title'
        )
        const thirdImage = getByTestId(
            'Collection-Card-third-test-collection-title'
        )

        expect(thirdImage).toHaveStyle({opacity: '100%', transform: 'scale(1)'})
        expect(secondImage).toHaveStyle({
            opacity: '97%',
            transform: 'scale(0.8)',
            filter: 'blur(1px)',
        })
        expect(firstImage).toHaveStyle({
            transform: 'scale(0.5)',
            opacity: '60%',
            filter: 'blur(4px)',
        })

        fireEvent.wheel(getByTestId('ImageSlider-Card-Slider'))

        expect(firstImage).toHaveStyle({
            opacity: '97%',
            transform: 'scale(0.8)',
            filter: 'blur(1px)',
        })
        expect(secondImage).toHaveStyle({
            opacity: '100%',
            transform: 'scale(1)',
        })
        expect(thirdImage).toHaveStyle({
            opacity: '97%',
            transform: 'scale(0.8)',
            filter: 'blur(1px)',
        })
    })
})
