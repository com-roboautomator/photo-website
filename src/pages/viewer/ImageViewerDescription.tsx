import { createStyles, withStyles, WithStyles } from '@material-ui/styles'
import React from 'react'

interface ImageViewerDescriptionProps extends WithStyles<typeof styles> {
    title?: string
    text?: string
}

class ImageViewerDescription extends React.Component<ImageViewerDescriptionProps> {
    render() {
        const classes = this.props.classes
        const props = this.props
        return (
            <div className={classes.container}>
                <div
                    data-testid="Image-Viewer-Description-Title"
                    className={classes.title}
                >
                    {props.text === undefined ? '' : props.title}
                </div>
                <div
                    data-testid="Image-Viewer-Description-Text"
                    className={classes.text}
                >
                    {props.text}
                </div>
            </div>
        )
    }
}

const styles = () =>
    createStyles({
        container: {
            width: '50vw',
            alignSelf: 'center',
        },
        title: {
            fontFamily: 'Open-Sans-Bold',
            textAlign: 'left',
        },
        text: {
            fontFamily: 'Open-Sans-Regular',
            textAlign: 'left',
        },
    })

export default withStyles(styles)(ImageViewerDescription)
