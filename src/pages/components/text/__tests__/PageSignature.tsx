import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import PageSignature from '../PageSignature'

describe('Page Signature', () => {
    it('should render correctly', () => {
        const { getByTestId } = render(<PageSignature />)

        expect(getByTestId('Page-Signature-Text')).toBeInTheDocument()
        expect(
            getByTestId('Page-Signature-Text').innerHTML).toContain(
                '©2021, All images on this site are the copyright of Sara Doneux and may not be reproduced without permission'
            )
    })
})
