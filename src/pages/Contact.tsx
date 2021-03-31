import { createStyles, withStyles, WithStyles } from '@material-ui/styles';
import React from 'react';
import NavigationBar from '../NavigationBar';


interface ContactProps extends WithStyles<typeof styles> {
    value: string;
}

class Contact extends React.Component<ContactProps> {

    render() {
        const classes = this.props.classes;

        return (
            <main>
                <div>
                    {/* <NavigationBar selectedPage={"Contact"} /> */}
                </div>
                <div className={classes.container}>
                    Contact
                </div>
            </main>
        );
    }
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
    }
})


export default withStyles(styles)(Contact);