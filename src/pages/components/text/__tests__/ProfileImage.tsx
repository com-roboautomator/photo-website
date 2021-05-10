import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import ProfileImage from '../ProfileImage'

describe('Profile Image', () => {
    it('should render correctly', () => {
        const {getByTestId} = render(<ProfileImage />)

        expect(getByTestId('ProfileImage-Image')).toBeInTheDocument()
        expect(getByTestId('ProfileImage-Image')).toHaveProperty(
            'src',
            'http://localhost/SaraDoneuxImage.jpg'
        )
        expect(getByTestId('ProfileImage-Text')).toBeInTheDocument()
        expect(getByTestId('ProfileImage-Text').innerHTML).toEqual(
            'Sara Doneux'
        )
    })
})
