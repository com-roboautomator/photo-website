import {withStyles, WithStyles, createStyles} from '@material-ui/styles'
import React from 'react'
import Signature from '../../../assets/images/logo-white.png'

interface PageTitleProps extends WithStyles<typeof styles> {
    title: string
    src?: string
    height?: number
    skipLoad?: boolean
    signature?: boolean
}

interface PageTitleState {
    loaded: boolean
}

class PageTitle extends React.Component<PageTitleProps, PageTitleState> {
    constructor(props: PageTitleProps) {
        super(props)
        this.state = {
            loaded: this.props.skipLoad ? true : false,
        }
    }

    render() {
        const classes = this.props.classes
        return (
            <div
                data-testid="PageTitle-Container"
                className={classes.container}>
                <img
                    data-testid="PageTitle-Image"
                    onLoad={() => this.setState({loaded: true})}
                    className={
                        this.state.loaded
                            ? classes.image_loaded
                            : classes.image_loading
                    }
                    style={{
                        height: this.props.height
                            ? `${this.props.height}vh`
                            : '20vh',
                    }}
                    src={this.props.src ?? ''}
                    alt=""
                />
                <div
                    data-testid="PageTitle-Text"
                    className={
                        this.state.loaded
                            ? classes.title_loaded
                            : classes.title_loading
                    }>
                    {this.props.title}
                </div>
                <div className={classes.signature}>
                    <img
                        data-testid="PageTitle-Signature"
                        src={this.props.signature ? Signature : ''}
                        alt=""></img>
                </div>
            </div>
        )
    }
}

const styles = () =>
    createStyles({
        container: {
            display: 'flex',
            zIndex: 0,
        },
        image_loaded: {
            width: '100%',
            height: '40vh',
            opacity: '100',
            objectFit: 'cover',
            transition: 'opacity ease-in 200ms, filter ease-in 600ms',
        },
        image_loading: {
            width: '100%',
            height: '40vh',
            opacity: '0',
            objectFit: 'cover',
            filter: 'blur(2px)',
        },
        title_loading: {
            position: 'absolute',
            alignSelf: 'center',
            color: 'white',
            fontFamily: 'Open-Sans-Regular',
            fontSize: '35px',
            marginLeft: '150px',
            marginTop: '40px',
            paddingLeft: '10px',
            borderLeft: '5px solid #7baab5',
            filter: 'blur(2px)',
            opacity: '0',
        },
        title_loaded: {
            position: 'absolute',
            alignSelf: 'center',
            fontFamily: 'Open-Sans-Regular',
            fontSize: '35px',
            color: 'white',
            marginLeft: '150px',
            marginTop: '40px',
            paddingLeft: '10px',
            borderLeft: '5px solid #7baab5',
            opacity: '100',
            transition: 'opacity ease-in 200ms, filter ease-in 200ms',
        },
        signature: {
            display: 'flex',

            width: '100%',
            paddingBottom: '10px',
            position: 'absolute',
            alignSelf: 'flex-end',

            justifyContent: 'center',
            alignContent: 'center',
        },
    })

export default withStyles(styles)(PageTitle)
