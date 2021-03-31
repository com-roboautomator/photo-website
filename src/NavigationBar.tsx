import { createStyles, WithStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Logo from "./images/Logo.png"
import Button from './pages/components/NavigationMenuButton'

interface NavigationBarProps extends WithStyles<typeof styles>, React.PropsWithChildren<RouteComponentProps<any, any, unknown>> {
    selectedPage?: "Home" | "About" | "Contact" | "Gallery"
}

class NavigationBar extends React.Component<NavigationBarProps, any> {
    render() {
        const classes = this.props.classes
        const location = this.props.location.pathname

        return (
            <div className={classes.container}>
                <div className={classes.logo}>
                    <img src={Logo} alt="" />
                </div>
                <div className={classes.items_container}>
                    <Button text="HOME" path="/" selected={(location === "/")} />
                    <Button text="GALLERY" path="/gallery" selected={(location === "/gallery")} />
                    <Button text="ABOUT" path="/about" selected={(location === "/about")} />
                    <Button text="CONTACT" path="/contact" selected={(location === "/contact")} />
                </div>
            </div>
        );
    }
}

const styles = () => createStyles({
    container: {
        zIndex: 99,
        position: 'relative',
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        boxShadow: '1px 2px 10px rgba(0, 0, 0, 0.6)',
        paddingRight: 80,
    },
    items_container: {
        display: 'flex',
        flexDirection: 'row',
    },

    logo: {
        paddingLeft: '70px',
    },
})

export default withStyles(styles)(NavigationBar)