import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import {shallow} from 'enzyme'
import {BrowserRouter, Route, Router} from 'react-router-dom'
import renderer from 'react-test-renderer'
import ContactPage from '../ContactPage'

describe('Contact Page', () => {
    it('should render correctly when there are no items', () => {
        const ImageSliderRender = renderer
            .create(
                <BrowserRouter>
                    <Route
                        render={(props: any) => <ContactPage {...props} />}
                    />
                </BrowserRouter>
            )
            .toJSON()

        expect(ImageSliderRender).toMatchSnapshot()
    })

    it('should render correctly', () => {
        const {getByTestId} = render(
            <BrowserRouter>
                <Route render={(props: any) => <ContactPage {...props} />} />
            </BrowserRouter>
        )

        expect(
            getByTestId('InputField-TextField-Full Name')
        ).toBeInTheDocument()
        expect(
            getByTestId('InputField-TextField-Email Address')
        ).toBeInTheDocument()
        expect(getByTestId('InputField-TextField-Message')).toBeInTheDocument()

        expect(getByTestId('Submit-Button')).toBeInTheDocument()
    })
})
