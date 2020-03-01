import React, { Component  } from 'react';
import './Detection.css';
import { NavLink } from 'react-router-dom'

class Show extends Component {


    state = {
        open: false,
        file:[]
      };



      togglePanel= (e) => {


      this.setState({open: !this.state.open})
    };


  render (){

    return (
      <div className='container'>
      <div className='button-group-container'>

              <div className='button-group bx--row'>
                  <img className="thumbnail zoom" src={require('../../../backend/uploads/'+ this.props.location.state.result.filename1)}alt="resu" style={{width: 500, height: 500}}/>
              </div>

              <div className='button-group '>
                   <div onClick={(e)=>this.togglePanel(e)} className='active'>
                      Evaluate
                   </div>


                   {this.state.open ? (
                   <div className='button-gr '>
                       <div className="file-upload">
                          {this.props.location.state.result.valid}
                       </div>
                       <div className="file-upload">
                          {this.props.location.state.result.problem}
                       </div>
                       <div className="file-upload">
                          {this.props.location.state.result.notsure}
                       </div>
                     </div>
                   ) : null}
              </div>

              <div className='button-group bx--row'>

                    <NavLink to="/" activeStyle={{ color: 'white' }} className="#">
                          try again
                    </NavLink>
              </div>
      </div>
      </div>

    );
}}

export default Show
