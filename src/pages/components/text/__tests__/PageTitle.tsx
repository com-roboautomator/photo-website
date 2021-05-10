import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'

import PageTitle from '../PageTitle'

describe('Page Title', () => {
    it('should render correctly', () => {
        const {getByTestId} = render(<PageTitle title="test-title" />)

        expect(getByTestId('PageTitle-Image')).toBeInTheDocument()
        expect(getByTestId('PageTitle-Text')).toBeInTheDocument()
        expect(getByTestId('PageTitle-Signature')).toBeInTheDocument()
    })

    it('should render correctly pre-load', () => {
        const {getByTestId} = render(<PageTitle title="test-title" />)

        const image = getByTestId('PageTitle-Image')
        expect(image).toHaveStyle({opacity: '0'})

        const text = getByTestId('PageTitle-Text')
        expect(text).toHaveStyle({opacity: '0'})
    })

    it('should render correctly post-load', () => {
        const {getByTestId} = render(
            <PageTitle title="test-title" skipLoad={true} />
        )

        const image = getByTestId('PageTitle-Image')
        expect(image).toHaveStyle({opacity: '100'})

        const text = getByTestId('PageTitle-Text')
        expect(text).toHaveStyle({opacity: '100'})
    })

    it('should render signature when specified', () => {
        const {getByTestId} = render(
            <PageTitle title="test-title" signature={true} />
        )
        expect(getByTestId('PageTitle-Signature')).toHaveAttribute(
            'src',
            'Logo.png'
        )
    })
})
