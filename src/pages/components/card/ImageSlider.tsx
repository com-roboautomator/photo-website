import { createStyles, withStyles, WithStyles } from '@material-ui/core'
import React from 'react'
import CollectionCardHome from './HomeCollectionCard'
import CollectionCardGallery from './GalleryCollectionCard'
import Underscore from 'underscore'
import ImageSliderButtonWrapper from './ImageSliderButtonWrapper'
import ImageSliderTitle from './ImageSliderTitle'
import Collection from '../../../assets/data/ImageDataStructure'

interface ImageSliderProps extends WithStyles<typeof styles> {
    data: Collection[]
    startingIndex?: number
    mode: "Home" | "Gallery"
    height?: number
    titleColour?: string
    title?: string
}

class ImageSlider extends React.Component<ImageSliderProps, any> {
    constructor(props: ImageSliderProps) {
        super(props)
        this.handleWheelMovement = Underscore.debounce(
            this.handleWheelMovement,
            30,
            true
        )

        this.state = {
            selected: this.props.startingIndex ? this.props.startingIndex : 0,
            properties: this.props.data,
            property: this.props.data[
                this.props.startingIndex ? this.props.startingIndex : 0
            ],
        }
    }

    next = () => {
        if (this.state.property.index === this.state.properties.length - 1)
            return
        const newIndex = this.state.property.index + 1
        this.setState({
            property: this.state.properties[newIndex],
            selected: newIndex,
        })
    }

    previous = () => {
        if (this.state.property.index === 0) return
        const newIndex = this.state.property.index - 1
        this.setState({
            property: this.state.properties[newIndex],
            selected: newIndex,
        })
    }

    handleWheelMovement = (e: React.WheelEvent<HTMLDivElement>) => {
        let movement = e.deltaX ? e.deltaX : e.deltaY
        if (movement > 0) {
            this.next()
        } else {
            this.previous()
        }
    }

    render() {
        const classes = this.props.classes
        const { properties, property } = this.state

        console.log(property.index * (85 / properties.length))

        return (

            <main className={classes.container}>
                <ImageSliderTitle show={this.props.mode === "Gallery"} text={this.props.title} colour={this.props.titleColour} />
                <div
                    data-testid="ImageSlider-Container"
                    className={classes.wrapper}>
                    <ImageSliderButtonWrapper
                        mode={this.props.mode}
                        index={property.index}
                        length={properties.length}
                        next={this.next}
                        previous={this.previous}
                    />
                    <div
                        data-testid="ImageSlider-Card-Slider"
                        className={classes.card_slider}
                        style={{ height: `${this.props.height}px` }}
                        onWheel={(e) => {
                            this.handleWheelMovement(e)
                        }}>
                        <div
                            className={classes.card_slider_wrapper}
                            style={{
                                transform: `translateX(-${property.index * 100 / ((this.props.mode === 'Gallery') ? properties.length + 1.3 : properties.length)
                                    }%)`,
                            }}>
                            {properties.map(
                                (property: Collection) => (
                                    (this.props.mode === "Home") ?
                                        <CollectionCardHome
                                            collection={property}
                                            selected={
                                                this.state.selected === property.index
                                            }
                                        />
                                        :
                                        <CollectionCardGallery
                                            selected={
                                                this.state.selected - property.index
                                            }
                                            height={(this.props.height === undefined) ? 460 : this.props.height}
                                            collection={property}
                                        />
                                )
                            )}
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

const styles = () =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
            userSelect: 'none',
        },
        wrapper: {
            pointerEvents: 'auto',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            overflowX: 'hidden',
        },
        card_slider: {
            pointerEvents: 'auto',
            position: 'relative',
            maxWidth: '370px',
            width: '370px',
        },
        card_slider_wrapper: {
            pointerEvents: 'auto',
            display: 'flex',
            position: 'absolute',
            margin: '10px',
            transition: '300ms cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        },
    })

export default withStyles(styles)(ImageSlider)
