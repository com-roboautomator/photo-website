import { WithStyles } from '@material-ui/core';
import { createStyles, withStyles } from '@material-ui/styles';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface GalleryProps extends WithStyles<typeof styles>, React.PropsWithChildren<RouteComponentProps<any, any, unknown>> {}

class Gallery extends React.Component<GalleryProps>{

    render() {
        const classes = this.props.classes
        const {id} = this.props.match.params
        return (
            <main>
                <div>
                    <div className={classes.container}>
                        <div className={classes.description}>
                            GALLERY: {id}
                        </div>
                    </div>
                </div>

            </main>
        );
    };

}

const styles = () => createStyles({
    container: {
        zIndex: 0,
        position: 'relative',
    },

    description: {
        position: 'absolute',
        width: '100%',
        paddingTop: '5%',
        fontSize: 30,
        fontFamily: 'Open Sans',
        textAlign: 'center',
        alignContent: 'center',
        zIndex: 0,
    }
})


export default withStyles(styles)(Gallery);