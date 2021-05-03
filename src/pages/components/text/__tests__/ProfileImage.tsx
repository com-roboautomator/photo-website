import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import ProfileImage from '../ProfileImage'

describe('Profile Image', () => {

    it('should render correctly', () => {

        const component = render(<ProfileImage />)

        expect(component).toBeTruthy()

        // container
        expect(component.getByTestId('ProfileImage-Container')).toHaveClass('ProfileImage-container-1')
        expect(component.getByTestId('ProfileImage-Container')).toHaveStyle('width: 150px')

        // image
        expect(component.getByTestId('ProfileImage-Image')).toHaveClass('ProfileImage-image-2')
        expect(component.getByTestId('ProfileImage-Image')).toHaveStyle('width: 150px')
        expect(component.getByTestId('ProfileImage-Image')).toHaveStyle('height: 150px')
        expect(component.getByTestId('ProfileImage-Image')).toHaveStyle('borderRadius: 100%')

        // image content
        expect(component.getByTestId("ProfileImage-Image")).toHaveProperty('src', 'http://localhost/SaraDoneuxImage.jpg')

        // text
        expect(component.getByTestId('ProfileImage-Text')).toHaveClass('ProfileImage-text-3')
        expect(component.getByTestId('ProfileImage-Text')).toHaveStyle('textAlign: center')
        expect(component.getByTestId('ProfileImage-Text')).toHaveStyle('fontFamily: Open-Sans-Bold')
        expect(component.getByTestId('ProfileImage-Text')).toHaveStyle('fontSize: 18px')
        expect(component.getByTestId('ProfileImage-Text')).toHaveStyle('marginTop: 5px')
        expect(component.getByTestId('ProfileImage-Text')).toHaveStyle('color: #5f5f5f')

        // text content
        expect(component.getByTestId('ProfileImage-Text').innerHTML).toEqual('Sara Doneux')

    })

})