import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Detection from './components/Detection'
import Show from './components/show'
import Error404 from './components/Error404'


class App extends Component {


  render() {

    return (
      <Router>
      <div className='App bx--grid'>
        </div>

          <div className="container">
          <Switch>
            <Route exact path="/" component={Detection} />
            <Route exact path="/show" component={Show} />
            <Route exact path="/*" component={Error404} />

            </Switch>
        </div>
      </Router>


    );
  }
}


export default App;
