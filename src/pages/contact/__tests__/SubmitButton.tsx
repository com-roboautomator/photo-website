import '@testing-library/jest-dom/extend-expect'
import {fireEvent, render} from '@testing-library/react'
import SubmitButton from '../SubmitButton'

describe('Submit Button', () => {
    it('should render correctly', () => {
        const {getByTestId} = render(<SubmitButton />)
        const button = getByTestId('Submit-Button')

        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent('Submit')
    })

    it('should fire external method event when clicked', () => {
        const handleSubmitMock = jest.fn()

        const component = render(<SubmitButton onSubmit={handleSubmitMock} />)
        const button = component.getByTestId('Submit-Button')

        fireEvent.click(button)

        expect(handleSubmitMock).toHaveBeenCalled()
    })
})
