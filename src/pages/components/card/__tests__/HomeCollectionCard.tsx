import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import HomeCollectionCard from '../HomeCollectionCard'

describe('Home Collection Card', () => {
    it('should render collection card spacing correctly when unselected', () => {
        const component = render(
            <HomeCollectionCard
                collection={{
                    key: 'key',
                    title: 'Home-Collection-Card-Title',
                    index: 0,
                }}
                selected={false}
            />
        )

        expect(component).toBeTruthy()
        expect(component.getByTestId('Collection-Card-Spacing')).toHaveClass(
            'CollectionCard-spacing_unselected-2'
        )
        expect(component.getByTestId('Collection-Card-Spacing')).toHaveStyle(
            'pointerEvents: auto'
        )
        expect(component.getByTestId('Collection-Card-Spacing')).toHaveStyle(
            'userSelect: none'
        )
        expect(component.getByTestId('Collection-Card-Spacing')).toHaveStyle(
            'flex: 1'
        )
        expect(component.getByTestId('Collection-Card-Spacing')).toHaveStyle(
            'transform: scale(0.8)'
        )
        expect(component.getByTestId('Collection-Card-Spacing')).toHaveStyle(
            'opacity: 90%'
        )
    })

    it('should render collection card spacing correctly when selected', () => {
        const component = render(
            <HomeCollectionCard
                collection={{
                    key: 'key',
                    title: 'Home-Collection-Card-Title',
                    index: 0,
                }}
                selected={true}
            />
        )

        expect(component).toBeTruthy()
        expect(component.getByTestId('Collection-Card-Spacing')).toHaveClass(
            'CollectionCard-spacing_selected-11'
        )
        expect(component.getByTestId('Collection-Card-Spacing')).toHaveStyle(
            'pointerEvents: auto'
        )
        expect(component.getByTestId('Collection-Card-Spacing')).toHaveStyle(
            'userSelect: none'
        )
        expect(component.getByTestId('Collection-Card-Spacing')).toHaveStyle(
            'flex: 1'
        )
        expect(component.getByTestId('Collection-Card-Spacing')).toHaveStyle(
            'zIndex: 99'
        )
        expect(component.getByTestId('Collection-Card-Spacing')).toHaveStyle(
            'transform: scale(1)'
        )
        expect(component.getByTestId('Collection-Card-Spacing')).toHaveStyle(
            'opacity: 100%'
        )
        expect(component.getByTestId('Collection-Card-Spacing')).toHaveStyle(
            'position: relative'
        )
    })

    it('should render card image correctly', () => {
        const component = render(
            <HomeCollectionCard
                collection={{
                    key: 'key',
                    title: 'Home-Collection-Card-Title',
                    index: 0,
                }}
                selected={true}
            />
        )

        expect(component).toBeTruthy()
        expect(component.getByTestId('Collection-Card-Image')).toHaveAttribute(
            'src',
            'https://picsum.photos/id/250/500'
        )
        expect(component.getByTestId('Collection-Card-Image')).toHaveAttribute(
            'width',
            '350'
        )
        expect(component.getByTestId('Collection-Card-Image')).toHaveAttribute(
            'height',
            '200'
        )
        expect(component.getByTestId('Collection-Card-Image')).toHaveClass(
            'CollectionCardImage-layout-24'
        )
        expect(component.getByTestId('Collection-Card-Image')).toHaveStyle(
            'borderTopLeftRadius: 25px'
        )
        expect(component.getByTestId('Collection-Card-Image')).toHaveStyle(
            'borderTopRightRadius: 25px'
        )
    })

    it('should render card text wrapper correctly', () => {
        const component = render(
            <HomeCollectionCard
                collection={{
                    key: 'key',
                    title: 'Home-Collection-Card-Title',
                    index: 0,
                }}
                selected={true}
            />
        )

        expect(component).toBeTruthy()
        expect(
            component.getByTestId('Collection-Card-Text-Wrapper')
        ).toHaveClass('CollectionCardText-text_wrapper-36')
        expect(
            component.getByTestId('Collection-Card-Text-Wrapper')
        ).toHaveStyle('position: relative')
        expect(
            component.getByTestId('Collection-Card-Text-Wrapper')
        ).toHaveStyle('zIndex: 99')
        expect(
            component.getByTestId('Collection-Card-Text-Wrapper')
        ).toHaveStyle('flex: 1')
        expect(
            component.getByTestId('Collection-Card-Text-Wrapper')
        ).toHaveStyle('flexDirection: row')
        expect(
            component.getByTestId('Collection-Card-Text-Wrapper')
        ).toHaveStyle('fontSize: 100%')
        expect(
            component.getByTestId('Collection-Card-Text-Wrapper')
        ).toHaveStyle('color: black')
        expect(
            component.getByTestId('Collection-Card-Text-Wrapper')
        ).toHaveStyle('borderBottomLeftRadius: 25px')
        expect(
            component.getByTestId('Collection-Card-Text-Wrapper')
        ).toHaveStyle('borderBottomRightRadius: 25px')
        expect(
            component.getByTestId('Collection-Card-Text-Wrapper')
        ).toHaveStyle('borderTop: 1px solid gray')
        expect(
            component.getByTestId('Collection-Card-Text-Wrapper')
        ).toHaveStyle('height: 45px')
    })

    it('should render card image icon correctly', () => {
        const component = render(
            <HomeCollectionCard
                collection={{
                    key: 'key',
                    title: 'Home-Collection-Card-Title',
                    index: 0,
                }}
                selected={true}
            />
        )

        expect(component).toBeTruthy()
        expect(
            component.getByTestId('Collection-Card-Image-Icon')
        ).toHaveAttribute('src', 'collection-image-o.png')
        expect(
            component.getByTestId('Collection-Card-Image-Icon')
        ).toHaveAttribute('width', '20')
        expect(
            component.getByTestId('Collection-Card-Image-Icon')
        ).toHaveAttribute('height', '20')
    })

    it('should render card title correctly', () => {
        const component = render(
            <HomeCollectionCard
                collection={{
                    key: 'key',
                    title: 'test-collection-card-title',
                    index: 0,
                }}
                selected={true}
            />
        )

        expect(component).toBeTruthy()
        expect(
            component.getByTestId('Collection-Card-Title')
        ).toHaveTextContent('test-collection-card-title')
        expect(component.getByTestId('Collection-Card-Title')).toHaveClass(
            'CollectionCardText-text-58'
        )
        expect(component.getByTestId('Collection-Card-Title')).toHaveStyle(
            'fontFamily: Open-Sans-Regular'
        )
        expect(component.getByTestId('Collection-Card-Title')).toHaveStyle(
            'fontStyle: normal'
        )
        expect(component.getByTestId('Collection-Card-Title')).toHaveStyle(
            'textAlign: left'
        )
        expect(component.getByTestId('Collection-Card-Title')).toHaveStyle(
            'position: relative'
        )
        expect(component.getByTestId('Collection-Card-Title')).toHaveStyle(
            'paddingLeft: 10px'
        )
        expect(component.getByTestId('Collection-Card-Title')).toHaveStyle(
            'width: 75%'
        )
        expect(component.getByTestId('Collection-Card-Title')).toHaveStyle(
            'alignSelf: center'
        )
    })
})
