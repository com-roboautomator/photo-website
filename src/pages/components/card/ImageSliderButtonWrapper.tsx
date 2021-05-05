import {WithStyles, createStyles, withStyles} from '@material-ui/styles'
import React from 'react'
import Arrow from '../navigation/Arrow'

interface ImageSliderButtonWrapperProps extends WithStyles<typeof styles> {
    length: number
    index: number
    mode: 'Gallery' | 'Home'
    previous?: () => void
    next?: () => void
}

class ImageSliderButtonWrapper extends React.Component<ImageSliderButtonWrapperProps> {
    render() {
        const classes = this.props.classes
        return (
            <div
                data-testid="ImageSlider-button-wrapper"
                className={classes.button_wrapper}
                style={{
                    background:
                        this.props.mode === 'Home'
                            ? 'linear-gradient(to right, white, transparent 30%), linear-gradient(to left, white, transparent 30%)'
                            : 'none',
                }}>
                <div className={classes.arrow}>
                    <Arrow
                        disabled={this.props.index === 0}
                        onClick={this.props.previous}
                        orientation={'Left'}
                    />
                </div>
                <div data-testid="ImageSlider-arrow" className={classes.arrow}>
                    <Arrow
                        disabled={this.props.index === this.props.length - 1}
                        onClick={this.props.next}
                        orientation={'Right'}
                    />
                </div>
            </div>
        )
    }
}

const styles = () =>
    createStyles({
        button_wrapper: {
            zIndex: 99,
            pointerEvents: 'none',
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignSelf: 'center',
        },
        arrow: {
            pointerEvents: 'auto',
            margin: '20px',
            alignSelf: 'center',
        },
    })

export default withStyles(styles)(ImageSliderButtonWrapper)
