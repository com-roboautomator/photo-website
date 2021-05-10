import {createStyles, Link, withStyles, WithStyles} from '@material-ui/core'
import React from 'react'
import '../../../assets/css/OpenSans-Light.ttf'
import collection, {placeholder} from '../../../assets/data/ImageDataStructure'
import HomeCollectionCardImage from './HomeCollectionCardImage'
import HomeCollectionCardText from './HomeCollectionCardText'

interface CollectionCardProps extends WithStyles<typeof styles> {
    key?: string
    collection: collection
    height: number
    selected: boolean
}

class CollectionCard extends React.Component<CollectionCardProps> {
    render() {
        const classes = this.props.classes
        const collection = this.props.collection
        const hrefLink: string = `gallery/${this.props.collection.key}`
        const imageURL: string =
            this.props.collection.images === undefined
                ? placeholder.url
                : this.props.collection.images[
                      this.props.collection.titleImage ?? 0
                  ].url
        return (
            <div
                data-testid={`Home-Collection-Card-${this.props.collection.title}`}
                className={
                    this.props.selected
                        ? classes.spacing_selected
                        : classes.spacing_unselected
                }>
                <div
                    className={classes.container}
                    data-testid="Home-Collection-Card-Container">
                    <Link href={hrefLink} style={{textDecoration: 'none'}}>
                        <HomeCollectionCardImage
                            src={imageURL}
                            height={this.props.height - 70} // remove the text height from image value
                        />
                        <HomeCollectionCardText
                            title={collection.title}
                            tagTitle={collection.tagTitle}
                            tagColour={collection.tagColour}
                        />
                    </Link>
                </div>
            </div>
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
