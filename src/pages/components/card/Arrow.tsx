import {createStyles, withStyles, WithStyles} from '@material-ui/styles'
import React from 'react'

import ArrowEnabled from '../../../assets/images/icons/arrow-enabled.png'
import ArrowDisabled from '../../../assets/images/icons/arrow-disabled.png'
import {Button} from '@material-ui/core'

interface RightArrowProps extends WithStyles<typeof styles> {
    disabled: boolean
    onClick: () => void
    orientation: 'Right' | 'Left'
}

class RightArrow extends React.Component<RightArrowProps> {
    render() {
        const props = this.props
        return (
            <div>
                <Button onClick={props.disabled ? void 0 : props.onClick}>
                    <img
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

const styles = () => createStyles({})

export default withStyles(styles)(RightArrow)
