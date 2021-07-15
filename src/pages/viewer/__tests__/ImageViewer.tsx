import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'
import {BrowserRouter, Route} from 'react-router-dom'
import ImageViewer from '../ImageViewer'

describe('Image Viewer', () => {
    it('should match snapshot', () => {
        const navigationBarRender = renderer
            .create(
                <BrowserRouter>
                    <Route
                        render={(props: any) => <ImageViewer {...props} />}
                    />
                </BrowserRouter>
            )
            .toJSON()

        expect(navigationBarRender).toMatchSnapshot()
    })
})
