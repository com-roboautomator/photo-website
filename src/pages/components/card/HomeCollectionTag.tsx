import {createStyles, WithStyles, withStyles} from '@material-ui/styles'
import React from 'react'

interface HomeCollectionTagProps extends WithStyles<typeof styles> {
    title?: string
    colour?: string
}

class HomeCollectionTag extends React.Component<HomeCollectionTagProps> {
    render() {
        return (
            <div
                data-testid="tag-layout"
                style={{
                    background: this.props.colour
                        ? this.props.colour
                        : '#323232',
                    borderRadius: '7px',
                    fontFamily: 'Open-Sans-Bold',
                    fontSize: 14,
                    padding: 5,
                    textAlign: 'center',
                    color: 'white',
                }}>
                {this.props.title ? this.props.title : 'Default'}
            </div>
        )
    }
}

const styles = () => createStyles({})

export default withStyles(styles)(HomeCollectionTag)
