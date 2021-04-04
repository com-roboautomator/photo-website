import { Button, createStyles, withStyles, WithStyles } from '@material-ui/core';
import React from 'react'
import { data } from '../card/TestData'
import CollectionCard from './CollectionCard';

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
               <div>
                    <Button
                        onClick={this.next}
                        disabled={property.index === properties.length - 1}
                    >
                        Next
                    </Button>
                    <Button
                        onClick={this.previous}
                        disabled={property.index === 0}
                    >
                        Previous
                    </Button>
                </div>
                <div className={classes.card_slider}>
                    <div className={classes.card_slider_wrapper} style={{
                        transform: `translateX(-${property.index*(100/properties.length)}%)`
                    }}>

                    {/* <CollectionCard coverSrc={property.url} title={property.title} /> */}

                        {
                            properties.map((property: { url: string; title: string; index: number }) => <CollectionCard coverSrc={property.url} title={property.title} selected={this.state.selected === property.index} />)
                        }
                    </div>
                </div>
            </main>

        );
    };


}

const styles = () => createStyles({

    card_slider: {

        //border: '1px solid black',

        position: 'relative',
        maxWidth: '390px',
        width: '390px',
        height: '270px',
 


        //justifyContent: 'flex-end',
        //left: '50%',
        //transform: 'translate(-125px, 0%)',
        //flexDirection: 'row',
        //width: '100%',
        //display: 'flex',
        //justifyContent: 'center',

    },

    card_slider_wrapper: {

        //border: '1px solid black',

        display: 'flex',
        position: 'absolute',
        margin: '10px',
        transition: '300ms cubic-bezier(0.455, 0.03, 0.515, 0.955)'

        // border: '1px solid black',

        // position: 'relative',
        // display: 'flex',
        // overflowX: 'hidden',
        // padding: '20px',
        // margin: '20px',


    }



})

export default withStyles(styles)(ImageSlider)