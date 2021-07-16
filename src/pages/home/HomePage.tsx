import {createStyles, WithStyles, withStyles} from '@material-ui/styles'
import React from 'react'
import HomeImageSlider from '../components/carousel/HomeImageSlider'
import PageTitle from '../components/text/PageTitle'
import {collection} from 'src/assets/data/ImageDataStructure'
import {settings} from '../../assets/settings.json'

interface HomeProps extends WithStyles<typeof styles> {}

interface HomeState {
    data: collection[]
}

class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props)
        this.state = {
            data: [],
        }
    }

    getWindowDimensions = () => {
        const {innerWidth: width, innerHeight: height} = window
        return {
            width,
            height,
        }
    }

    componentDidMount() {
        console.log(settings.domain + settings.port + '/collection')
        fetch(settings.domain + settings.port + '/collection', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    data: response,
                })
                console.log(this.state.data)
            })
    }

    render() {
        const classes = this.props.classes

        if (this.state.data.length === 0) {
            console.log('returning')
            return <div />
        }
        return (
            <main>
                <div data-testid={'Home-Page'} className={classes.container}>
                    <PageTitle
                        title="HOME"
                        height={40}
                        signature={true}
                        src="https://doneux-website.s3.eu-west-2.amazonaws.com/fd1f733e-2cdf-46ec-b1eb-3e5e55a98a93.jpg"
                    />
                    {console.log(this.state.data)}
                    <div className={classes.wapper}>
                        <HomeImageSlider
                            height={
                                window.innerHeight / 5 < 400
                                    ? 300
                                    : window.innerHeight / 5
                            }
                            data={this.state.data}
                        />
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
            width: '100%',
        },
        wapper: {
            marginLeft: '80px',
            marginRight: '80px',
            marginTop: '5vh',
        },
    })

export default withStyles(styles)(Home)
