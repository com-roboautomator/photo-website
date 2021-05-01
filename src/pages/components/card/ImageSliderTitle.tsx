import {createStyles, WithStyles, withStyles} from '@material-ui/styles'
import React from 'react'

interface ImageSliderTitleProps extends WithStyles<typeof styles> {
    text?: string
    colour?: string
    show?: boolean
}

class ImageSliderTitle extends React.Component<ImageSliderTitleProps> {
    render() {
        const props = this.props
        const classes = this.props.classes
        return (
            <div
                className={props.show ? classes.container : classes.hidden}
                style={{borderColor: props.colour}}>
                {props.show ? props.text?.toUpperCase() : ''}
            </div>
        )
    }
}

const styles = () =>
    createStyles({
        container: {
            position: 'relative',
            fontFamily: 'Open-Sans-Regular',
            fontSize: '34px',
            textAlign: 'center',
            width: '80%',
            alignSelf: 'center',
            borderBottomStyle: 'solid',
            borderBottomWidth: '4px',
            paddingBottom: '10px',
            marginTop: '50px',
            marginBottom: '30px',
        },
        hidden: {},
    })

export default withStyles(styles)(ImageSliderTitle)
