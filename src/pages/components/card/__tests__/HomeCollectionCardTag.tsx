import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import HomeCollectionTag from '../HomeCollectionTag'

describe('Home Collection Tag', () => {
    it('should render default values when no props given', () => {
        const {getByTestId} = render(<HomeCollectionTag />)

        const container = getByTestId('tag-layout')

        expect(container).toHaveStyle('background: #323232')
        expect(container.innerHTML).toContain('Default')
    })

    it('should render given values when props passed', () => {
        const {getByTestId} = render(
            <HomeCollectionTag title="test-title" colour="#5d5d5d" />
        )

        const container = getByTestId('tag-layout')

        expect(container).toHaveStyle('background: #5d5d5d')
        expect(container.innerHTML).toContain('test-title')
    })
})
