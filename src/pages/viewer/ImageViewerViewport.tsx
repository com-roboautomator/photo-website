import {createStyles, withStyles, WithStyles} from '@material-ui/styles'
import React from 'react'
import {collection, image} from 'src/assets/data/ImageDataStructure'
import Arrow from '../components/carousel/Arrow'

interface ImageViewerViewportProps extends WithStyles<typeof styles> {
    index: number
    collection: collection
    next: () => void
    previous: () => void
}

class ImageViewerViewport extends React.Component<ImageViewerViewportProps> {
    getIndex = (index: number) => {
        if (index < 0) {
            return 0
        }
        if (index > this.props.collection.images.length) {
            return this.props.collection.images.length
        }
        return index
    }

    render() {
        const props = this.props
        const classes = this.props.classes

        return (
            <div className={classes.container}>
                <div className={classes.background} />
                {this.props.collection.images.map((property: image) => (
                    <img
                        className={
                            property.index === this.props.index
                                ? classes.target
                                : classes.hidden
                        }
                        src={property.url}
                        alt=""
                    />
                ))}

                <div
                    className={classes.button_wrapper}
                    id="Image-Viewer-Viewport-Button-Wrapper">
                    <Arrow
                        disabled={props.index <= 0}
                        onClick={this.props.previous}
                        orientation="Left"
                    />
                    <Arrow
                        disabled={
                            props.index >= props.collection.images.length - 1
                        }
                        onClick={this.props.next}
                        orientation="Right"
                    />
                </div>
            </div>
        )
    }
}

const styles = () =>
    createStyles({
        container: {
            alignSelf: 'center',
            justifySelf: 'flex-start',

            display: 'flex',
            width: '80vw',
            height: '70vh',

            justifyContent: 'center',
        },
        wrapper: {
            background: 'black',
        },
        target: {
            flex: 1,
            maxWidth: '65vw',
            maxHeight: '60vh',
            opacity: '100%',
            position: 'absolute',
            transform: 'scale(1)',
            alignSelf: 'center',
            WebkitTransition: 'opacity 1s, transform 0.5s',
        },
        hidden: {
            flex: 1,
            maxWidth: '65vw',
            maxHeight: '60vh',
            opacity: '0%',
            position: 'absolute',
            transform: 'scale(0.9)',
            alignSelf: 'center',
            WebkitTransition: 'opacity 0.5s, transform 0.5s',
        },
        background: {
            position: 'absolute',
            alignSelf: 'center',
            filter: 'blur(15px)',
            opacity: '60%',
            background: '#d3d3d3',
            width: '70vw',
            height: '65vh',
        },
        button_wrapper: {
            alignSelf: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            width: '80vw',
        },
    })

export default withStyles(styles)(ImageViewerViewport)
