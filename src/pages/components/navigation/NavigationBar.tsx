import {createStyles, WithStyles} from '@material-ui/core'
import {withStyles} from '@material-ui/styles'
import React from 'react'
import {RouteComponentProps} from 'react-router-dom'
import Button from './NavigationMenuButton'
import Logo from './NavigationMenuLogo'

interface NavigationBarProps
    extends WithStyles<typeof styles>,
        React.PropsWithChildren<RouteComponentProps<any, any, unknown>> {}

class NavigationBar extends React.Component<NavigationBarProps, any> {
    render() {
        const classes = this.props.classes
        const location = this.props.location.pathname

        return (
            <div className={classes.container} data-testid={'NavigationBar'}>
                <Logo />
                <div className={classes.items_container}>
                    <Button text="HOME" path="/" selected={location === '/'} />
                    <Button
                        text="GALLERY"
                        path="/gallery"
                        selected={location.includes('/gallery')}
                    />
                    <Button
                        text="ABOUT"
                        path="/about"
                        selected={location === '/about'}
                    />
                    <Button
                        text="CONTACT"
                        path="/contact"
                        selected={
                            location === '/contact' ||
                            location === '/contact/confirmation'
                        }
                    />
                </div>
            </div>
        )
    }
}

const styles = () =>
    createStyles({
        container: {
            zIndex: 99,
            //position: 'relative',
            display: 'flex',
            flex: 1,
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'space-between',
            boxShadow: '1px 2px 10px rgba(0, 0, 0, 0.9)',
            paddingRight: 80,
        },
        items_container: {
            display: 'flex',
            flexDirection: 'row',
        },
    })

export default withStyles(styles)(NavigationBar)
