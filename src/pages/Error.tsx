import {createStyles, WithStyles, withStyles} from '@material-ui/styles'
import React from 'react'

interface ErrorProps extends WithStyles<typeof styles> {}

class Error extends React.Component<ErrorProps> {
    render() {
        const classes = this.props.classes
        return (
            <main>
                <div className={classes.container}>
                    <div className={classes.description}>404 - PAGE NOT FOUND</div>
                </div>
            </main>
        )
    }
}

const styles = () =>
    createStyles({
        container: {
            zIndex: 0,
            position: 'relative',
        },

        description: {
            position: 'absolute',
            width: '100%',
            paddingTop: '5%',
            fontSize: 30,
            fontFamily: 'Open Sans',
            textAlign: 'center',
            alignContent: 'center',
            zIndex: 0,
        },
    })

export default withStyles(styles)(Error)
