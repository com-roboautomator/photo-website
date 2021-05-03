import {createStyles, withStyles, WithStyles} from '@material-ui/styles'
import React from 'react'
import {data} from '../assets/data/TestData'

interface ImageViewerProps extends WithStyles<typeof styles> {
    source?: string
}

class ImageViewer extends React.Component<ImageViewerProps, any> {
    constructor(props: ImageViewerProps) {
        super(props)

        this.state = {
            properties: data,
        }
    }

    render() {
        const {properties} = this.state
        const property: string = properties.find(
            (x: {url: string}) =>
                x.url ===
                'https://i.picsum.photos/id/158/4836/3224.jpg?hmac=Gu_3j3HxZgR74iw1sV0wcwlnSZSeCi7zDWLcjblOp_c'
        ).url
        const classes = this.props.classes

        return (
            <div>
                <img src={property} alt="nata" className={classes.container} />
            </div>
        )
    }
}

const styles = () =>
    createStyles({
        container: {
            display: 'block',
            width: '50%',
            //height: '50%',
            aspectRatio: '1',
        },
    })

export default withStyles(styles)(ImageViewer)
