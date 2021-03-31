import { createStyles, withStyles, WithStyles } from '@material-ui/styles';
import React from 'react';
import NavigationBar from '../NavigationBar';
import banner from '../images/banner/About_Image_Banner.jpg'

interface AboutProps extends WithStyles<typeof styles> {
}

class About extends React.Component<AboutProps> {

    render() {
        const classes = this.props.classes
        return (

            <main>
                <div className={classes.container}>
                    {/* <div className={classes.navBar}>
                        <NavigationBar selectedPage={"About"} />
                    </div> */}
                    <div className={classes.banner}>
                        <img src={banner} alt="test" width="100%" height="270" />
                    </div>
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
    navBar: {
        position: 'relative',
        zIndex: 99,
    },
    banner: {
        position: 'relative',
        width: "100%",
        //backgroundColor: '#666666',
        zIndex: 0,
        //paddingTop: "5px",

    },
    description: {
        backgroundColor: '#999999'
    }
})

export default withStyles(styles)(About);