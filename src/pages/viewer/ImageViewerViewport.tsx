import {createStyles, withStyles, WithStyles} from '@material-ui/styles'
import React from 'react'
import Arrow from '../components/navigation/Arrow'

interface ImageViewerViewportProps extends WithStyles<typeof styles> {
    nextImage?: string
    targetImage: string
    previousImage?: string
    collectionLength: number
    index: number
    next: () => void
    previous: () => void
}

interface ImageViewerViewportState {
    switch: Boolean
    previousUrl: string
}

class ImageViewerViewport extends React.Component<
    ImageViewerViewportProps,
    ImageViewerViewportState
> {
    constructor(props: ImageViewerViewportProps) {
        super(props)

        this.state = {
            switch: false,
            previousUrl: '',
        }
    }

    next = () => {
        const previous = this.props.targetImage
        const change = !this.state.switch
        this.setState({
            switch: change,
            previousUrl: previous,
        })
        this.props.next()
    }

    previous = () => {
        const previous = this.props.targetImage
        const change = !this.state.switch
        this.setState({
            switch: change,
            previousUrl: previous,
        })
        this.props.previous()
    }

    render() {
        const props = this.props
        const state = this.state
        const classes = this.props.classes

        const change = this.state.switch

        return (
            <div className={classes.container}>
                <img
                    className={state.switch ? classes.previous : classes.image}
                    src={state.switch ? state.previousUrl : props.targetImage}
                    alt=""
                />

                <img
                    className={state.switch ? classes.image : classes.previous}
                    src={state.switch ? props.targetImage : state.previousUrl}
                    alt=""
                />
                <div className={classes.button_wrapper}>
                    <Arrow
                        disabled={props.index <= 0}
                        onClick={this.previous}
                        orientation="Left"
                    />
                    <Arrow
                        disabled={props.index >= props.collectionLength - 1}
                        onClick={this.next}
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
            justifySelf: 'center',

            display: 'flex',
            width: '70vw',
            height: '70vh',

            justifyContent: 'center',
        },
        wrapper: {
            background: 'black',
        },
        image: {
            height: '70vh',
            opacity: '100%',
            position: 'absolute',
            WebkitTransition: 'opacity 1s',
        },
        previous: {
            height: '70vh',
            position: 'absolute',
            opacity: '0%',
            WebkitTransition: 'opacity 1s',
        },
        button_wrapper: {
            alignSelf: 'center',

            display: 'flex',
            justifyContent: 'space-between',
            width: '50vw',
        },
    })

export default withStyles(styles)(ImageViewerViewport)
