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
        const classes = props.classes
        return (
            <div className={classes.container}> 
                <Button
                    data-testid={`Arrow-Button-${props.orientation}`}
                    disabled={props.disabled}
                    onClick={props.onClick}>
                    <img
                        data-testid="Arrow-Button-Image"
                        src={props.disabled ? ArrowDisabled : ArrowEnabled}
                        alt=""
                        width="40"
                        style={{
                            transform: `rotate(${
                                props.orientation === 'Left' ? 180 : 0
                            }deg)`,
                        }}
                    />
                </Button>
            </div>
        )
    }
}

const styles = () => createStyles({
    container:{
        zIndex: 99,
        alignSelf: 'center',
    }
})

export default withStyles(styles)(Arrow)
