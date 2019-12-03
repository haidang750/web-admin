import React, {Component} from "react";
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
class ShoeSize extends Component{
  constructor(props) {
    super(props);
    this.state = {
      sizes : [],
      value : '',
    }
  }
  onHandleClick(id){
    this.props.onReceiveSize(id);
  }
  handleClick(){
    const { value } = this.state;
    axios.post('/sizes', {size : value});
  }
  render(){
    const {sizes} = this.state;

    return(
      <Card small className="mb-3">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{"Kích cỡ"}</h6>
        </CardHeader>
        <CardBody className="p-0">
          <ListGroup flush>
            <ListGroupItem className="px-3 pb-2">
              {sizes.map((item, index) => 
                (<FormCheckbox className="mb-1" value={item.size} key={index} onClick={()=>this.onHandleClick(item._id)}>{item.size}</FormCheckbox>)
              )}
            </ListGroupItem>
             <ListGroupItem className="d-flex px-3">
              <InputGroup className="ml-auto">
                <FormInput placeholder="Thêm size" onChange = {(event) => {this.setState({value : event.target.value})}}/>
                <InputGroupAddon type="append">
                  <Button theme="white" className="px-2" onClick={() =>this.handleClick()}>
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
    const sizes = await axios.get('/sizes');
    this.setState({sizes});
  }
}
  

export default ShoeSize;
