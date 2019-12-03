import React,{Component} from "react";
import PropTypes from "prop-types";
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
  FormRadio,
  FormInput
} from "shards-react";
import axios from 'axios';

class ShoeBrand extends Component{
  constructor(props){
    super(props);
    this.state = {
      categories : [],
      value : '',

    }
  }
  onHandleClick(id){
    this.props.onReceiveCate(id);
  }
  handleClick() {
    const { value } = this.state;
    axios.post('/categories', {name : value});
  }
  render(){
    const {categories} = this.state;

    return(
      <Card small className="mb-3">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{"Thương Hiệu"}</h6>
        </CardHeader>
        <CardBody className="p-0">
          <ListGroup flush>
            <ListGroupItem className="px-3 pb-2">
              {
                categories.map((item, index)=>(
                  <FormRadio className="mb-1" key={index} value={item._id} name="name" onClick={()=>this.onHandleClick(item._id)}>{item.name}</FormRadio>
              ))
              }
            </ListGroupItem>

            <ListGroupItem className="d-flex px-3">
              <InputGroup className="ml-auto">
                <FormInput placeholder="Thêm thương hiệu" onChange={(event)=>this.setState({value: event.target.value })} />
                <InputGroupAddon type="append">
                  <Button theme="white" className="px-2" onClick={()=>this.handleClick()}>
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
    const categories = await axios.get('/categories');
    this.setState({categories});
  }
}
export default ShoeBrand;

