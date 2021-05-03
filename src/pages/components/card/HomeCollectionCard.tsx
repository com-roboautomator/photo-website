import {createStyles, Link, withStyles, WithStyles} from '@material-ui/core'
import React from 'react'
import '../../../assets/css/OpenSans-Light.ttf'
import collection, {placeholder} from '../../../assets/data/ImageDataStructure'
import imageIcon from '../../../assets/images/icons/collection-image-o.png'
import CollectionTag from './HomeCollectionTag'

interface CollectionCardProps extends WithStyles<typeof styles> {
    key?: string
    collection: collection
    selected: boolean
    onClick?: () => void
}

class CollectionCard extends React.Component<CollectionCardProps> {
    render() {
        const classes = this.props.classes
        const url: string =
            this.props.collection.images === undefined
                ? placeholder.url
                : this.props.collection.images[
                      this.props.collection.titleImage ?? 0
                  ].url
        return (
            <main
                data-testid={`Collection-Card-${this.props.collection.title}`}>
                <div
                    data-testid="Collection-Card-Spacing"
                    className={
                        this.props.selected
                            ? classes.spacing_selected
                            : classes.spacing_unselected
                    }>
                    <div className={classes.container}>
                        <Link href={url} target="_blank">
                            <div className={classes.image_wrapper}>
                                <img
                                    data-testid="Collection-Card-Image"
                                    className={classes.image}
                                    src={url}
                                    alt=""
                                    width="350"
                                    height="200"
                                />
                            </div>
                        </Link>
                        <div
                            data-testid="Collection-Card-Text-Wrapper"
                            className={classes.text_wrapper}>
                            <img
                                data-testid="Collection-Card-Image-Icon"
                                className={classes.icon}
                                src={imageIcon}
                                alt=""
                                width={20}
                                height={20}
                            />
                            <p
                                data-testid="Collection-Card-Title"
                                className={classes.text}>
                                {this.props.collection.title}
                            </p>
                            <div className={classes.tag}>
                                <CollectionTag
                                    colour={this.props.collection.tagColour}
                                    title={this.props.collection.tagTitle}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
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
        spacing_unselected: {
            pointerEvents: 'auto',
            userSelect: 'none',
            flex: 1,
            WebkitTransition: 'opacity 0.7s, transform 0.4s, margin 0.4s',
            transform: 'scale(0.8)',
            opacity: '90%',
        },
        container: {
            width: 350,
            borderTopLeftRadius: '25px',
            borderTopRightRadius: '25px',
            borderBottomLeftRadius: '25px',
            borderBottomRightRadius: '25px',
            boxShadow: '1px 2px 10px rgba(0, 0, 0, 0.6)',
        },
    })

export default withStyles(styles)(CollectionCard)
