import React, { Component } from 'react';
import './Detection.css';
import Error from '../assets/404guy.png'
import { NavLink } from 'react-router-dom'



class App extends Component {


  render() {

    return (
      <div className='container'>

          <div className='button-group-container'>
            <div className='button-group bx--row'>
        <div className='button-group bx--row'>
        <img  src={Error} alt="Camera Icon" className ="image" />

        </div>

        <div className='button-group bx--row'>
        </div>
        <div className='button-group bx--row'>

              <NavLink to="/" activeStyle={{ color: 'white' }} className="#">
                   get me out of here
              </NavLink>
        </div>
    </div>
    </div>
  </div>

    );
  }
}


export default App;
