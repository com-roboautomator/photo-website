import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import React from 'react'
import '../../../assets/css/OpenSans-Light.ttf'
import imageIcon from '../../../assets/images/icons/collection-image-o.png'
import CollectionTag from './CollectionTag';

interface CollectionCardProps extends WithStyles<typeof styles> { 
    coverSrc: string
    title: string
    selected: boolean
}

class CollectionCard extends React.Component<CollectionCardProps> {

    render() {
        const classes = this.props.classes
        return (

            <main>
                <div className={(this.props.selected) ? classes.spacing_selected : classes.spacing_unselected}>
                    <div className={classes.container}>
                        <div className={classes.image_wrapper}>
                            <img className={classes.image} src={this.props.coverSrc} alt="" width='350' height='200' />
                        </div>
                        <div className={classes.text_wrapper}>
                            <img className={classes.icon} src={imageIcon} alt="" width={20} height={20} />
                            <p className={classes.text}>
                                {this.props.title}
                            </p>
                            <div className={classes.tag}>
                            <CollectionTag colour='#47742c' title='NATURE'/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        );
    };

}

const styles = () => createStyles({

    spacing_selected: {

        //border: '1px solid black',
        paddingLeft: '10px',
        paddingRight: '10px',
        WebkitTransition: 'opacity 0.7s',
        flex: 1,
        

    },
    spacing_unselected:{
        paddingLeft: '10px',
        paddingRight: '10px',
        flex: 1,
        opacity: '50%',

    },
    container: {

        //border: '1px solid black',

        width: 350,
        //height: 200,
        borderTopLeftRadius: '25px',
        borderTopRightRadius: '25px',
        borderBottomLeftRadius: '25px',
        borderBottomRightRadius: '25px',
        boxShadow: '1px 2px 10px rgba(0, 0, 0, 0.6)',


    },
    image: {
        borderTopLeftRadius: '25px',
        borderTopRightRadius: '25px',

    },
    image_wrapper: {

        //border: '1px solid black',

        position: 'relative',
        borderTopLeftRadius: '25px',
        borderTopRightRadius: '25px',
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
    },
    text_wrapper: {

        //border: '1px solid black',

        position: 'relative',
        zIndex: 99,
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        fontSize: 20,
        color: 'black',
        borderBottomLeftRadius: '25px',
        borderBottomRightRadius: '25px',
        borderTop: '1px solid gray',
        height: '45px',

    },
    icon: {
        paddingLeft: '20px',
        alignSelf: 'center',
    },
    text: {

        //border: '1px solid black',

        fontFamily: 'Open-Sans-Regular',
        fontStyle: 'normal',
        textAlign: 'left',
        position: 'relative',
        paddingLeft: '10px',
        width: '75%',
        alignSelf: 'center',
    },
    tag: {
        //border: '1px solid black',

        position: 'relative',
        paddingLeft: '10px',
        paddingRight: '20px',
        width: '25%',
        //height: '30px',
        alignSelf: 'center',
    }

});

export default withStyles(styles)(CollectionCard)