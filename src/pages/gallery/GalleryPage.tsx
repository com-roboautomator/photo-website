import {WithStyles} from '@material-ui/core'
import {createStyles, withStyles} from '@material-ui/styles'
import React from 'react'
import {RouteComponentProps} from 'react-router-dom'
import slider from 'src/assets/data/ImageDataStructure'
import {natureImages} from '../../assets/data/Images'
import {urbanImages} from '../../assets/data/Images'
import GalleryImageSlider from '../components/carousel/GalleryImageSlider'

interface GalleryProps
    extends WithStyles<typeof styles>,
        React.PropsWithChildren<RouteComponentProps<any, any, unknown>> {}

interface GalleryState {
    slider: slider[]
}

class Gallery extends React.Component<GalleryProps, GalleryState> {
    constructor(props: GalleryProps) {
        super(props)
        this.state = {
            slider: [],
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/slider', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    slider: response,
                })
                console.log(this.state.slider[0].collections)
            })
    }

    render() {
        if (this.state.slider.length === 0) {
            console.log('returning')
            return <div />
        }
        //console.log(`sliders: ${this.state.slider}`)

        var sliders = this.state.slider
        return (
            <div data-testid="Gallery-Page">
                {sliders.map((slider: slider) => (
                    <GalleryImageSlider
                        height={460}
                        data={slider.collections}
                        titleColour={slider.colour}
                        startingIndex={0}
                        title={slider.title}
                    />
                ))}

                {/* <GalleryImageSlider
                    height={460}
                    data={this.state.slider[0].collection}
                    titleColour={'#47742c'}
                    title="Nature & Life"
                /> */}
                {/* <GalleryImageSlider
                    height={460}
                    data={urbanImages}
                    titleColour={'gray'}
                    title="CityScapes & Architecture"
                /> */}
                {/* <p>
                    {imageId ? (
                        <ImageViewer source={imageId} />
                    ) : (
                        ''
                    )}
                    {collectionId
                        ? 'collection id: ' + collectionId
                        : ''}
                </p> */}
            </div>
        )
    }
}

const styles = () => createStyles({})

export default withStyles(styles)(Gallery)
