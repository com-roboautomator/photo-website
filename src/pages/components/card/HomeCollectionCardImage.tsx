import {createStyles, withStyles, WithStyles} from '@material-ui/styles'
import React from 'react'

interface CollectionCardImageProps extends WithStyles<typeof styles> {
    src: string
    height?: number
}

class CollectionCardImage extends React.Component<CollectionCardImageProps> {
    render() {
        const props = this.props
        const classes = this.props.classes
        return (
            <img
                data-testid="Collection-Card-Image"
                className={classes.layout}
                src={props.src}
                alt=""
                width="350"
                height={this.props.height ?? 200}
            />
        )
    }
}

const styles = () =>
    createStyles({
        layout: {
            position: 'relative',
            borderTopLeftRadius: '25px',
            borderTopRightRadius: '25px',
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
        },
    })

export default withStyles(styles)(CollectionCardImage)
