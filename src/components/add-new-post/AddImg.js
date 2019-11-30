import React from "react";
import './AddImage.css';
import { config } from '../../config'

class AddImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {files: '', imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.files);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let files = e.target.files[0];
    console.log(reader, e.target.files);
    reader.onloadend = () => {
      this.setState({
        files: files,
        imagePreviewUrl: reader.result
      });
    }
     reader.readAsDataURL(files)
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
              multiple
              onChange={(e)=>this._handleImageChange(e)} />
            <button className="submitButton" 
              type="submit" 
              onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
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

