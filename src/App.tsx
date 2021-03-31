import './App.css';
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import NavigationBar from './NavigationBar';


const ContextMenu = withRouter(props => <NavigationBar {...props} />)

class App extends React.Component {

  render() {
    return (
      <main>
        <div>
          <ContextMenu />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/gallery" component={Gallery} exact />
            <Route path="/about" component={About} exact />
            <Route path="/contact" component={Contact} exact />
            <Route path="/*" component={Error} />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;