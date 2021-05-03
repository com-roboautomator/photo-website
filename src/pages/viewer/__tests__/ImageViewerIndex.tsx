import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import ImageViewerIndex from '../ImageViewerIndex'

describe('Image Viewer Index', () => {

    it('should render correctly from props', () => {

        const { getByTestId } = render(<ImageViewerIndex indexValue={0} indexTotal={10} />)

        const index = getByTestId('Image-Viewer-Index')
        expect(index).toBeInTheDocument()
        expect(index.innerHTML).toContain("1 / 10")

    })

})