import {createStyles, WithStyles, withStyles} from '@material-ui/styles'
import React from 'react'
import {Link} from 'react-router-dom'
import LOGO from '../../images/Logo.png'

interface LogoProps extends WithStyles<typeof styles> {}

class NavigationMenuLogo extends React.Component<LogoProps> {
    render() {
        const classes = this.props.classes
        return (
            <div className={classes.logo}>
                <Link to="/">
                    <img src={LOGO} alt="" />
                </Link>
            </div>
        )
    }
}

const styles = () =>
    createStyles({
        logo: {
            paddingLeft: '70px',
        },
    })

export default withStyles(styles)(NavigationMenuLogo)
