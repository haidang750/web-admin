import React,{Component} from "react";
import PropTypes from "prop-types";
import './AddImage.css';
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  InputGroup,
  InputGroupAddon,
  FormCheckbox,
  FormInput
} from "shards-react";
import axios from 'axios';
import Picker from './Picker';
import './color.css'
class ShoeColor extends Component{
  constructor(props){
    super(props);
    this.state = {
      colors : []
    }
  }
  onHandleClick(id){
    this.props.onReceiveColor(id);
  }
  render(){
    const {colors} = this.state;
    return(
      <Card small className="mb-3">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{"Màu Sắc"}</h6>
        </CardHeader>
        <CardBody className="p-0">
          <ListGroup flush>
            <ListGroupItem className="px-3 pb-2">
              {
                colors.map((item, index) => ( 
                  <FormCheckbox className="mb-1 mt-3" key={index} onClick={()=>this.onHandleClick(item._id)}>
                    <span className="span-yellow" style={{backgroundColor : item.name , border : 'solid black 0.5px'}}></span>
                  </FormCheckbox>)
                )
              }
            </ListGroupItem>
             <ListGroupItem className="d-flex px-3">
              <InputGroup className="ml-auto">
                <FormInput placeholder="Thêm màu" />
                <InputGroupAddon type="append">
                  <Button theme="white" className="px-2">
                    <i className="material-icons">add</i>
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    );
  }
   async componentDidMount() {
    const colors = await axios.get('/colors');
    this.setState({colors});
  }
}

export default ShoeColor;
