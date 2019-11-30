import React,{Component} from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

class Editor extends Component {
	constructor(props){
		super(props);
	}
	onTitleChange(event) {
		this.props.onReceiveTitle(event.target.value);
	}
	render(){
		return(
		  <Card small className="mb-3">
		    <CardBody>
		      <Form className="add-new-post">
		        <FormInput size="lg" className="mb-3" placeholder="Tiêu đề sản phẩm..." onChange={this.onTitleChange}/>
		        <FormInput size="lg" className="mb-3" placeholder="Giá..." />
		        <ReactQuill className="add-new-post__editor mb-1" placeholder="Nội dung sản phẩm..." />
		      </Form>
		    </CardBody>
		  </Card>
		);
	}
}

export default Editor;
