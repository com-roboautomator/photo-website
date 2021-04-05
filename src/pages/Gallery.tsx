import { WithStyles } from '@material-ui/core'
import { createStyles, withStyles } from '@material-ui/styles'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import ImageSlider from './components/card/ImageSlider'

interface GalleryProps
    extends WithStyles<typeof styles>,
    React.PropsWithChildren<RouteComponentProps<any, any, unknown>> { }

class Gallery extends React.Component<GalleryProps, any> {

    render() {
        const classes = this.props.classes
        const { imageId } = this.props.match.params
        const { collectionId } = this.props.match.params

        return (
            <main>
                <div data-testid={"GALLERY PAGE"}>
                    <div className={classes.container}>
                        <div className={classes.description}>
                            <p className={classes.title}>
                                GALLERY
                            </p>
                            <p>
                                {imageId ? 'image id: ' + imageId : ''}{' '}
                                {collectionId
                                    ? 'collection id: ' + collectionId
                                    : ''}
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

const styles = () =>
    createStyles({
        container: {
            zIndex: 0,
        },

        description: {
            width: '100%',
            fontSize: 30,
            textAlign: 'center',
            alignContent: 'center',
            zIndex: 0,
            fontFamily: 'Open-Sans-Regular',
        },

        title: {
            fontFamily: 'Open-Sans-Regular',
            fontSize: 80,
        },

    })

export default withStyles(styles)(Gallery)
