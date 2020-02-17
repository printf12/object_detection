import React, { Component } from 'react';
import axios from 'axios';
import './Webcam.css';
import { Button } from 'carbon-components-react';
import CameraIcon from '../../assets/icons8-camera-100.png'
import NativeListener from 'react-native-listener';


class WebcamCapture extends Component {


 state = {
      result: []

    }


  handleUploadImage(e)  {

    const data = new FormData();
    data.append('file', this.uploadInput1.files[0]);
    data.append('graph', this.uploadInput2.files[0]);
    data.append('label', this.uploadInput3.files[0]);
    let result;
    axios.post('http://localhost:5000/upload', data)
        .then(response => {
              result= response.data
              this.setState({
                      result: result
                    })
               this.props.history.push({
               pathname: `/show`,
               state: { result}
             })
        });
      
        e.preventDefault();
        return false;

      }


    render (){
    return (

            <div className='Webcam bx--grid'>

                <div className='button-group-container'>
                    <div className='button-group bx--row'>


                       <input className="input-file inputfile "   id="inputFile" name ="file" ref={(ref) => { this.uploadInput1 = ref; }} type="file"   />
                       <label htmlFor="inputFile" ><i className="fa fa-upload"></i> <span>Choose an image&hellip;</span></label>

                       <input  className="input-file inputfile"   id="inputFile1" name ="graph"  ref={(ref) => { this.uploadInput2 = ref; }} type="file" />
                       <label  htmlFor="inputFile1" ><i className="fa fa-upload"></i> <span>Choose a graph&hellip;</span></label>

                       <input className="input-file inputfile"  id="inputFile2" name ="label" ref={(ref) => { this.uploadInput3 = ref; }} type="file" />
                       <label  htmlFor="inputFile2" ><i className="fa fa-upload"></i> <span>Choose a label&hellip;</span></label>
                     <NativeListener onClick={this.handleUploadImage.bind(this)}>
                        <Button
                            kind='danger'
                            className='logo-container camera-button'
                            >
                            <img  src={CameraIcon} alt="Camera Icon" className ="image" />
                        </Button>
                         </NativeListener>

                    </div>
                </div>

            </div>




    );
    }
}

export default WebcamCapture ;
