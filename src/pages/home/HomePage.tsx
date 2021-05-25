import {createStyles, WithStyles, withStyles} from '@material-ui/styles'
import React from 'react'
import HomeImageSlider from '../components/carousel/HomeImageSlider'
import {home} from '../../assets/data/Images'
import PageTitle from '../components/text/PageTitle'
import {collection} from 'src/assets/data/ImageDataStructure'

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

    componentDidMount() {
        fetch('http://localhost:8080/collection', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((response) => {
                //console.log(response)
                this.setState({
                    data: response,
                })
                console.log(this.state.data)
                //return response
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
                        height={45}
                        signature={true}
                        src="https://picsum.photos/id/1040/1500/200"
                    />
                    {console.log(this.state.data)}
                    <div className={classes.wapper}>
                        <HomeImageSlider height={270} data={this.state.data} />
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
