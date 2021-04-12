import { createStyles, WithStyles, withStyles } from '@material-ui/styles'
import React from 'react'

interface PageSignatureProps extends WithStyles<typeof styles> {

}

class PageSignature extends React.Component<PageSignatureProps> {

    render() {
        const classes = this.props.classes
        return (
                <div className={classes.text}>
                    © 2021, All images on this site are the copyright of Sara Doneux and may not be reproduced without permission
                </div>
        )
    }

}

const styles = () => createStyles({

    text: {
        color: '#a0a0a0',
        textAlign: 'center',
        width: '100%',
        position: 'absolute',
        fontFamily: "Open-Sans-Regular",
        fontSize: '15px',
        bottom: 3
    },


})

export default withStyles(styles)(PageSignature)