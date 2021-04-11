import { createStyles, withStyles, WithStyles } from '@material-ui/styles'
import React from 'react'
import PageTitle from './components/text/PageTitle'

interface AboutProps extends WithStyles<typeof styles> { }

class About extends React.Component<AboutProps> {
    render() {
        return (
            <div data-testid="About-Page">
                <PageTitle title="ABOUT" src="https://picsum.photos/1500/200" />
            </div>
        )
    }
}

const styles = () =>
    createStyles({

    })

export default withStyles(styles)(About)
