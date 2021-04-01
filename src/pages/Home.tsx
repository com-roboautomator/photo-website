import { createStyles, WithStyles, withStyles } from "@material-ui/styles";
import React from "react";

interface HomeProps extends WithStyles<typeof styles> {}

class Home extends React.Component<HomeProps>{

    render() {
        const classes = this.props.classes;
        return (
            <main>
                <div className={classes.container}>
                    <div className={classes.description}>
                        HOME PAGE
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

export default withStyles(styles)(Home);