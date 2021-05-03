import {createStyles, Link, withStyles, WithStyles} from '@material-ui/core'
import React from 'react'
import '../../../assets/css/OpenSans-Light.ttf'
import CollectionCardImage from './CollectionCardImage'
import CollectionCardText from './CollectionCardText'

interface CollectionCardProps extends WithStyles<typeof styles> {
    key?: string
    title: string
    tagTitle?: string
    tagColour?: string
    coverSrc: string
    selected: boolean
    onClick?: () => void
}

class CollectionCard extends React.Component<CollectionCardProps> {
    render() {
        const classes = this.props.classes
        return (
            <main data-testid={`Collection-Card-${this.props.title}`}>
                <div
                    data-testid="Collection-Card-Spacing"
                    className={
                        this.props.selected
                            ? classes.spacing_selected
                            : classes.spacing_unselected
                    }>
                    <div className={classes.container}>
                        <Link
                            href={this.props.coverSrc}
                            target="_blank"
                            underline="none">
                            <CollectionCardImage src={this.props.coverSrc} />
                            <CollectionCardText
                                title={this.props.title}
                                tagTitle={this.props.tagTitle}
                                tagColour={this.props.tagColour}
                            />
                        </Link>
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
