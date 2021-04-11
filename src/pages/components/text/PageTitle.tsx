import { withStyles, WithStyles, createStyles } from '@material-ui/styles'
import React from 'react'

interface PageTitleProps extends WithStyles<typeof styles> {
    title: string
    src?: string
}

interface PageTitleState {
    loaded: boolean
}

class PageTitle extends React.Component<PageTitleProps, PageTitleState> {

    constructor(props: PageTitleProps) {
        super(props)
        this.state = {
            loaded: false
        }
    }


    render() {

        const classes = this.props.classes

        return (
            <div className={classes.container}>
                <img
                    onLoad={() => this.setState({ loaded: true })}
                    className={(this.state.loaded) ? classes.image_loaded : classes.image_loading}
                    src={this.props.src} alt="" />
                <div className={classes.title}>
                    {this.props.title}
                </div>
            </div>
        )
    }

}

const styles = () => createStyles({

    container: {
        display: 'flex',
        zindex: 0,
    },
    image_loaded: {
        width: '100%',
        height: '200px',
        opacity: '100',
        transition: 'opacity 3s',
    },
    image_loading: {
        width: '80%',
        height: '200px',
        opacity: '0',
    },
    title: {
        position: 'absolute',
        alignSelf: 'center',
        color: "white",
        fontFamily: "Open-Sans-Regular",
        fontSize: '35px',
        marginLeft: '150px',
        marginTop: '40px',
        paddingLeft: '10px',
        borderLeft: '5px solid #7baab5',
    },

})

export default withStyles(styles)(PageTitle)