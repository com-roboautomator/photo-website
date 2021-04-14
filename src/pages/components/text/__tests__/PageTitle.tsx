import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

import PageTitle from '../PageTitle'

describe('Page Title', () => {

    it('should render correctly pre-load', () => {

        const component = render(<PageTitle src="test source" title="Test Title" />)

        expect(component).toBeTruthy()

        //container
        expect(component.getByTestId("PageTitle-Container")).toHaveClass("PageTitle-container-1")
        expect(component.getByTestId("PageTitle-Container")).toHaveStyle("display: flex")
        expect(component.getByTestId("PageTitle-Container")).toHaveStyle("zIndex: 0")

        //image
        expect(component.getByTestId('PageTitle-Image')).toHaveClass("PageTitle-image_loading-3")
        expect(component.getByTestId('PageTitle-Image')).toHaveStyle("width: 100%")
        expect(component.getByTestId('PageTitle-Image')).toHaveStyle("height: 200px")
        expect(component.getByTestId('PageTitle-Image')).toHaveStyle("opacity: 0")
        expect(component.getByTestId('PageTitle-Image')).toHaveStyle("filter: blur(2px)")

        //text
        expect(component.getByTestId('PageTitle-Text')).toHaveClass("PageTitle-title_loading-4")
        expect(component.getByTestId('PageTitle-Text')).toHaveStyle("position: absolute")
        expect(component.getByTestId('PageTitle-Text')).toHaveStyle("alignSelf: center")
        expect(component.getByTestId('PageTitle-Text')).toHaveStyle("color: white")
        expect(component.getByTestId('PageTitle-Text')).toHaveStyle("fontFamily: Open-Sans-Regular")
        expect(component.getByTestId('PageTitle-Text')).toHaveStyle("fontSize: 35px")
        expect(component.getByTestId('PageTitle-Text')).toHaveStyle("marginLeft: 150px")
        expect(component.getByTestId('PageTitle-Text')).toHaveStyle("marginTop: 40px")
        expect(component.getByTestId('PageTitle-Text')).toHaveStyle("paddingLeft: 10px")
        expect(component.getByTestId('PageTitle-Text')).toHaveStyle("borderLeft: 5px Solid #7baab5")
        expect(component.getByTestId('PageTitle-Text')).toHaveStyle("filter: blur(2px)")
        expect(component.getByTestId('PageTitle-Text')).toHaveStyle("opacity: 0")

    })

    it('should load correct post-load', async () => {

        const component = render(<PageTitle src="test source" title="Test Title" skipLoad={true} />)

        expect(component).toBeTruthy()

        //container
        expect(component.getByTestId("PageTitle-Container")).toHaveClass("PageTitle-container-6")
        expect(component.getByTestId("PageTitle-Container")).toHaveStyle("display: flex")
        expect(component.getByTestId("PageTitle-Container")).toHaveStyle("zIndex: 0")


        //image
        expect(component.getByTestId('PageTitle-Image')).toHaveClass("PageTitle-image_loaded-7")
        expect(component.getByTestId('PageTitle-Image')).toHaveStyle("width: 100%")
        expect(component.getByTestId('PageTitle-Image')).toHaveStyle("height: 200px")
        expect(component.getByTestId('PageTitle-Image')).toHaveStyle("opacity: 100")

        //text
        expect(component.getByTestId('PageTitle-Text')).toHaveClass("PageTitle-title_loaded-10")
        expect(component.getByTestId('PageTitle-Text')).toHaveStyle("position: absolute")
        expect(component.getByTestId('PageTitle-Text')).toHaveStyle("alignSelf: center")
        expect(component.getByTestId('PageTitle-Text')).toHaveStyle("color: white")
        expect(component.getByTestId('PageTitle-Text')).toHaveStyle("fontFamily: Open-Sans-Regular")
        expect(component.getByTestId('PageTitle-Text')).toHaveStyle("fontSize: 35px")
        expect(component.getByTestId('PageTitle-Text')).toHaveStyle("marginLeft: 150px")
        expect(component.getByTestId('PageTitle-Text')).toHaveStyle("marginTop: 40px")
        expect(component.getByTestId('PageTitle-Text')).toHaveStyle("paddingLeft: 10px")
        expect(component.getByTestId('PageTitle-Text')).toHaveStyle("borderLeft: 5px Solid #7baab5")
        expect(component.getByTestId('PageTitle-Text')).toHaveStyle("opacity: 100")
        expect(component.getByTestId('PageTitle-Text')).toHaveStyle("transition: opacity ease-in 200ms, filter ease-in 200ms")

    })

    it('should render correct image', () => {

        const component = render(<PageTitle src="https://picsum.photos/200" title="Test Title" />)

        expect(component.getByTestId('PageTitle-Image')).toHaveProperty("src", "https://picsum.photos/200")
        expect(component.getByTestId('PageTitle-Text').innerHTML).toEqual("Test Title")

    })

})