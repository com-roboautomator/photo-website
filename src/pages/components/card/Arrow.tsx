import {createStyles, withStyles, WithStyles} from '@material-ui/styles'
import React from 'react'
import ArrowEnabled from '../../../assets/images/icons/arrow-enabled.png'
import ArrowDisabled from '../../../assets/images/icons/arrow-disabled.png'
import {Button} from '@material-ui/core'

interface ArrowProps extends WithStyles<typeof styles> {
    disabled: boolean
    onClick?: () => void
    orientation: 'Right' | 'Left'
}

class Arrow extends React.Component<ArrowProps> {
    render() {
        const props = this.props
        return (
            <div>
                <Button
                    data-testid={`Arrow-Button-${props.orientation}`}
                    disabled={props.disabled}
                    onClick={props.onClick}>
                    <img
                        data-testid="Arrow-Button-Image"
                        className={
                            props.orientation === 'Left'
                                ? props.classes.left
                                : props.classes.right
                        }
                        src={props.disabled ? ArrowDisabled : ArrowEnabled}
                        alt="nata"
                    />
                </Button>
            </div>
        )
    }
}

const styles = () =>
    createStyles({
        left: {
            width: '40px',
            transform: 'rotate(180deg)',
        },
        right: {
            width: '40px',
        },
    })

export default withStyles(styles)(Arrow)
