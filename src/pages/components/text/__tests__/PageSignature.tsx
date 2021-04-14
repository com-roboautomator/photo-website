import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import PageSignature from '../PageSignature'

describe('Page Signature', () => {

    it('should render correctly', () => {

        const component = render(<PageSignature />)

        expect(component).toBeTruthy()
        expect(component.getByText('©2021, All images on this site are the copyright of Sara Doneux and may not be reproduced without permission')).toBeTruthy()
        expect(component.getByTestId('Page-Signature-Text')).toHaveClass('PageSignature-text-1')
        
        expect(component.getByTestId('Page-Signature-Text')).toHaveStyle('color: #a0a0a0')
        expect(component.getByTestId('Page-Signature-Text')).toHaveStyle('textAlign: center')
        expect(component.getByTestId('Page-Signature-Text')).toHaveStyle('width: 100%')
        expect(component.getByTestId('Page-Signature-Text')).toHaveStyle('position: absolute')
        expect(component.getByTestId('Page-Signature-Text')).toHaveStyle('fontFamily: Open-Sans-Regular')
        expect(component.getByTestId('Page-Signature-Text')).toHaveStyle('fontSize: 12px')

    })

})