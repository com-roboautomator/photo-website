import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import GalleryCollectionCardText from '../GalleryCollectionCardText'

describe('Gallery Collection Card Text', () => {
    it('should render correctly', () => {
        const {getByTestId} = render(
            <GalleryCollectionCardText text="test-text" />
        )

        expect(getByTestId('Gallery-Collection-Card-Text')).toBeInTheDocument()
        expect(getByTestId('Gallery-Collection-Card-Tag')).toBeInTheDocument()
        expect(
            getByTestId('Gallery-Collection-Card-Content-Text')
        ).toBeInTheDocument()

        expect(
            getByTestId('Gallery-Collection-Card-Content-Text').innerHTML
        ).toContain('test-text')
    })
})
