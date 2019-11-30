import React,{Component} from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import {withRouter} from "react-router";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress
} from "shards-react";
import Tables from '../../views/Tables';
import {getUser} from "../../utils/mixins.js";
import "./ShoeImage.css";
class ShoeDetail extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentImage : "https://khogiaythethao.vn/wp-content/uploads/2019/02/adidas-prophere-trang-xam-sf-2.jpg",
      images: [
        "https://res.cloudinary.com/mec-group/image/upload/thqb05tbhvmtvbkeapot.jpg",
        "https://product.hstatic.net/1000029772/product/img_3057_master.png",
        "https://khogiaythethao.vn/wp-content/uploads/2019/02/adidas-prophere-trang-xam-sf-2.jpg"
      ],
    };
  }
  render(){
    return(
      <Card small className="mb-4 pt-3">
        <CardHeader className="border-bottom text-center">
          <h4 className="mb-0 titleImg">Ảnh</h4>
          <div className="mb-3 mx-auto mt-2">
            <img
              className="image1 main"
              src = {this.state.currentImage}
              alt="Shoe Image"
              width="110"
            />
            <div>
              {this.state.images.map(image => 
                <img src = {image} className="mli-1 mt-2"  style={{height : 50, width: 50}} onClick = {() => this.setState({currentImage: image})}/>
              )}
            </div>
          </div>
        </CardHeader>
      </Card>
    );
  }
}

export default withRouter(ShoeDetail);

