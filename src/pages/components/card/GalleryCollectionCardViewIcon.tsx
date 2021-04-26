import { WithStyles, withStyles, createStyles } from '@material-ui/styles'
import React from 'react'
import imageIcon from '../../../assets/images/icons/collection-image-w.png'


interface GalleryCollectionCardViewIconProps extends WithStyles<typeof styles> {

}

class GalleryCollectionCardViewIcon extends React.Component<GalleryCollectionCardViewIconProps>{

    render() {
        const classes = this.props.classes
        return (
            <div className={classes.container}>
                <div className={classes.image}>
                    <img
                        src={imageIcon}
                        alt='none'
                        width='20'
                        height='20'
                    />
                </div>
                <div className={classes.text}>
                    VIEW
                </div>

            </div>
        )
    }

}

const styles = () => createStyles({
    container: {
        background: '#47742c',

        position: 'absolute',
        bottom: '10px',
        alignSelf: 'center',
        paddingTop: '5px',
        paddingBottom: '5px',
        paddingLeft: '10px',
        paddingRight: '10px',
        borderRadius: '1px',

        display: 'flex',
        flexDirection: 'row',
        flex: 1,

        boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.4)',
    },
    image: {
        paddingRight: '10px',
    },
    text: {
        position: 'relative',
        color: 'white',
        fontFamily: 'Open-Sans-Bold',
        justifySelf: 'center',
    }
})

export default withStyles(styles)(GalleryCollectionCardViewIcon)