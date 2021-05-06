import {WithStyles} from '@material-ui/core'
import {createStyles, withStyles} from '@material-ui/styles'
import React from 'react'
import {RouteComponentProps} from 'react-router-dom'
import {natureImages} from '../assets/data/Images'
import {urbanImages} from '../assets/data/Images'
import GalleryImageSlider from './components/carousel/GalleryImageSlider'

interface GalleryProps
    extends WithStyles<typeof styles>,
        React.PropsWithChildren<RouteComponentProps<any, any, unknown>> {}

class Gallery extends React.Component<GalleryProps, any> {
    render() {
        return (
            <div data-testid="Gallery-Page">
                <GalleryImageSlider
                    height={460}
                    data={natureImages}
                    titleColour={'#47742c'}
                    title="Nature & Life"
                />
                <GalleryImageSlider
                    height={460}
                    data={urbanImages}
                    titleColour={'gray'}
                    title="CityScapes & Architecture"
                />
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

const styles = () => createStyles({})

export default withStyles(styles)(Gallery)
