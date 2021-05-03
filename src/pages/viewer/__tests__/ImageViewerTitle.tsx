import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import ImageViewerTitle from '../ImageViewerTitle'

describe('Image Viewer Title', () => {

    it('should render correctly from props', () => {

        const { getByTestId } = render(<ImageViewerTitle collectionTitle="Test-Collection-Title" imageTitle="Test-Image-Title" />)

        const collection = getByTestId('Image-Viewer-Title-Collection-Title')
        const image = getByTestId('Image-Viewer-Title-Image-Title')

        expect(collection).toBeInTheDocument()
        expect(collection.innerHTML).toContain("Test-Collection-Title")

        expect(image).toBeInTheDocument();
        expect(image.innerHTML).toContain("Test-Image-Title")

    })

})