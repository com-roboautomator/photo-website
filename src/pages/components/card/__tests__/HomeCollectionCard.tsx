import {render} from '@testing-library/react'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import HomeCollectionCard from '../HomeCollectionCard'
import collection, {
    placeholder,
} from '../../../../assets/data/ImageDataStructure'

const testCollectionWithoutImage: collection = {
    key: 'test-collection-key',
    title: 'test-collection-title',
    index: 0,
}

const testCollectionWithImage: collection = {
    key: 'test-collection-key',
    title: 'test-collection-title',
    images: [
        {
            key: 'test-image-key',
            url: 'test-image-url',
            title: 'test-image-title',
            index: 0,
        },
    ],
    titleImage: 0,
    index: 0,
}

describe('Home Collection Card', () => {
    it('should match snapshot', () => {
        const ImageSliderRender = renderer
            .create(
                <HomeCollectionCard
                    collection={testCollectionWithoutImage}
                    height={200}
                    selected={false}
                />
            )
            .toJSON()
        expect(ImageSliderRender).toMatchSnapshot()
    })

    it('should render correctly', () => {
        const {getByTestId} = render(
            <HomeCollectionCard
                collection={testCollectionWithoutImage}
                height={200}
                selected={false}
            />
        )

        expect(getByTestId('Collection-Card-Image')).toBeInTheDocument()
        expect(getByTestId('Collection-Card-Text-Wrapper')).toBeInTheDocument()
    })

    it('should render default image when no source is given', () => {
        const {getByTestId} = render(
            <HomeCollectionCard
                collection={testCollectionWithoutImage}
                height={200}
                selected={false}
            />
        )

        const image = getByTestId('Collection-Card-Image')

        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute('src', placeholder.url)
    })

    it('should render image with given source', () => {
        const {getByTestId} = render(
            <HomeCollectionCard
                collection={testCollectionWithImage}
                height={200}
                selected={false}
            />
        )

        const image = getByTestId('Collection-Card-Image')

        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute('src', 'test-image-url')
    })

    it('should render text with given source', () => {
        const {getByTestId} = render(
            <HomeCollectionCard
                collection={testCollectionWithImage}
                height={200}
                selected={false}
            />
        )

        const text = getByTestId('Collection-Card-Text-Wrapper')

        expect(text).toBeInTheDocument()
        expect(text.innerHTML).toContain('test-collection-title')
    })

    it('should render with correct spacing when selected', () => {
        const {getByTestId} = render(
            <HomeCollectionCard
                collection={testCollectionWithImage}
                height={200}
                selected={true}
            />
        )

        const spacing = getByTestId(
            'Home-Collection-Card-test-collection-title'
        )

        expect(spacing).toBeInTheDocument()
        expect(spacing).toHaveStyle('opacity: 100%')
        expect(spacing).toHaveStyle('transform: scale(1)')
    })

    it('should render with correct spacing when unselected', () => {
        const {getByTestId} = render(
            <HomeCollectionCard
                collection={testCollectionWithImage}
                height={200}
                selected={false}
            />
        )

        const spacing = getByTestId(
            'Home-Collection-Card-test-collection-title'
        )

        expect(spacing).toBeInTheDocument()
        expect(spacing).toHaveStyle('opacity: 100%')
        expect(spacing).toHaveStyle('transform: scale(0.8)')
    })
})
