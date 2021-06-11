import '@testing-library/jest-dom/extend-expect'
import {fireEvent, render} from '@testing-library/react'
import {collection} from 'src/assets/data/ImageDataStructure'
import ImageViewerViewport from '../ImageViewerViewport'

describe('Image Viewer Viewport', () => {
    const collection: collection = {
        id: 'id',
        title: 'test-title',
        index: 0,
        images: [],
    }

    it('should render correctly', () => {
        const {getByTestId} = render(
            <ImageViewerViewport
                collection={collection}
                index={0}
                next={() => {}}
                previous={() => {}}
            />
        )

        const lftArw = getByTestId('Arrow-Button-Left')
        expect(lftArw).toBeInTheDocument()

        const rgtArw = getByTestId('Arrow-Button-Right')
        expect(rgtArw).toBeInTheDocument()
    })

    it('should fire method props on button clicks', () => {
        const mockLeftMethod = jest.fn()
        const mockRightMethod = jest.fn()

        const {getByTestId} = render(
            <ImageViewerViewport
                collection={collection}
                index={0}
                next={mockRightMethod()}
                previous={mockLeftMethod()}
            />
        )

        const lftArw = getByTestId('Arrow-Button-Left')
        const rgtArw = getByTestId('Arrow-Button-Right')

        fireEvent.click(lftArw)
        fireEvent.click(rgtArw)

        expect(mockRightMethod).toHaveBeenCalled()
        expect(mockLeftMethod).toHaveBeenCalled()
    })
})
