import {createStyles, withStyles, WithStyles} from '@material-ui/styles'
import React from 'react'

interface ImageViewerDescriptionProps extends WithStyles<typeof styles> {
    title?: string
    text?: string
}

interface ImageViewerDescriptionState {
    loaded: boolean
}

class ImageViewerDescription extends React.Component<
    ImageViewerDescriptionProps,
    ImageViewerDescriptionState
> {
    constructor(props: ImageViewerDescriptionProps) {
        super(props)
        this.state = {
            loaded: true,
        }
    }

    componentDidUpdate = () => {
        //this.setState({loaded: false})
    }

    render() {
        const classes = this.props.classes
        const props = this.props

        return (
            <div className={classes.container}>
                <div
                    data-testid="Image-Viewer-Description-Title"
                    className={
                        this.state.loaded ? classes.title : classes.preload
                    }>
                    {props.text === undefined ||
                    props.text === null ||
                    props.text.length === 0
                        ? ''
                        : props.title}
                </div>
                <div
                    data-testid="Image-Viewer-Description-Text"
                    className={
                        this.state.loaded ? classes.text : classes.preload
                    }>
                    {props.text}
                </div>
            </div>
        )
    }
}

const styles = () =>
    createStyles({
        container: {
            width: '70vw',
            alignSelf: 'center',
        },
        preload: {
            opacity: '0%',
            WebkitTransition: 'opacity 1s',
        },
        title: {
            fontFamily: 'Open-Sans-Regular',
            opacity: '100%',
            fontWeight: 'bold',
            WebkitTransition: 'opacity 1s',
            textAlign: 'left',
        },
        text: {
            fontFamily: 'Open-Sans-Regular',
            opacity: '100%',
            WebkitTransition: 'opacity 1s',
            textAlign: 'left',
        },
    })

export default withStyles(styles)(ImageViewerDescription)
