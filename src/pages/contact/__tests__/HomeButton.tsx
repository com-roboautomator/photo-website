import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import HomeButton from '../HomeButton'

describe('Home Button', () => {
    it('should render correctly', () => {
        const {getByTestId} = render(<HomeButton />)

        expect(getByTestId('Home-Button')).toBeInTheDocument()
        expect(getByTestId('Home-Button')).toHaveAttribute('href', '/')
    })
})
