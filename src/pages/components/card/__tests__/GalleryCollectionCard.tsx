import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import GalleryCollectionCard from '../GalleryCollectionCard'
import { natureImages } from '../../../../assets/data/Images'

describe('Gallery Collection Card', () => {
    it('should match snapshot', () => {
        const ImageSliderRender = renderer
            .create(
                <GalleryCollectionCard
                    key="test-card-key"
                    height={550}
                    selected={0}
                    collection={natureImages[0]}
                />
            )
            .toJSON()
        expect(ImageSliderRender).toMatchSnapshot()
    })

    it('should render correctly', () => {
        const { getByTestId } = render(
            <GalleryCollectionCard
                key="test-card-key"
                height={550}
                selected={0}
                collection={natureImages[0]}
            />
        )

        expect(getByTestId).toBeTruthy()
        expect(getByTestId('Collection-Card-Spacing')).toBeInTheDocument()
        expect(getByTestId('Collection-Card-Link')).toBeInTheDocument()
        expect(getByTestId('Collection-Card-Image')).toBeInTheDocument()
        expect(getByTestId('Gallery-Collection-Card-Text')).toBeInTheDocument()
    })

    it('should render target image correctly', () => {
        const { getByTestId } = render(
            <GalleryCollectionCard
                key="test-card-key"
                height={550}
                selected={0}
                collection={natureImages[0]}
            />
        )

        expect(getByTestId).toBeTruthy()
        expect(getByTestId('Collection-Card-Spacing')).toHaveStyle(
            'transform: scale(1)'
        )
    })

    it('should render immediate background image correctly', () => {
        const { getByTestId } = render(
            <GalleryCollectionCard
                key="test-card-key"
                height={550}
                selected={1}
                collection={natureImages[0]}
            />
        )

        expect(getByTestId).toBeTruthy()
        expect(getByTestId('Collection-Card-Spacing')).toHaveStyle(
            'transform: scale(0.8)'
        )
        expect(getByTestId('Collection-Card-Spacing')).toHaveStyle(
            'marginLeft: -100px'
        )
        expect(getByTestId('Collection-Card-Spacing')).toHaveStyle(
            'marginRight: -100px'
        )
        expect(getByTestId('Collection-Card-Spacing')).toHaveStyle(
            'filter: blur(1px)'
        )
    })

    it('should render distance background image correctly', () => {
        const { getByTestId } = render(
            <GalleryCollectionCard
                key="test-card-key"
                height={550}
                selected={2}
                collection={natureImages[0]}
            />
        )

        expect(getByTestId).toBeTruthy()
        expect(getByTestId('Collection-Card-Spacing')).toHaveStyle(
            'transform: scale(0.5)'
        )
        expect(getByTestId('Collection-Card-Spacing')).toHaveStyle(
            'marginLeft: -100px'
        )
        expect(getByTestId('Collection-Card-Spacing')).toHaveStyle(
            'marginRight: -100px'
        )
        expect(getByTestId('Collection-Card-Spacing')).toHaveStyle(
            'filter: blur(4px)'
        )
    })
})
