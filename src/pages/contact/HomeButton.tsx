import {Button} from '@material-ui/core'
import {WithStyles, createStyles, withStyles} from '@material-ui/styles'
import React from 'react'

interface HomeButtonProps extends WithStyles<typeof styles> {}

class HomeButton extends React.Component<HomeButtonProps> {
    render() {
        const classes = this.props.classes
        return (
            <div className={classes.container}>
                <Button
                    data-testid="Home-Button"
                    className={classes.button}
                    href="/"
                    variant="contained"
                    color="primary">
                    Home
                </Button>
            </div>
        )
    }
}

const styles = () =>
    createStyles({
        container: {
            paddingTop: '30px',
            display: 'flex',
            justifyContent: 'center',
        },
        button: {
            background: '#7baab5',
            paddingLeft: '65px',
            paddingRight: '65px',
            paddingTop: '10px',
            paddingBottom: '10px',
            fontFamily: 'Open-Sans-Bold',
            fontSize: 20,
            color: 'white',
        },
    })

export default withStyles(styles)(HomeButton)
