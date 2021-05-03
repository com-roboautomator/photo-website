import { createStyles, withStyles, WithStyles } from '@material-ui/styles'
import React from 'react'
import PageTitle from './components/text/PageTitle'

interface ContactProps extends WithStyles<typeof styles> { }

class Contact extends React.Component<ContactProps> {
    render() {

        return (
            <div data-testid="Contact-Page">
                <PageTitle title="CONTACT" src="https://picsum.photos/id/1058/1500/200" />
            </div>
        )
    }
}
const styles = () =>
    createStyles({

    })

export default withStyles(styles)(Contact)
