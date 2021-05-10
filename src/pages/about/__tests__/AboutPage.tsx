import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import AboutPage from '../AboutPage'

describe('About Page', () => {

    it('should match snapshot', () => {
        const ImageSliderRender = renderer
            .create(
                <AboutPage />
            )
            .toJSON()
        expect(ImageSliderRender).toMatchSnapshot()
    })

    it('should render correctly', () => {

        const { getByTestId } = render(<AboutPage />)

        expect(getByTestId('PageTitle-Container')).toBeInTheDocument()
        expect(getByTestId('About-Page')).toBeInTheDocument()
        expect(getByTestId('ProfileImage-Container')).toBeInTheDocument()
        expect(getByTestId('About-Page-Text')).toBeInTheDocument()

    })

})