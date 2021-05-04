import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import GalleryCollectionCardItemsText from '../GalleryCollectionCardItemsText'

describe('Gallery Collection Card Items Text', () => {
    it('Should render correctly when there are two or more items', () => {
        const {getByTestId} = render(
            <GalleryCollectionCardItemsText items={2} />
        )

        expect(
            getByTestId('Gallery-Collection-Card-Items-Text')
        ).toBeInTheDocument()
        expect(
            getByTestId('Gallery-Collection-Card-Items-Text').innerHTML
        ).toContain('2 Items')
    })

    it('Should render correctly when there is only 1 item', () => {
        const {getByTestId} = render(
            <GalleryCollectionCardItemsText items={1} />
        )

        expect(
            getByTestId('Gallery-Collection-Card-Items-Text')
        ).toBeInTheDocument()
        expect(
            getByTestId('Gallery-Collection-Card-Items-Text').innerHTML
        ).toContain('Item')
        expect(
            getByTestId('Gallery-Collection-Card-Items-Text').innerHTML
        ).not.toContain('Items')
    })

    it('should not render when there are 0 items', () => {
        const {getByTestId} = render(
            <GalleryCollectionCardItemsText items={0} />
        )

        expect(
            getByTestId('Gallery-Collection-Card-Items-Text')
        ).toBeInTheDocument()
        expect(
            getByTestId('Gallery-Collection-Card-Items-Text').innerHTML
        ).toEqual('')
    })

    it('should not render when items is undefined', () => {
        const {getByTestId} = render(<GalleryCollectionCardItemsText />)

        expect(
            getByTestId('Gallery-Collection-Card-Items-Text')
        ).toBeInTheDocument()
        expect(
            getByTestId('Gallery-Collection-Card-Items-Text').innerHTML
        ).toEqual('')
    })
})
