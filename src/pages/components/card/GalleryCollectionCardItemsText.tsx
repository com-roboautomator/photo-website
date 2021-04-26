import { createStyles, WithStyles, withStyles } from '@material-ui/styles'
import React from 'react'

interface GalleryCollectionCardItemsTextProps extends WithStyles<typeof styles> {
    items?: number
}

class GalleryCollectioNCardItemsText extends React.Component<GalleryCollectionCardItemsTextProps> {

    render() {
        const classes = this.props.classes
        return (
            <div className={classes.container}>
                {this.props.items} {(this.props.items === undefined) ? "" : "Items"}
            </div>
        )
    }

}

const styles = () => createStyles({

    container: {
        fontFamily: 'Open-Sans-Regular',
        fontSize: '24px',
        color: 'white'
    }

})

export default withStyles(styles)(GalleryCollectioNCardItemsText)