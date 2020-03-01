import React, { Component } from 'react';
import axios from 'axios';
import './Detection.css';
import { Button } from 'carbon-components-react';
import CameraIcon from '../assets/icons8-camera-100.png'
import NativeListener from 'react-native-listener';


class Detection extends Component {
  constructor(props) {
          super(props)
 this.state = {
    file: null,
    result: [],
    fileE:"",
    graphE:"",
    labelE:""

    }
    this.uploadSingleFile = this.uploadSingleFile.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this)

}

  handleUploadImage(e)  {
    e.preventDefault();
    e.stopPropagation();


    const data = new FormData();
    data.append('file', this.uploadInput1.files[0]);
    data.append('graph', this.uploadInput2.files[0]);
    data.append('label', this.uploadInput3.files[0]);
    let result;
    const re = /(?:\.([^.]+))?$/
    var arr =['png' ,'jpg','jpeg','PNG' ,'JPG','JPEG'];
    this.setState({
            fileE: "",
            graphE: "",
            labelE: ""
          })


    if(this.uploadInput1.files[0] == null){
      this.setState({
              fileE: "image empty"
            })
    } else{
      if(arr.indexOf(re.exec(this.uploadInput1.value)[1])  >> 1 ){
        this.setState({
                fileE: "image extesion"
              })

      }
    }
    if(this.uploadInput2.files[0] == null){
      this.setState({
              graphE: "graph empty"
            })
    }else {

        if(((re.exec(this.uploadInput2.value)[1]) !== 'pb') ){
          this.setState({
                  graphE: "graph extesion"
                })

        }

    }
    if(this.uploadInput3.files[0] == null){
      this.setState({
            labelE: "label empty"
            })
    }else {

        if(((re.exec(this.uploadInput3.value)[1]) !== 'pbtxt')){
          this.setState({
                  labelE: "label extesion"
                })

        }

    }


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



      }
      uploadSingleFile(e) {
         this.setState({
             file: URL.createObjectURL(e.target.files[0])
         })
     }


    render (){
      let imgPreview;
        if (this.state.file) {
            imgPreview = <img src={this.state.file} alt='' className="imga "   />;
        }
    return (


            <div className='container'>

                <div className='button-group-container'>
                    <div className='button-group bx--row'>


                       <input className="input-file inputfile "   id="inputFile" name ="file" ref={(ref) => { this.uploadInput1 = ref; }} type="file" onChange={this.uploadSingleFile}  />
                       <label htmlFor="inputFile" ><i className="fa fa-upload"></i> <span>Choose an image&hellip;</span></label>
                      <div style={{fontSize:12 , color:"red"}}>
                      {this.state.fileE}
                      </div>
                       <div className='button-group bx--row'>
                        {imgPreview }
                       </div>

                       <input  className="input-file inputfile"   id="inputFile1" name ="graph"  ref={(ref) => { this.uploadInput2 = ref; }} type="file" />
                       <label  htmlFor="inputFile1" ><i className="fa fa-upload"></i> <span>Choose a graph&hellip;</span></label>
                       <div style={{fontSize:12 , color:"red"}}>
                       {this.state.graphE}
                       </div>
                       <div className='button-group bx--row'>
                       </div>

                       <input className="input-file inputfile"  id="inputFile2" name ="label" ref={(ref) => { this.uploadInput3 = ref; }} type="file" />
                       <label  htmlFor="inputFile2" ><i className="fa fa-upload"></i> <span>Choose a label&hellip;</span></label>
                       <div style={{fontSize:12 , color:"red"}}>
                       {this.state.labelE}
                       </div>
                     <NativeListener onClick={this.handleUploadImage.bind(this)}>

                        <Button
                            kind='danger'
                            className='logo-container camera-button'
                            >
                            <img  src={CameraIcon} alt="Camera Icon" className ="image" style={{width: 100, height: 100 }}/>
                        </Button>
                         </NativeListener>



                    </div>
                </div>

            </div>




    );
    }
}

export default Detection ;
