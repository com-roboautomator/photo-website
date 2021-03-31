import { createStyles, WithStyles, withStyles } from "@material-ui/styles";
import React from "react";
import NavigationBar from "../NavigationBar";

interface HomeProps extends WithStyles<typeof styles> {
}

class Home extends React.Component<HomeProps>{


    render() {
        const classes = this.props.classes;

        return (
            <main>

                <div>
                {/* <NavigationBar selectedPage={"Home"} /> */}
                    <div className={classes.container}>
                        Home Page
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


export default withStyles(styles)(Home);