import { createStyles, Link, withStyles, WithStyles } from '@material-ui/core'
import React from 'react'
import '../../../assets/css/OpenSans-Light.ttf'
import GalleryCollectionCardText from './GalleryCollectionCardText'
import GalleryCollectionCardViewIcon from './GalleryCollectionCardViewIcon'

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
                                src={this.props.coverSrc}
                                alt=""
                                width="350"
                                height={this.props.height - 20}
                            />
                            <GalleryCollectionCardText text={this.props.title} tagTitle={this.props.tagTitle} colour={this.props.tagColour} />
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
            zIndex: 98,
            WebkitTransition: 'opacity 0.7s, transform 0.4s, margin 0.4s, fliter 0.5s',
            transform: 'scale(1)',
            opacity: '100%',
            flex: 1,
        },
        spacing_immediate_background: {
            pointerEvents: 'auto',
            userSelect: 'none',
            flex: 1,
            zIndex: 97,
            marginLeft: '-100px',
            marginRight: '-100px',
            WebkitTransition: 'opacity 0.7s, transform 0.4s, margin 0.4s, filter 0.5s',
            transform: 'scale(0.8)',
            opacity: '95%',
            filter: 'blur(1px)'
        },
        spacing_distant_background: {
            pointerEvents: 'auto',
            userSelect: 'none',
            zIndex: 96,
            flex: 1,
            marginLeft: '-100px',
            marginRight: '-100px',
            WebkitTransition: 'opacity 0.7s, transform 0.4s, margin 0.4s, filter 0.5s',
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
            WebkitTransition: 'opacity 0.4s, transform 0.4s, margin 0.4s',
            transform: 'scale(0.2)',
            opacity: '0%',
        },
        container: {
            boxShadow: '1px 2px 10px rgba(0, 0, 0, 0.6)',
        },
        image_wrapper: {
            display: 'flex',
        },
    })

export default withStyles(styles)(GalleryCollectionCard)