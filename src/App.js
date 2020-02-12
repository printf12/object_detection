import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'
import WebcamCapture from './components/Webcam/Webcam'
import Show from './components/Webcam/show'


class App extends Component {


  render() {

    return (
      <Router>
      <div className='App bx--grid'>
        <Header/>
        </div>

          <div className="container">
          <Switch>
            <Route exact path="/show" component={Show} />
            <Route exact path="/upload" component={WebcamCapture} />
          </Switch>
        </div>
      </Router>


    );
  }
}


export default App;
