import { createStyles, withStyles, WithStyles } from '@material-ui/styles'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { findCollectionById } from '../../assets/data/Images'
import { image, placeholder } from '../../assets/data/ImageDataStructure'

interface ImageViewerProps extends WithStyles<typeof styles>, React.PropsWithChildren<RouteComponentProps<any, any, unknown>> {
    source?: string
}

interface ImageViewerState {
    //collection: any
}

class ImageViewer extends React.Component<ImageViewerProps, ImageViewerState> {
    constructor(props: ImageViewerProps) {
        super(props)

        this.state = {
            collection: {}
        }
    }

    componentDidMount = () => {
        // This will become an API call based on the collection ID
        this.setState({
            //collection: natureImages[0]
        })
    }

    render() {
        const { collectionId } = this.props.match.params
        const images = findCollectionById(collectionId)?.images
        return (
            <div style={{background: 'red', height: '80vh', display: 'flex', justifyContent: 'center'}}>
                <img src={(images === undefined) ? placeholder.url : images[0]?.url} alt="none" style={{height: '100%'}} />
            </div>
        )
    }
}

const styles = () =>
    createStyles({
    })

export default withStyles(styles)(ImageViewer)
