import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import HomeCollectionCardImage from '../HomeCollectionCardImage'

describe('Home Collection Card Image', () => {
    it('should render correctly', () => {
        const {getByTestId} = render(
            <HomeCollectionCardImage src="test-source" />
        )
        expect(getByTestId('Collection-Card-Image')).toHaveAttribute(
            'src',
            'test-source'
        )
        expect(getByTestId('Collection-Card-Image')).toHaveAttribute(
            'height',
            '200'
        ) // default height
    })

    it('should render with given height', () => {
        const {getByTestId} = render(
            <HomeCollectionCardImage src="test-source" height={350} />
        )

        expect(getByTestId('Collection-Card-Image')).not.toHaveAttribute(
            'height',
            '200'
        ) // default height
        expect(getByTestId('Collection-Card-Image')).toHaveAttribute(
            'height',
            '350'
        ) // given height
    })
})
