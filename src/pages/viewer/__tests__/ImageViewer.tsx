import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import renderer from 'react-test-renderer'
import {
    BrowserRouter,
    Route,
    Router,
    useHistory,
    useParams,
} from 'react-router-dom'
import ImageViewer from '../ImageViewer'

describe('Image Viewer', () => {
    it('renders correctly when there are no items', () => {
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

    it('should render correctly', () => {
        const {getByTestId} = render(
            <BrowserRouter>
                <Route render={(props) => <ImageViewer {...props} />} />
            </BrowserRouter>
        )

        expect(
            getByTestId('Image-Viewer-Title-Collection-Title')
        ).toBeInTheDocument()
        expect(
            getByTestId('Image-Viewer-Viewport-Previous-Image')
        ).toBeInTheDocument()
        expect(getByTestId('Image-Viewer-Index')).toBeInTheDocument()
        expect(
            getByTestId('Image-Viewer-Description-Title')
        ).toBeInTheDocument()
        expect(getByTestId('Image-Viewer-Description-Text')).toBeInTheDocument()
    })
})
