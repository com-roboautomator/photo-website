import { createStyles, withStyles, WithStyles } from '@material-ui/styles'
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

class ImageViewerViewport extends React.Component<ImageViewerViewportProps, ImageViewerViewportState> {

    constructor(props: ImageViewerViewportProps) {
        super(props)

        this.state = ({
            switch: false,
            previousUrl: ""
        })
    }

    next = () => {

        const previous = this.props.targetImage
        const change = !this.state.switch
        this.setState({
            switch: change,
            previousUrl: previous
        })
        this.props.next()

    }

    previous = () => {

        const previous = this.props.targetImage
        const change = !this.state.switch
        this.setState({
            switch: change,
            previousUrl: previous
        })
        this.props.previous()

    }

    flipSwitch = () => {
        const change = !this.state.switch

        this.setState({
            switch: change
        })
    }

    render() {
        const props = this.props
        const state = this.state
        const classes = this.props.classes

        const change = this.state.switch

        return (
            <div className={classes.container}>
                <Arrow disabled={props.index <= 0} onClick={this.previous} orientation='Left' />
                <div className={classes.wrapper}>
                    <img
                        className={(state.switch) ? classes.previous : classes.image}
                        // style={{ zIndex: (state.switch) ? 1 : 99 }}
                        src={(state.switch) ? state.previousUrl : props.targetImage}
                        alt=""
                    />
                </div>
                <div className={classes.wrapper}>
                    <img
                        className={(state.switch) ? classes.image : classes.previous}
                        // style={{ zIndex: (state.switch) ? 99 : 1 }}
                        src={(state.switch) ? props.targetImage : state.previousUrl}
                        alt="" />

                </div>
                <Arrow disabled={props.index >= props.collectionLength - 1} onClick={this.next} orientation='Right' />

            </div>
        )
    }

}

const styles = () => createStyles({
    container: {

        //: 'red',

        alignSelf: 'center',
        justifySelf: 'center',

        display: 'flex',
        width: '70vw',

        justifyContent: 'center',

    },
    wrapper: {
        background: 'black'
    },
    image: {
        height: '70vh',
        opacity: '100%',
        position: 'absolute',
        WebkitTransition: 'opacity 1s'
    },
    previous: {
        height: '70vh',
        position: 'absolute',
        opacity: '0%',
        WebkitTransition: 'opacity 1s',
    },

})

export default withStyles(styles)(ImageViewerViewport)