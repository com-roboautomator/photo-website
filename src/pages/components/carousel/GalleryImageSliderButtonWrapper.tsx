import {withStyles} from '@material-ui/styles'
import AbstractButtonWrapper from './AbstractButtonWrapper'
import {AbstractButtonWrapperProps} from './AbstractButtonWrapper'
import {styles} from './AbstractButtonWrapper'

interface GalleryImageSliderButtonWrapperProps
    extends AbstractButtonWrapperProps {}

class GalleryImageSliderButtonWrapper extends AbstractButtonWrapper<GalleryImageSliderButtonWrapperProps> {
    render() {
        return super.render()
    }
}

export default withStyles(styles)(GalleryImageSliderButtonWrapper)
