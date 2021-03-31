import { Button, createStyles, WithStyles, withStyles } from "@material-ui/core";
import React from "react";

interface NavigationMenuButtonProps extends WithStyles<typeof styles> {
    path: string
    selected: boolean
    text: string
}

class NavigationMenuButton extends React.Component<NavigationMenuButtonProps>{
    render() {
        const classes = this.props.classes
        return (
            <div className={classes.wrapper}>
                <div className={(this.props.selected) ? classes.line_selected : classes.line_unselected}>
                    <Button href={this.props.path} className={(this.props.selected) ? classes.item_selected : classes.item_unselected}>
                        {this.props.text}
                    </Button>
                </div>
            </div>
        );
    }
}

const styles = () => createStyles({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 16,
        paddingBottom: 8,
    },
    item_selected: {
        fontSize: 16,
        fontfamily: "Open Sans",
        alignSelf: 'center',
        color: 'black',
        fontWeight: "bold",
    },
    item_unselected: {
        fontSize: 16,
        fontfamily: "Open Sans",
        alignSelf: 'center',
        color: 'gray',
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

export default withStyles(styles)(NavigationMenuButton)
