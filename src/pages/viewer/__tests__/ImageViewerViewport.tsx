import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import ImageViewerViewport from '../ImageViewerViewport'

describe('Image Viewer Viewport', () => {

    it('should render correctly', () => {

        const { getByTestId } = render(<ImageViewerViewport
            targetImage="target-image-url"
            collectionLength={1}
            index={0}
            next={() => { }}
            previous={() => { }}
        />)

        const prevImg = getByTestId('Image-Viewer-Viewport-Previous-Image')
        expect(prevImg).toBeInTheDocument()
        expect(prevImg).toHaveAttribute("src", "")

        const targImg = getByTestId('Image-Viewer-Viewport-Target-Image')
        expect(targImg).toBeInTheDocument()
        expect(targImg).toHaveAttribute("src", "target-image-url")

        const lftArw = getByTestId('Arrow-Button-Left')
        expect(lftArw).toBeInTheDocument()

        const rgtArw = getByTestId('Arrow-Button-Right')
        expect(rgtArw).toBeInTheDocument()

    })

    it('should fire method props on button clicks', () => {

        const mockLeftMethod = jest.fn()
        const mockRightMethod = jest.fn()

        const { getByTestId } = render(<ImageViewerViewport
            targetImage="target-image-url"
            collectionLength={1}
            index={0}
            next={mockRightMethod()}
            previous={mockLeftMethod()}
        />)

        const lftArw = getByTestId('Arrow-Button-Left')
        const rgtArw = getByTestId('Arrow-Button-Right')

        fireEvent.click(lftArw)
        fireEvent.click(rgtArw)
        
        expect(mockRightMethod).toHaveBeenCalled()
        expect(mockLeftMethod).toHaveBeenCalled()

    })

})