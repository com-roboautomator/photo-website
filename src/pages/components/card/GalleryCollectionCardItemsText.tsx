import {createStyles, WithStyles, withStyles} from '@material-ui/styles'
import React from 'react'

interface GalleryCollectionCardItemsTextProps
    extends WithStyles<typeof styles> {
    items?: number
}

class GalleryCollectionCardItemsText extends React.Component<GalleryCollectionCardItemsTextProps> {
    render() {
        const classes = this.props.classes
        const size: number =
            this.props.items !== undefined ? this.props.items : NaN
        return (
            <div
                data-testid="Gallery-Collection-Card-Items-Text"
                className={classes.container}>
                {size === 0 || isNaN(size) ? undefined : size}
                {isNaN(size) || size === 0
                    ? undefined
                    : size > 1
                    ? ' Items'
                    : ' Item'}
            </div>
        )
    }
}

const styles = () =>
    createStyles({
        container: {
            fontFamily: 'Open-Sans-Regular',
            fontSize: '24px',
            color: 'white',
        },
    })

export default withStyles(styles)(GalleryCollectionCardItemsText)
