import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Index from './components/layouts/Index';
import Lyrics from './components/tracks/Lyrics';
import {Provider} from './context';


class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Index} />
                  <Route path="/lyrics/tracks/:id" component={Lyrics}/>
                </Switch>
              </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
