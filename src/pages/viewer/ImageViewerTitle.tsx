import {withStyles, WithStyles, createStyles} from '@material-ui/styles'
import React from 'react'

interface ImageViewerTitleProps extends WithStyles<typeof styles> {
    collectionTitle: string
    imageTitle: string
}

class ImageViewerTitle extends React.Component<ImageViewerTitleProps> {
    render() {
        const classes = this.props.classes
        const props = this.props
        return (
            <div className={classes.container}>
                <div
                    data-testid="Image-Viewer-Title-Collection-Title"
                    className={classes.collection_title}>
                    {props.collectionTitle}
                </div>
                <div
                    data-testid="Image-Viewer-Title-Image-Title"
                    className={classes.image_title}>
                    {props.imageTitle}
                </div>
            </div>
        )
    }
}

const styles = () =>
    createStyles({
        container: {
            display: 'flex',
            marginTop: '40px',

            alignSelf: 'center',
            justifySelf: 'center',
        },
        collection_title: {
            paddingRight: '6px',
            fontFamily: 'Open-Sans-Regular',
            fontWeight: 'bold',

            borderRight: '2px solid #47742c',
        },
        image_title: {
            paddingLeft: '6px',
            fontFamily: 'Open-Sans-Regular',

            borderLeft: '2px solid #47742c',
        },
    })

export default withStyles(styles)(ImageViewerTitle)
