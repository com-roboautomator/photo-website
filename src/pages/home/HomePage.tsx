import {createStyles, WithStyles, withStyles} from '@material-ui/styles'
import React from 'react'
import HomeImageSlider from '../components/carousel/HomeImageSlider'
import {home} from '../../assets/data/Images'
import PageTitle from '../components/text/PageTitle'

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
                        signature={true}
                        src="https://picsum.photos/id/1040/1500/200"
                    />
                    <div className={classes.wapper}>
                        <HomeImageSlider height={270} data={home} />
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
