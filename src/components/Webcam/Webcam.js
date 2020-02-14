import React, { Component } from 'react';
import axios from 'axios';
import './Webcam.css';
import { Button } from 'carbon-components-react';
import CameraIcon from '../../assets/icons8-camera-100.png'

class WebcamCapture extends Component {


 state = {
      result: []

    }

  onChange(e) {

        e.stopPropagation()
        e.nativeEvent.stopImmediatePropagation()
        e.preventDefault()
    };
  handleUploadImage = (e) => {

    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
    e.preventDefault()
    const data = new FormData()
    data.append('file', this.uploadInput1.files[0])
    data.append('graph', this.uploadInput2.files[0])
    data.append('label', this.uploadInput3.files[0])
    const re = /(?:\.([^.]+))?$/

    if(this.uploadInput1.files[0] == null){
      alert('image empty')
    }
    if(this.uploadInput2.files[0] == null){
      alert('graph empty')
    }
    if(this.uploadInput3.files[0] == null){
      alert('label empty')
    }
    var arr =['png' ,'jpg','jpeg'];
    if(arr.indexOf(re.exec(this.uploadInput1.value)[1]) > 1){
      alert('image extesion ')

    }
    if(((re.exec(this.uploadInput2.value)[1]) !== 'pb') ){
      alert('graph extesion ')

    }
    if(((re.exec(this.uploadInput3.value)[1]) !== 'pbtxt') ){
      alert('label extesion ')

    }


    axios.post('http://localhost:5000/upload', data)
        .then(response => {
              const result= response.data
              this.setState({ result })
              this.props.history.push({
               pathname: `/show`,
               state: { result: result }
             })
        })

      return false

      };


    render (){

    return (

            <div className='Webcam bx--grid'>

                <div className='button-group-container'>
                    <div className='button-group bx--row'>
                    <form className="standard-form" onSubmit={(e) => e.preventDefault()}>

                    <div className="file-upload">

                       <input className="input-file inputfile inputfile-3"   id="inputFile" name ="file" ref={(ref) => { this.uploadInput1 = ref; }} type="file"   />
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
                            <img onClick={ this.handleUploadImage  } onChange={this.onChange} src={CameraIcon} alt="Camera Icon" className ="image" />
                        </Button>
</form>

                    </div>
                </div>

            </div>




    );
    }
}

export default WebcamCapture ;
