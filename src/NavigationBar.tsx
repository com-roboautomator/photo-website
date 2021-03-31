import { Button, createStyles, WithStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Logo from "./images/Logo.png"

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
                    <div className={classes.wrapper}>
                        <div className={(location === "/") ? classes.line_selected : classes.line_unselected} >
                            <Button
                                className={(location === "/") ? classes.item_selected : classes.item_unselected}
                                href="/"
                            >
                                Home
                            </Button>
                        </div>
                    </div>
                    <div className={classes.wrapper}>
                        <div className={(location === "/gallery") ? classes.line_selected : classes.line_unselected}>
                            <Button
                                className={(location === "/gallery") ? classes.item_selected : classes.item_unselected}
                                href="/gallery"
                            >
                                Gallery
                            </Button>
                        </div>
                    </div>
                    <div className={classes.wrapper}>
                        <div className={(location === "/about") ? classes.line_selected : classes.line_unselected}>
                            <Button
                                className={(location === "/about") ? classes.item_selected : classes.item_unselected}
                                href="/about"
                            >
                                About
                            </Button>
                        </div>
                    </div>
                    <div className={classes.wrapper}>
                        <div className={(location === "/contact") ? classes.line_selected : classes.line_unselected}>
                            <Button
                                className={(location === "/contact") ? classes.item_selected : classes.item_unselected}
                                href="/contact"
                            >
                                Contact
                            </Button>
                        </div>
                    </div>
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
    item_selected: {
        fontSize: 16,
        fontfamily: "Open Sans",
        alignSelf: 'center',
        color: 'black',
    },
    item_unselected: {
        fontSize: 16,
        fontfamily: "Open Sans",
        alignSelf: 'center',
        color: 'gray',
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 16,
        paddingBottom: 8,
    },
    line_selected: {
        paddingBottom: 0,
        borderBottomStyle: 'solid',
        borderBottomWidth: 4,
        borderBottomColor: '#7baab5',
    },
    line_unselected: {
    }
})

export default withStyles(styles)(NavigationBar)