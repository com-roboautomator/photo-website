import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/home/HomePage'
import Gallery from './pages/gallery/GalleryPage'
import About from './pages/about/AboutPage'
import Contact from './pages/contact/ContactPage'
import Error from './pages/error/ErrorPage'
import NavigationBar from './pages/components/navigation/NavigationBar'
import PageSignature from './pages/components/text/PageSignature'
import {createStyles, WithStyles, withStyles} from '@material-ui/styles'
import Confirmation from './pages/contact/ConfirmationPage'
import ImageViewer from './pages/viewer/ImageViewer'

interface AppProps extends WithStyles<typeof styles> {}

class App extends React.Component<AppProps> {
    getWindowDimensions = () => {
        const {innerWidth: width, innerHeight: height} = window
        return {
            width,
            height,
        }
    }

    render() {
        document.title = 'Sara Doneux Photography'
        const classes = this.props.classes

        window.addEventListener('resize', () => {
            this.forceUpdate()
        })
        return (
            <main
                className={classes.page_container}
                style={{
                    width:
                        // this.getWindowDimensions().width < 1000
                        //     ? 1000
                        //     :
                        this.getWindowDimensions().width,
                }}>
                <BrowserRouter>
                    <div className={classes.header}>
                        <Route
                            render={(props) => <NavigationBar {...props} />}
                        />
                    </div>
                    <div className={classes.content_wrap}>
                        <Switch>
                            <Route path="/" component={Home} exact />
                            <Route path="/gallery" component={Gallery} exact />
                            <Route
                                path="/gallery/:collectionId"
                                render={(props) => <ImageViewer {...props} />}
                            />
                            <Route path="/about" component={About} exact />
                            <Route path="/contact" component={Contact} exact />
                            <Route
                                path="/contact/confirmation"
                                component={Confirmation}
                                exact
                            />
                            <Route path="/*" component={Error} />
                        </Switch>
                    </div>
                    <footer className={classes.footer}>
                        <Route component={PageSignature} exact />
                    </footer>
                </BrowserRouter>
            </main>
        )
    }
}

const styles = () =>
    createStyles({
        page_container: {
            position: 'relative',
            minHeight: '100vh',
            minWidth: '700px',
        },
        header: {},
        content_wrap: {
            paddingBottom: '2.5rem',
        },
        footer: {
            position: 'absolute',
            width: '100%',
            bottom: '1.3rem',
        },
    })

export default withStyles(styles)(App)
