import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CollectionCard from '../CollectionCard'

describe('Collection Card', () => {

    it('should render collection card spacing correctly when unselected', () => {

        const component = render(<CollectionCard coverSrc="source/location" title="test-collection-card-title" selected={false}/>)

        expect(component).toBeTruthy()
        expect(component.getByTestId("Collection-Card-Spacing")).toHaveClass("CollectionCard-spacing_unselected-2")
        expect(component.getByTestId("Collection-Card-Spacing")).toHaveStyle("pointerEvents: auto")
        expect(component.getByTestId("Collection-Card-Spacing")).toHaveStyle("userSelect: none")
        expect(component.getByTestId("Collection-Card-Spacing")).toHaveStyle("flex: 1")
        expect(component.getByTestId("Collection-Card-Spacing")).toHaveStyle("transform: scale(0.8)")
        expect(component.getByTestId("Collection-Card-Spacing")).toHaveStyle("opacity: 90%")

    })

    it('should render collection card spacing correctly when selected', () => {

        const component = render(<CollectionCard coverSrc="source/location" title="test-collection-card-title" selected={true}/>)

        expect(component).toBeTruthy()
        expect(component.getByTestId("Collection-Card-Spacing")).toHaveClass("CollectionCard-spacing_selected-10")
        expect(component.getByTestId("Collection-Card-Spacing")).toHaveStyle("pointerEvents: auto")
        expect(component.getByTestId("Collection-Card-Spacing")).toHaveStyle("userSelect: none")
        expect(component.getByTestId("Collection-Card-Spacing")).toHaveStyle("flex: 1")
        expect(component.getByTestId("Collection-Card-Spacing")).toHaveStyle("zIndex: 99")
        expect(component.getByTestId("Collection-Card-Spacing")).toHaveStyle("transform: scale(1)")
        expect(component.getByTestId("Collection-Card-Spacing")).toHaveStyle("opacity: 100%")
        expect(component.getByTestId("Collection-Card-Spacing")).toHaveStyle("position: relative")

    })

})