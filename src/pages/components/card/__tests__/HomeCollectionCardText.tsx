import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import HomeCollectionCardText from '../HomeCollectionCardText'

describe('Home Collection Card Text', () => {
    it('should render correctly', () => {
        const {getByTestId} = render(
            <HomeCollectionCardText title="test-title" />
        )

        const wrapper = getByTestId('Collection-Card-Text-Wrapper')
        expect(wrapper).toBeInTheDocument()
        expect(wrapper.innerHTML).toContain('test-title')

        const imageIcon = getByTestId('Collection-Card-Image-Icon')
        expect(imageIcon).toBeInTheDocument()
        expect(imageIcon).toHaveAttribute('src', 'collection-image-o.png')

        expect(getByTestId('tag-layout')).toBeInTheDocument()
    })
})
