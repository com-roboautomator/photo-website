import { createStyles, WithStyles, withStyles } from '@material-ui/styles'
import React from 'react'
import ImageSlider from './components/card/ImageSlider'
import { data } from '../assets/data/TestData'

interface HomeProps extends WithStyles<typeof styles> { }

class Home extends React.Component<HomeProps> {
    render() {
        const classes = this.props.classes
        return (
            <main>
                <div data-testid={'HOME PAGE'} className={classes.container}>
                    <p className={classes.title}>HOME PAGE</p>
                    <div>
                        <ImageSlider data={data} />
                    </div>
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
        title: {
            alignText: 'center',
            fontFamily: 'Open-Sans-Regular',
            fontSize: 50,
        },
    })

export default withStyles(styles)(Home)
