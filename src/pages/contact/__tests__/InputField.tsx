import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import InputField from '../InputField'

describe('Input Field', () => {
    it('should render correctly', async () => {
        const onChangeMock = jest.fn()

        const component = render(
            <InputField label="test-label" onChange={onChangeMock} />
        )
        expect(
            component.getByTestId('InputField-TextField-test-label')
        ).toBeInTheDocument()
    })
})
