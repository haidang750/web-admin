import React,{Component} from "react";
import { Container, Row, Col, Card, CardBody, Form, FormInput, FormTextarea, ListGroupItem, Button } from "shards-react";
import ReactQuill from "react-quill";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import ShoeBrand from "../components/add-new-post/ShoeBrand";
import SidebarCategories from "../components/add-new-post/SidebarCategories";
import ShoeSize from "../components/add-new-post/ShoeSize";
import ShoeColor from "../components/add-new-post/ShoeColor";
import AddImg from "../components/add-new-post/AddImg";
import axios from 'axios';
import './backgroundCSS.css'


class AddNewPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      size: [],
      category: '',
      images: '',
      color : [],
      name : '',
      price : 0,
      desc : '',
      kind : ""
    };
    this.onSetSize = this.onSetSize.bind(this);
    this.onSetColor = this.onSetColor.bind(this);
    this.onSetCate = this.onSetCate.bind(this);
    this.onSetKind = this.onSetKind.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
    this.onHandleClick = this.onHandleClick.bind(this);
    this.onSetImage = this.onSetImage.bind(this);
  }
  onSetSize(sizeId) {
    let sizes = [...this.state.size];
    const idx = this.state.size.findIndex((e) => e === sizeId);
    if(!~idx) sizes.push(sizeId);
    else sizes.splice(idx, 1);
    this.setState({size : sizes})
  }
  onSetColor(colorId) {
    let colors = [...this.state.color];
    const idx = this.state.color.findIndex((e) => e === colorId);
    if(!~idx) colors.push(colorId);
    else colors.splice(idx, 1);
    this.setState({color : colors});
  }
  onSetCate(cateId){
    this.setState({ category : cateId });
  }
  onSetKind(value){
    this.setState({ kind : value });
  }

  onTitleChange(event) {
    this.setState({name : event.target.value})
  }

  onPriceChange(event) {
    this.setState({price : event.target.value})
  }
  onDescChange(event) {
    this.setState({desc : event.target.value})
  }
  onSetImage(response) {
    this.setState({images : response[0]})
  }
  async onHandleClick() {
    const shoe = this.state;
    console.log(shoe);
    try {
      const data = await axios.post('/shoes', shoe);
      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Container fluid className="main-content-container px-4 pb-4 bg1">
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Thêm Sản Phẩm" className="text-sm-left" />
        </Row>
        <Row>
          <Col lg="6" md="12">
            <Card small className="mb-3">
              <CardBody>
                <Form className="add-new-post">
                  <FormInput size="lg" className="mb-3" placeholder="Tiêu đề sản phẩm..." onChange={this.onTitleChange}/>
                  <FormInput size="lg" className="mb-3" placeholder="Giá..." onChange={this.onPriceChange}/>
                  <FormTextarea size="lg" className="mb-3"  placeholder="Nội dung sản phẩm..." onChange={this.onDescChange}/>
                </Form>
              </CardBody>
            </Card>
             <AddImg onReceiveImage = {this.onSetImage}/>
          </Col>
          <Col lg="3" md="12">
            <ShoeSize sizes={this.state.sizes} onReceiveSize={this.onSetSize}/>
            <ShoeColor colors={this.state.colors} onReceiveColor={this.onSetColor}/>
          </Col>
          <Col lg="3" md="12">
            <SidebarCategories onReceiveKind={this.onSetKind}/>
            <ShoeBrand categories={this.state.categories} onReceiveCate={this.onSetCate}/>
          </Col>
        </Row>
        <ListGroupItem className="d-flex px-3 border-0">
          <Button theme="accent" size="sm" className="ml-auto" onClick={this.onHandleClick}>
            <i className="material-icons">file_copy</i> Thêm 
          </Button>
        </ListGroupItem>
      </Container>
    );
  }
}

export default AddNewPost;
