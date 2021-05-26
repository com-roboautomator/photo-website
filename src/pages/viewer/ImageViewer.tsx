import {createStyles, withStyles, WithStyles} from '@material-ui/styles'
import React from 'react'
import {RouteComponentProps} from 'react-router-dom'
import {
    collection,
    image,
    placeholder,
} from '../../assets/data/ImageDataStructure'
import ImageViewerTitle from './ImageViewerTitle'
import ImageViewerViewport from './ImageViewerViewport'
import ImageViewerIndex from './ImageViewerIndex'
import ImageViewerDescription from './ImageViewerDescription'

interface ImageViewerProps
    extends WithStyles<typeof styles>,
        React.PropsWithChildren<RouteComponentProps<any, any, unknown>> {}

interface ImageViewerState {
    collection: collection
    index: number
    previousIndex: number
}

class ImageViewer extends React.Component<ImageViewerProps, ImageViewerState> {
    componentDidMount = () => {
        var {collectionId} = this.props.match.params
        console.log('http://localhost:8080/collection/' + collectionId)
        fetch(
            'http://localhost:8080/collection/' +
                this.props.match.params.collectionId,
            {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then((response) => response.json())
            .then((response) => {
                console.log(response)
                this.setState({
                    collection: response,
                })
            })
    }

    constructor(props: ImageViewerProps) {
        super(props)
        this.state = {
            index: 0,
            previousIndex: 0,
            collection: {id: 'null key', title: 'null title', index: 0},
        }
    }

    next = () => {
        const currentIndex = this.state.index
        const updatedIndex = this.state.index + 1
        this.setState({
            previousIndex: currentIndex,
            index: updatedIndex,
        })
    }

    previous = () => {
        const currentIndex = this.state.index
        const updatedIndex = this.state.index - 1
        this.setState({
            previousIndex: currentIndex,
            index: updatedIndex,
        })
    }

    render() {
        if (this.state.collection === null) {
            console.log('returning')
            return <div />
        }

        const collection = this.state.collection
        const images = collection?.images

        const state = this.state
        const classes = this.props.classes

        const collectionLength =
            collection?.images === undefined ? 0 : collection.images.length
        const targetImage: image =
            collection?.images === undefined
                ? placeholder
                : collection?.images[state.index]

        return (
            <div className={classes.container}>
                <ImageViewerTitle
                    collectionTitle={collection?.title.toUpperCase() ?? ''}
                    imageTitle={
                        images === undefined
                            ? ''
                            : images[this.state.index].title.toUpperCase() ?? ''
                    }
                />
                <ImageViewerViewport
                    targetImage={
                        images === undefined
                            ? ''
                            : images[this.state.index].url ?? ''
                    }
                    collectionLength={images?.length ?? 0}
                    index={this.state.index}
                    next={this.next}
                    previous={this.previous}
                />
                <ImageViewerIndex
                    indexValue={this.state.index}
                    indexTotal={collectionLength}
                />
                <ImageViewerDescription
                    title={targetImage.title}
                    text={targetImage.description}
                />
            </div>
        )
    }
}

const styles = () =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',

            justifyContent: 'center',
            alignContent: 'center',
        },
    })

export default withStyles(styles)(ImageViewer)
