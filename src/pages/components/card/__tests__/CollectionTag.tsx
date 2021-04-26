import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CollectionTag from '../HomeCollectionTag'

describe('Collection Tag', () => {
    it('should render tag correctly when given props', () => {
        const component = render(
            <CollectionTag colour="#47742c" title="test-title" />
        )

        expect(component).toBeTruthy()
        expect(component.getByTestId('tag-layout')).toHaveStyle(
            'background: rgb(71, 116, 44)'
        )
        expect(component.getByTestId('tag-layout')).toHaveStyle(
            'borderRadius: 7px'
        )
        expect(component.getByTestId('tag-layout')).toHaveStyle(
            'fontFamily: Open-Sans-Bold'
        )
        expect(component.getByTestId('tag-layout')).toHaveStyle('fontSize: 14')
        expect(component.getByTestId('tag-layout')).toHaveStyle('padding: 5px')
        expect(component.getByTestId('tag-layout')).toHaveStyle(
            'textAlign: center'
        )
        expect(component.getByTestId('tag-layout')).toHaveStyle('color: white')

        expect(component.getByTestId('tag-layout')).toHaveTextContent(
            'test-title'
        )
    })

    it('should render tag correctly with default props', () => {
        const component = render(<CollectionTag />)

        expect(component).toBeTruthy()
        expect(component.getByTestId('tag-layout')).toHaveStyle(
            'background: rgb(50, 50, 50)'
        )
        expect(component.getByTestId('tag-layout')).toHaveStyle(
            'borderRadius: 7px'
        )
        expect(component.getByTestId('tag-layout')).toHaveStyle(
            'fontFamily: Open-Sans-Bold'
        )
        expect(component.getByTestId('tag-layout')).toHaveStyle('fontSize: 14')
        expect(component.getByTestId('tag-layout')).toHaveStyle('padding: 5px')
        expect(component.getByTestId('tag-layout')).toHaveStyle(
            'textAlign: center'
        )
        expect(component.getByTestId('tag-layout')).toHaveStyle('color: white')

        expect(component.getByTestId('tag-layout')).toHaveTextContent('Default')
    })
})
