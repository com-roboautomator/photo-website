import {createStyles, withStyles} from '@material-ui/core'
import {
    AbstractImageSliderProps,
    AbstractImageSliderState,
} from './AbstractImageSlider'
import AbstractImageSlider from './AbstractImageSlider'
import {collection} from '../../../assets/data/ImageDataStructure'
import HomeImageSliderButtonWrapper from './HomeImageSliderButtonWrapper'
import HomeCollectionCard from '../card/HomeCollectionCard'

interface HomeImageSliderProps extends AbstractImageSliderProps {}
interface HomeImageSliderState extends AbstractImageSliderState {}

class ImageSlider extends AbstractImageSlider<
    HomeImageSliderProps,
    HomeImageSliderState
> {
    constructor(props: HomeImageSliderProps) {
        super(props)
        this.state = {
            selected: this.props.startingIndex ? this.props.startingIndex : 0,
            properties: this.props.data,
            property: this.props.data[
                this.props.startingIndex ? this.props.startingIndex : 0
            ],
        }
    }

    render() {
        const classes = this.props.classes
        const {properties, property} = this.state

        for (let x = 0; x < properties.length; x++) {
            properties[x].index = x
        }

        return (
            <main className={classes.container}>
                <div
                    data-testid="ImageSlider-Container"
                    className={classes.wrapper}>
                    <HomeImageSliderButtonWrapper
                        index={property.index}
                        length={properties.length}
                        next={this.next}
                        previous={this.previous}
                    />
                    <div
                        data-testid="ImageSlider-Card-Slider"
                        className={classes.card_slider}
                        style={{height: `${this.props.height}px`}}
                        onWheel={(e) => {
                            this.handleWheelMovement(e)
                        }}>
                        <div
                            className={classes.card_slider_wrapper}
                            style={{
                                transform: `translateX(-${
                                    (property.index * 100) / properties.length
                                }%)`,
                            }}>
                            {properties.map((property: collection) => (
                                <HomeCollectionCard
                                    key={property.id}
                                    collection={property}
                                    height={
                                        this.props.height
                                            ? this.props.height
                                            : 200
                                    }
                                    selected={
                                        this.state.selected === property.index
                                    }
                                />
                            ))}
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
            flexDirection: 'column',
            userSelect: 'none',
        },
        wrapper: {
            pointerEvents: 'auto',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            overflowX: 'hidden',
        },
        card_slider: {
            pointerEvents: 'auto',
            position: 'relative',
            maxWidth: '370px',
            width: '370px',
        },
        card_slider_wrapper: {
            pointerEvents: 'auto',
            display: 'flex',
            position: 'absolute',
            margin: '10px',
            transition: '300ms cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        },
    })

export default withStyles(styles)(ImageSlider)
