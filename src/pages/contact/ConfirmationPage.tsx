import {createStyles, WithStyles, withStyles} from '@material-ui/styles'
import React from 'react'
import HomeButton from './HomeButton'

interface ConfirmationPageProps extends WithStyles<typeof style> {}

class ConfirmationPage extends React.Component<ConfirmationPageProps> {
    render() {
        const classes = this.props.classes
        return (
            <div
                data-testid="Confirmation-Page-Wrapper"
                className={classes.wrapper}>
                <p className={classes.text}>
                    <b>Thank you for your message</b> <br />I will be in contact
                    as soon as I can
                </p>
                <HomeButton />
            </div>
        )
    }
}

const style = () =>
    createStyles({
        wrapper: {
            textAlign: 'center',
            marginTop: '10%',
        },
        text: {
            fontFamily: 'Open-Sans-Regular',
            fontSize: '20px',
        },
    })

export default withStyles(style)(ConfirmationPage)
