import React from "react";
import './AddImage.css';
import { config } from '../../config'
import axios from 'axios'
class AddImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image : null,
      imagePreviewUrl :''
    };
  }

  _handleChange(e){
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  async _handleImageChange(e) {
    e.preventDefault();
    
    let reader = new FileReader();
    let files = e.target.files[0];
    console.log(files);
    console.log(reader, e.target.files);
    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result
      });
    }
     reader.readAsDataURL(files)

     const formData = new FormData();
    formData.append('shoeImages', files);
    const response = await axios.post('/shoes/images', formData)
    
    this.props.onReceiveImage(response);
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Vui lòng chọn hình ảnh sản phẩm</div>);
    }

    return (
      <div className="container-fluid">
        <div className="previewComponent">
          <form onSubmit={(e)=>this._handleSubmit(e)}>
            <input className="fileInput" 
              type="file" 
              onChange={(e)=>this._handleImageChange(e)} />
            {/*<button className="submitButton" 
              type="submit" 
              onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>*/}
          </form>
          <div className="imgPreview">
            {$imagePreview}
          </div>
        </div>
      </div>
    )
  }
}

export default AddImg;

