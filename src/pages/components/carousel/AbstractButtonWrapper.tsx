import {createStyles, WithStyles} from '@material-ui/styles'
import React from 'react'
import Arrow from './Arrow'

export interface AbstractButtonWrapperProps extends WithStyles<typeof styles> {
    length: number
    index: number
    previous?: () => void
    next?: () => void
}

class AbstractButtonWrapper<
    T extends AbstractButtonWrapperProps
> extends React.Component<T, {}> {
    render() {
        const classes = this.props.classes
        return (
            <div className={classes.button_wrapper}>
                <div className={classes.arrow}>
                    <Arrow
                        disabled={this.props.index === 0}
                        onClick={this.props.previous}
                        orientation={'Left'}
                    />
                </div>
                <div data-testid="ImageSlider-arrow" className={classes.arrow}>
                    <Arrow
                        disabled={this.props.index === this.props.length - 1}
                        onClick={this.props.next}
                        orientation={'Right'}
                    />
                </div>
            </div>
        )
    }
}

export const styles = () =>
    createStyles({
        button_wrapper: {
            zIndex: 99,
            pointerEvents: 'none',
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignSelf: 'center',
        },
        arrow: {
            pointerEvents: 'auto',
            margin: '20px',
            alignSelf: 'center',
        },
    })

export default AbstractButtonWrapper
