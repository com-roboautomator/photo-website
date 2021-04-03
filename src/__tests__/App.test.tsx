import {render} from '@testing-library/react'
import App from '../App'

describe('App', () => {
    it('should render HOME PAGE', () => {
        // Given
        // When
        const application = render(<App />)

        // Then
        expect(application.queryByText('HOME PAGE')).toBeTruthy()
    })
})
