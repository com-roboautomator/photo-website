import { WithStyles, createStyles, withStyles } from '@material-ui/styles';
import React from 'react'
import GalleryCollectionCardItemsText from './GalleryCollectionCardItemsText';
import GalleryCollectionCardViewIcon from './GalleryCollectionCardViewIcon';

interface GalleryCollectionCardTextProps extends WithStyles<typeof styles> {
    text?: string
    tagTitle?: string
    colour?: string
    itemNumber?: number
}

class GalleryCollectionCard extends React.Component<GalleryCollectionCardTextProps> {

    render() {
        const classes = this.props.classes
        return (
            <div className={classes.container}>
                <div
                    className={classes.tag}
                    style={{ borderBottomColor: this.props.colour }}
                >
                    {this.props.tagTitle?.toUpperCase()}
                </div>
                <div
                    className={classes.text}
                >
                    {this.props.text}
                    <GalleryCollectionCardItemsText items={this.props.itemNumber}/>
                </div>
                <GalleryCollectionCardViewIcon />

            </div>
        )
    }
}

const styles = () => createStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        alignContent: 'center',
        width: '100%',
        height: '100%',
    },
    tag: {
        alignSelf: 'center',
        fontSize: '24px',
        borderBottomStyle: 'solid',
        borderBottomWidth: '5px',
        paddingBottom: '2px',
        marginTop: '5%',
        color: 'white',
        textShadow: '-1px 1px 3px rgba(0.8,0.8,0.8, 0.5)',
    },
    text: {
        textAlign: 'center',
        fontFamily: 'Open-Sans-ExtraBold',
        fontSize: '30px',
        color: 'white',
        marginTop: '15%',
        textShadow: '-1px 1px 3px rgba(0.8,0.8,0.8, 0.5)',
    }
})

export default withStyles(styles)(GalleryCollectionCard)