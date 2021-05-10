import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import GalleryPage from '../GalleryPage'
import {BrowserRouter, Route} from 'react-router-dom'

describe('Gallery Page', () => {
    it('should match snapshot', () => {
        const navigationBarRender = renderer
            .create(
                <BrowserRouter>
                    <Route
                        render={(props: any) => <GalleryPage {...props} />}
                    />
                </BrowserRouter>
            )
            .toJSON()

        expect(navigationBarRender).toMatchSnapshot()
    })
})
