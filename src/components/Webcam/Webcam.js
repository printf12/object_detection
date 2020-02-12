import React, { Component } from 'react';
import axios from 'axios';
import './Webcam.css';
import { Button } from 'carbon-components-react';
import CameraIcon from '../../assets/icons8-camera-100.png'

class WebcamCapture extends Component {

  constructor(props) {
    super(props);

    this.state = {
      result: [],

    };
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }


  handleUploadImage = (e) => {

    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    e.preventDefault();
    const data = new FormData();
    data.append('file', this.uploadInput1.files[0]);
    data.append('graph', this.uploadInput2.files[0]);
    data.append('label', this.uploadInput3.files[0]);
    let result;
    axios.post('http://localhost:5000/upload', data)
        .then(response => {
              const result= response.data;
              this.setState({ result })
              this.props.history.push({
               pathname: `/show`,
               state: { result: result }
             })
        })



      };


    render (){

    return (

            <div className='Webcam bx--grid'>

                <div className='button-group-container'>
                    <div className='button-group bx--row'>
                    <div className="file-upload">

                       <input className="input-file inputfile inputfile-3"   id="inputFile" name ="file" ref={(ref) => { this.uploadInput1 = ref; }} type="file" />
                       <label htmlFor="inputFile" ><i className="fa fa-upload"></i> <span>Choose an image &hellip;</span></label>

                    </div>
                    <div className="file-upload">
                       <input  className="input-file inputfile inputfile-3"   id="inputFile1" name ="graph"  ref={(ref) => { this.uploadInput2 = ref; }} type="file" />
                       <label  htmlFor="inputFile1" ><i className="fa fa-upload"></i> <span>Choose a graph&hellip;</span></label>
                    </div>
                    <div className="file-upload">
                       <input className="input-file inputfile inputfile-3"  id="inputFile2" name ="label" ref={(ref) => { this.uploadInput3 = ref; }} type="file" />
                       <label  htmlFor="inputFile2" ><i className="fa fa-upload"></i> <span>Choose a label&hellip;</span></label>
                    </div>
                        <Button
                            kind='danger'
                            className='logo-container camera-button'
                            >
                            <img onClick={ this.handleUploadImage  } src={CameraIcon} alt="Camera Icon" className ="image" />
                        </Button>


                    </div>
                </div>

            </div>




    );
    }
}

export default WebcamCapture;
