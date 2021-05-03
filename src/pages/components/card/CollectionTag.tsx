import {createStyles, WithStyles, withStyles} from '@material-ui/styles'
import React from 'react'

interface CollectionTagProps extends WithStyles<typeof styles> {
    title?: string
    colour?: string
}

class CollectionTag extends React.Component<CollectionTagProps> {
    render() {
        return (
            <div
                data-testid="tag-layout"
                className={this.props.classes.layout}
                style={{
                    background: this.props.colour
                        ? this.props.colour
                        : '#323232',
                }}>
                {this.props.title ? this.props.title : 'Default'}
            </div>
        )
    }
}

const styles = () =>
    createStyles({
        layout: {
            borderRadius: '7px',
            fontFamily: 'Open-Sans-Bold',
            fontSize: 14,
            padding: 5,
            textAlign: 'center',
            color: 'white',
        },
    })

export default withStyles(styles)(CollectionTag)
