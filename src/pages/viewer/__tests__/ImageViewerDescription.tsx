import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import ImageViewerDescription from '../ImageViewerDescription'

describe('Image Viewer Description', () => {

    it('should render correctly when given values', () => {

        const { getByTestId } = render(<ImageViewerDescription title="test-title" text="test-text" />)

        const title = getByTestId('Image-Viewer-Description-Title')
        expect(title).toBeInTheDocument()
        expect(title.innerHTML).toContain('test-title')

        const text = getByTestId('Image-Viewer-Description-Text')
        expect(text).toBeInTheDocument()
        expect(text.innerHTML).toContain('test-text')

    })

    it('should render nothing when given no values', () => {

        const { getByTestId } = render (<ImageViewerDescription /> )

        const title = getByTestId('Image-Viewer-Description-Title')
        expect(title).toBeInTheDocument()
        expect(title.innerHTML).toEqual("")

        const text = getByTestId('Image-Viewer-Description-Text')
        expect(text).toBeInTheDocument()
        expect(text.innerHTML).toEqual("")
        
    })

})