import { createStyles, withStyles, WithStyles } from '@material-ui/styles'
import React from 'react'
import PageTitle from './components/text/PageTitle'
import ProfileImage from './components/text/ProfileImage'
import { text } from '../assets/data/AboutPageText'

interface AboutProps extends WithStyles<typeof styles> { }

class About extends React.Component<AboutProps> {
    render() {
        const classes = this.props.classes
        return (
            <main>
                <PageTitle title="ABOUT" src="https://picsum.photos/id/10/1500/200" />
                <div
                    data-testid="About-Page"
                    className={classes.container}
                >
                    <div className={classes.wrapper}>
                        <div
                            className={classes.profile_image}
                        >
                            <ProfileImage />
                        </div>
                        <div
                            className={classes.text}
                        >
                            {text}
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

const styles = () =>
    createStyles({

        container: {

            display: 'flex',
            justifyContent: 'center',
        },
        wrapper: {

            display: 'flex',
            width: '70%',
            height: '50%',
            marginTop: '40px',
            marginBottom: '20px',
            padding: '10px',
        },
        profile_image: {
            marginRight: '70px',
        },
        text: {
            whiteSpace: 'pre-wrap',
            fontFamily: 'Open-Sans-Regular',
        },

    })

export default withStyles(styles)(About)
