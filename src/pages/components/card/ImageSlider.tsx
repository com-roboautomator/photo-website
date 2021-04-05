import { Button, createStyles, withStyles, WithStyles } from '@material-ui/core';
import React from 'react'
import { data } from '../card/TestData'
import CollectionCard from './CollectionCard';
import RightArrow from './Arrow';
import Arrow from './Arrow';
import { findByLabelText } from '@testing-library/react';

interface ImageSliderProps extends WithStyles<typeof styles> {
}

class ImageSlider extends React.Component<ImageSliderProps, any> {

    constructor(props: ImageSliderProps) {
        super(props)

        this.state = {
            selected: 0,
            properties: data,
            property: data[0]
        }
    }

    next = () => {
        const newIndex = this.state.property.index + 1;
        this.setState({
            property: data[newIndex],
            selected: newIndex
        })
    }

    previous = () => {
        const newIndex = this.state.property.index - 1;
        this.setState({
            property: data[newIndex],
            selected: newIndex
        })
    }

    render() {

        const classes = this.props.classes
        const { properties, property } = this.state

        return (
            <main>



                <div className={classes.container}>
                    <div className={classes.button_wrapper}>
                        <div className={classes.right_arrow}>
                            <Arrow disabled={property.index === 0} onClick={this.previous} orientation={"Left"} />
                        </div>
                        <div className={classes.left_arrow}>
                            <Arrow disabled={property.index === properties.length - 1} onClick={this.next} orientation={"Right"} />
                        </div>
                    </div>
                    <div className={classes.card_slider}>
                        <div className={classes.card_slider_wrapper} style={{

                            transform: `translateX(-${property.index * (100 / properties.length)}%)`
                        }}>

                            {
                                properties.map((property: { url: string; title: string; index: number }) => <CollectionCard coverSrc={property.url} title={property.title} selected={this.state.selected === property.index} />)
                            }
                        </div>
                    </div>
                </div>

            </main>

        );
    };

}

const styles = () => createStyles({


    container: {

        //border: '1px solid black',

        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        overflowX: 'hidden',


    },
    card_slider: {

        //border: '1px solid black',

        position: 'relative',
        maxWidth: '370px',
        width: '370px',
        height: '270px',

    },
    button_wrapper: {
        //border: '1px solid black',
        
        zIndex: 99,
        position: 'absolute',
        width: '100vw',
        paddingTop: '70px',
        paddingBottom: '70px',
        //margin: '20px',

        //height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignSelf: 'center',
        background: 'linear-gradient(to right, white, transparent 50%), linear-gradient(to left, white, transparent 50%)'


    },
    card_slider_wrapper: {

        //border: '1px solid black',

        display: 'flex',
        position: 'absolute',
        margin: '10px',
        transition: '300ms cubic-bezier(0.455, 0.03, 0.515, 0.955)',


    },

    left_arrow: {
        //flex: 1,
        // position: 'absolute',
        //alignSelf: '',
        // justifySelf: 'flex-start',
        // margin: '20px',
        //flex: 1,
        margin: '20px',


    },

    right_arrow: {
        //position: 'absolute',
        //flex: 1,
        margin: '20px',


        // margin: '20px',


    },

})

export default withStyles(styles)(ImageSlider)