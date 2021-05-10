import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import ConfirmationPage from '../ConfirmationPage'

describe('Confirmation Page', () => {
    it('should render correctly', () => {
        const {getByTestId} = render(<ConfirmationPage />)
        expect(getByTestId('Confirmation-Page-Wrapper').innerHTML).toContain(
            '<b>Thank you for your message</b> <br>I will be in contact as soon as I can</p>'
        )
        expect(getByTestId('Home-Button')).toBeInTheDocument()
    })
})
