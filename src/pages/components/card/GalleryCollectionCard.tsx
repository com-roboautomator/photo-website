import { createStyles, Link, withStyles, WithStyles } from '@material-ui/core'
import React from 'react'
import '../../../assets/css/OpenSans-Light.ttf'
import imageIcon from '../../../assets/images/icons/collection-image-o.png'
import CollectionTag from './CollectionTag'

interface GalleryCollectionCardProps extends WithStyles<typeof styles> {
    key?: string
    coverSrc: string
    title: string
    tagTitle?: string
    tagColour?: string
    selected: number
    height: number
    onClick?: () => void
}



class GalleryCollectionCard extends React.Component<GalleryCollectionCardProps> {
    render() {
        const classes = this.props.classes
        return (

            <div
                data-testid="Collection-Card-Spacing"
                className={
                    this.getLocationSpacing(this.props.selected)
                }
            >
                <div className={classes.container}>
                    <Link href={this.props.coverSrc} target="_blank">
                        <div className={classes.image_wrapper}>
                            <img
                                data-testid="Collection-Card-Image"
                                className={classes.image}
                                src={this.props.coverSrc}
                                alt=""
                                width="350"
                                height={this.props.height - 20}
                            />
                        </div>
                    </Link>
                </div>
            </div>
        )
    }

    getLocationSpacing(input: number) {

        switch (input) {
            case 0:
                return this.props.classes.spacing_selected
            case 1:
                return this.props.classes.spacing_immediate_background
            case -1:
                return this.props.classes.spacing_immediate_background
            case 2:
                return this.props.classes.spacing_distant_background
            case -2:
                return this.props.classes.spacing_distant_background
            default:
                return this.props.classes.spacing_not_rendered

        }

    }

}

const styles = () =>
    createStyles({
        spacing_selected: {
            pointerEvents: 'auto',
            userSelect: 'none',
            position: 'relative',
            zIndex: 99,
            WebkitTransition: 'opacity 0.7s, transform 0.4s, margin 0.4s',
            transform: 'scale(1)',
            opacity: '100%',
            flex: 1,
        },
        spacing_immediate_background: {
            pointerEvents: 'auto',
            userSelect: 'none',
            flex: 1,
            zIndex: 98,
            marginLeft: '-100px',
            marginRight: '-100px',
            WebkitTransition: 'opacity 0.7s, transform 0.4s, margin 0.4s',
            transform: 'scale(0.8)',
            opacity: '95%',
            filter: 'blur(1px)'
        },
        spacing_distant_background: {
            pointerEvents: 'auto',
            userSelect: 'none',
            zIndex: 97,
            flex: 1,
            marginLeft: '-100px',
            marginRight: '-100px',
            WebkitTransition: 'opacity 0.7s, transform 0.4s, margin 0.4s',
            transform: 'scale(0.5)',
            opacity: '60%',
            filter: 'blur(4px)'

        },
        spacing_not_rendered: {
            pointerEvents: 'auto',
            userSelect: 'none',
            flex: 1,
            marginLeft: '-100px',
            marginRight: '-100px',
            WebkitTransition: 'opacity 0.7s, transform 0.4s, margin 0.4s',
            transform: 'scale(0.2)',
            opacity: '0%',
        },
        container: {
            //width: 350,
            //borderTopLeftRadius: '25px',
            //borderTopRightRadius: '25px',
            //borderBottomLeftRadius: '25px',
            //borderBottomRightRadius: '25px',
            boxShadow: '1px 2px 10px rgba(0, 0, 0, 0.6)',
        },
        image: {
            //borderTopLeftRadius: '25px',
            //borderTopRightRadius: '25px',
        },
        image_wrapper: {
            position: 'relative',
            borderTopLeftRadius: '25px',
            borderTopRightRadius: '25px',
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
        },
        text_wrapper: {
            position: 'relative',
            zIndex: 99,
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            fontSize: '100%',
            color: 'black',
            //borderBottomLeftRadius: '25px',
            //borderBottomRightRadius: '25px',
            borderTop: '1px solid gray',
            height: '45px',
        },
        icon: {
            paddingLeft: '20px',
            alignSelf: 'center',
        },
        text: {
            fontFamily: 'Open-Sans-Regular',
            fontStyle: 'normal',
            textAlign: 'left',
            position: 'relative',
            paddingLeft: '10px',
            width: '75%',
            alignSelf: 'center',
        },
        tag: {
            position: 'relative',
            paddingLeft: '10px',
            paddingRight: '20px',
            width: '25%',
            alignSelf: 'center',
        },
    })

export default withStyles(styles)(GalleryCollectionCard)
