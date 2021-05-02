import { createStyles, withStyles, WithStyles } from '@material-ui/core'
import React from 'react'

interface ImageViewerIndexProps extends WithStyles<typeof styles> {
    indexValue: number
    indexTotal: number
}

class ImageViewerIndex extends React.Component<ImageViewerIndexProps> {
    render() {
        const props = this.props
        const classes = this.props.classes
        return (
            <div className={classes.container}>
                {props.indexValue + 1 + " / " + props.indexTotal}
            </div>
        )
    }
}

const styles = () => createStyles({
    container: {
        marginTop: '10px',
        fontFamily: 'Open-Sans-Bold',

        alignSelf: 'center'
    }
})

export default withStyles(styles)(ImageViewerIndex)
