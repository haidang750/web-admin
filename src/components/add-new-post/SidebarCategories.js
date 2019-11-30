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

class SidebarCategories extends Component{
  onHandleClick(value){
    this.props.onReceiveKind(value);
  }
  render(){
    return(
      <Card small className="mb-3">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{"Giới tính"}</h6>
        </CardHeader>
        <CardBody className="p-0">
          <ListGroup flush>
            <ListGroupItem className="px-3 pb-2">
              <FormRadio className="mb-1" value="men" name="name1" onClick={()=>this.onHandleClick("men")}>
                Nam
              </FormRadio>
              <FormRadio className="mb-1" value="women" name="name1" onClick={()=>this.onHandleClick("women")}>
                Nữ
              </FormRadio>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>
    );
  }
}

export default SidebarCategories;
