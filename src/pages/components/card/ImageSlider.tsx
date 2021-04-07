import { createStyles, withStyles, WithStyles } from '@material-ui/core'
import React from 'react'
import CollectionCard from './CollectionCard'
import Arrow from './Arrow'
import Underscore from 'underscore'
import {v4} from 'uuid'

interface ImageSliderProps extends WithStyles<typeof styles> {
    data: { url: string; title: string; tagTitle?: string | undefined; tagColour?: string | undefined; index: number; }[]
}

class ImageSlider extends React.Component<ImageSliderProps, any> {
    constructor(props: ImageSliderProps) {
        super(props)
        this.handleWheelMovement = Underscore.throttle(this.handleWheelMovement, 300);
        this.state = {
            selected: 0,
            properties: this.props.data,
            property: this.props.data[0]
        }
    }

    next = () => {
        if (this.state.property.index === this.state.properties.length - 1) return
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
        const movement = (e.deltaY) ? e.deltaY : e.deltaX
        if (movement > 0) {
            this.next()
        } else {
            this.previous()
        }
    }

    render() {
        const classes = this.props.classes
        const { properties, property } = this.state

        return (
            <div className={classes.container} >
                <div className={classes.button_wrapper}>
                    <div className={classes.arrow} >
                        <Arrow
                            disabled={property.index === 0}
                            onClick={this.previous}
                            orientation={'Left'}
                        />
                    </div>
                    <div className={classes.arrow}>
                        <Arrow
                            disabled={
                                property.index === properties.length - 1
                            }
                            onClick={this.next}
                            orientation={'Right'}
                        />
                    </div>
                </div>
                <div className={classes.card_slider} onWheel={(e) => { this.handleWheelMovement(e) }}>
                    <div
                        className={classes.card_slider_wrapper}
                        style={{
                            transform: `translateX(-${property.index * (100 / properties.length)
                                }%)`,
                        }}>
                        {properties.map(
                            (property: {
                                key: string
                                url: string
                                title: string
                                tagTitle: string
                                tagColour: string
                                index: number
                            }) => (
                                <CollectionCard
                                    key={v4()}
                                    coverSrc={property.url}
                                    title={property.title}
                                    selected={
                                        this.state.selected ===
                                        property.index
                                    }
                                    tagTitle={property.tagTitle}
                                    tagColour={property.tagColour}
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

const styles = () =>
    createStyles({
        container: {

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
            height: '270px',
        },
        button_wrapper: {
            zIndex: 99,
            pointerEvents: 'none',
            position: 'absolute',
            width: '100vw',
            paddingTop: '70px',
            paddingBottom: '70px',
            display: 'flex',
            justifyContent: 'space-between',
            alignSelf: 'center',
            background:
                'linear-gradient(to right, white, transparent 50%), linear-gradient(to left, white, transparent 50%)',
        },
        card_slider_wrapper: {
            pointerEvents: 'auto',
            display: 'flex',
            position: 'absolute',
            margin: '10px',
            transition: '300ms cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        },

        arrow: {
            pointerEvents: 'auto',
            margin: '20px',
        },
    })

export default withStyles(styles)(ImageSlider)