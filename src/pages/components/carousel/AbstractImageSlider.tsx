import {createStyles, WithStyles} from '@material-ui/core'
import React from 'react'
import Underscore from 'underscore'

import Collection from '../../../assets/data/ImageDataStructure'

export interface AbstractImageSliderProps extends WithStyles<typeof styles> {
    data: Collection[]
    startingIndex?: number
    height?: number
}

export interface AbstractImageSliderState {
    selected: number
    properties: Collection[]
    property: Collection
}

class AbstractImageSlider<
    T extends AbstractImageSliderProps,
    J extends AbstractImageSliderState
> extends React.Component<T, J> {
    constructor(props: T) {
        super(props)
        this.handleWheelMovement = Underscore.debounce(
            this.handleWheelMovement,
            30,
            true
        )
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

export default AbstractImageSlider
