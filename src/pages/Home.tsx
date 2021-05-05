import {createStyles, WithStyles, withStyles} from '@material-ui/styles'
import React from 'react'
import ImageSlider from './components/card/ImageSlider'
import {home} from '../assets/data/Images'
import PageTitle from './components/text/PageTitle'

interface HomeProps extends WithStyles<typeof styles> {}

class Home extends React.Component<HomeProps> {
    render() {
        const classes = this.props.classes
        return (
            <main>
                <div data-testid={'Home-Page'} className={classes.container}>
                    <PageTitle
                        title="HOME"
                        height={45}
                        src="https://picsum.photos/id/1040/1500/200"
                    />
                    <div className={classes.wapper}>
                        <ImageSlider height={270} mode="Home" data={home} />
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
        wapper: {
            marginLeft: '80px',
            marginRight: '80px',
            marginTop: '5vh',
        },
    })

export default withStyles(styles)(Home)
