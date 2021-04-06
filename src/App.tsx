import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'
import NavigationBar from './pages/components/navigation/NavigationBar'

class App extends React.Component {
    render() {
        return (
            <main>
                <BrowserRouter>
                    <Route render={(props) => <NavigationBar {...props} />} />
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/gallery" component={Gallery} exact />
                        <Route
                            path="/gallery/image/:imageId"
                            render={(props) => <Gallery  {...props} />}
                        />
                        <Route
                            path="/gallery/collection/:collectionId"
                            render={(props) => <Gallery {...props} />}
                        />
                        <Route path="/about" component={About} exact />
                        <Route path="/contact" component={Contact} exact />
                        <Route path="/*" component={Error} />
                    </Switch>
                </BrowserRouter>
            </main>
        )
    }
}

export default App
