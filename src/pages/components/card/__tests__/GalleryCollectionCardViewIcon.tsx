import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import GalleryCollectionCardViewIcon from '../GalleryCollectionCardViewIcon'

describe('Gallery Collection Card View Icon', () => {
    it('should render correctly', () => {
        const {getByTestId} = render(<GalleryCollectionCardViewIcon />)

        expect(
            getByTestId('Gallery-Collection-Card-View-Icon-Image')
        ).toHaveAttribute('src', 'collection-image-w.png')
        expect(
            getByTestId('Gallery-Collection-Card-View-Icon-Text').innerHTML
        ).toContain('VIEW')
    })
})
