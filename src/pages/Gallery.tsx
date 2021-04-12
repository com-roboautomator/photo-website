import { WithStyles } from '@material-ui/core'
import { createStyles, withStyles } from '@material-ui/styles'
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import PageTitle from './components/text/PageTitle'

interface GalleryProps
    extends WithStyles<typeof styles>,
    React.PropsWithChildren<RouteComponentProps<any, any, unknown>> { }

class Gallery extends React.Component<GalleryProps, any> {
    render() {

        return (
            <div data-testid="Gallery-Page">
                <PageTitle title="GALLERY" src="https://picsum.photos/id/103/1500/200" />
                {/* <p>
                    {imageId ? (
                        <ImageViewer source={imageId} />
                    ) : (
                        ''
                    )}
                    {collectionId
                        ? 'collection id: ' + collectionId
                        : ''}
                </p> */}
            </div>
        )
    }
}

const styles = () =>
    createStyles({
    })

export default withStyles(styles)(Gallery)
