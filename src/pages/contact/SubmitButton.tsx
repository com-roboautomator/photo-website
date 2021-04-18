import { Button } from '@material-ui/core'
import { WithStyles, createStyles, withStyles } from '@material-ui/styles'
import React from 'react'

interface SubmitButtonProps extends WithStyles<typeof styles> {
    onSubmit?: () => void
}

class SubmitButton extends React.Component<SubmitButtonProps> {

    render() {
        const classes = this.props.classes
        return (

            <div className={classes.container}>
                <Button
                    className={classes.button}
                    onClick={this.props.onSubmit}
                    variant="contained" color="primary"
                >
                    Submit
                </Button>
            </div>
        )
    }
}

const styles = () => createStyles({
    container: {
        paddingTop: '30px',
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        background: "#7baab5",
        paddingLeft: "65px",
        paddingRight: "65px",
        paddingTop: '10px',
        paddingBottom: '10px',
        fontFamily: 'Open-Sans-Bold',
        fontSize: 20,
        color: "white",
    },
})

export default withStyles(styles)(SubmitButton)