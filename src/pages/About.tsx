import { createStyles, withStyles, WithStyles } from '@material-ui/styles';
import React from 'react';

interface AboutProps extends WithStyles<typeof styles> {
}

class About extends React.Component<AboutProps> {

    render() {
        const classes = this.props.classes
        return (

            <main>
                <div className={classes.container}>
                    <div className={classes.description}>
                        About
                    </div>
                </div>
            </main>

        );
    }

}

const styles = () => createStyles({
    container: {
        zIndex: 0,
        position: 'relative',
        // left: 0,
        // right: 0,
        // top: 0,
        // bottom: 0,
        // position: "absolute",
        // width: "100%",
        // //backgroundColor: '#666666',
        // textAlign: "center",
        // //padding: "70px",
        // fontsize: 120,
    },

    description: {
        position: 'relative',
        zIndex: 0,
        backgroundColor: '#999999'
    }
})

export default withStyles(styles)(About);