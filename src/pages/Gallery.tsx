import { WithStyles } from '@material-ui/core';
import { createStyles, withStyles } from '@material-ui/styles';
import React from 'react';

interface GalleryProps extends WithStyles<typeof styles> {
}

class Gallery extends React.Component<GalleryProps>{

    render() {
        const classes = this.props.classes

        return (
            <main>
                <div>
                    <div className={classes.container}>
                        Gallery
                    </div>
                </div>

            </main>
        );
    };

}

const styles = () => createStyles({
    container: {
        left: 0,
        right: 0,
        top: 80,
        bottom: 0,
        position: "absolute",
        width: "100%",
        //backgroundColor: '#666666',
        textAlign: "center",
        padding: "70px",
        fontsize: 120,
    }
})


export default withStyles(styles)(Gallery);