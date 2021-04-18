import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/contact/ContactPage'
import Error from './pages/Error'
import NavigationBar from './pages/components/navigation/NavigationBar'
import PageSignature from './pages/components/text/PageSignature'
import { createStyles, WithStyles, withStyles } from '@material-ui/styles'

interface AppProps extends WithStyles <typeof styles>{
    
}

class App extends React.Component <AppProps>{
    render() {
        const classes = this.props.classes
        return (
            <main className={classes.page_container}>
                <BrowserRouter>
                    <div className={classes.header}>
                        <Route render={(props) => <NavigationBar {...props} />} />
                    </div>
                    <div className={classes.content_wrap}>
                        <Switch>
                            <Route path="/" component={Home} exact />
                            <Route path="/gallery" component={Gallery} exact />
                            <Route
                                path="/gallery/image/:imageId"
                                render={(props) => <Gallery {...props} />}
                            />
                            <Route
                                path="/gallery/collection/:collectionId"
                                render={(props) => <Gallery {...props} />}
                            />
                            <Route path="/about" component={About} exact />
                            <Route path="/contact" component={Contact} exact />
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

const styles = () => createStyles({

    page_container:{
        position: 'relative',
        minHeight: '100vh',
    },
    header: {
    },
    content_wrap:{
        paddingBottom: '2.5rem'
    },
    footer: {
        position: 'absolute',
        width: '100%',
        bottom: '1.3rem',
    }

})

export default withStyles(styles) (App)
