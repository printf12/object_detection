import React, { Component  } from 'react';
import './Webcam.css';


class Show extends Component {

constructor(props) {
      super(props);
      this.state = {
        open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
      }
      togglePanel(e){
      this.setState({open: !this.state.open})
      }


  render (){

    return (
      <div className='Webcam bx--grid'>
      <div className='button-group-container'>
          <div className='button-group bx--row'>
             <img className="thumbnail zoom" src={this.props.location.state.result.filename1} alt="resu" style={{width: 500, height: 500}}/>
             <div>
        <div className="file-upload">
             <div onClick={(e)=>this.togglePanel(e)} className='header'>
             Evaluate </div>
             {this.state.open ? (
             <div className='content'>
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
        </div>


           </div>

      </div>

      </div>

    );
}}

export default Show
