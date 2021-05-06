import {withStyles} from '@material-ui/styles'
import AbstractButtonWrapper from './AbstractButtonWrapper'
import {AbstractButtonWrapperProps} from './AbstractButtonWrapper'
import {styles} from './AbstractButtonWrapper'

interface HomeImageSliderButtonWrapperProps
    extends AbstractButtonWrapperProps {}

class HomeImageSliderButtonWrapper extends AbstractButtonWrapper<HomeImageSliderButtonWrapperProps> {
    render() {
        const classes = this.props.classes
        return (
            <div
                data-testid="ImageSlider-button-wrapper"
                className={classes.button_wrapper}
                style={{
                    background:
                        'linear-gradient(to right, white, transparent 30%), linear-gradient(to left, white, transparent 30%)',
                }}>
                {super.render()}
            </div>
        )
    }
}

export default withStyles(styles)(HomeImageSliderButtonWrapper)
