import React,{Component} from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import {withRouter} from "react-router";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";
import Tables from '../../views/Tables';
import {getUser} from "../../utils/mixins.js";

class ShoeInforDetail extends Component{
  constructor(props) {
    super(props);
    this.state = {
      first_name : "",
      last_name: "",
      email: "",
      phone: "",
      id: "",
      role: "",
      CreatedAt: "",
      UpdatedAt: "",
    }
  }


  componentDidMount() {
    const {location} = this.props.history;
    getUser()
      .then(res => {
        let arrs = location.pathname.split("/");
        let _idxUser = res.data.findIndex(item => item._id === arrs[arrs.length - 1]);
        if(_idxUser > -1) {
          this.setState({
            first_name : res.data[_idxUser].first_name,
            last_name : res.data[_idxUser].last_name,
            email : res.data[_idxUser].email,
            phone : res.data[_idxUser].phone,
            id : res.data[_idxUser]._id,
            role : res.data[_idxUser].role,
            CreatedAt : res.data[_idxUser].createdAt,
            UpdatedAt : res.data[_idxUser].updatedAt,
          })
        }
      })
      .catch(error => console.log(error));
  }



  render(){
    return(
      <Card small className="mb-4">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Thông Tin Chi Tiết</h6>
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <Row>
              <Col>
                <Form>
                  <Row form>
                    <Col md="6" className="form-group">
                      <label htmlFor="feFirstName">Name</label>
                      <FormInput
                        id="feFirstName"
                        placeholder="Name"
                        value = "Balenciaga Triple S"
                        onChange={() => {}}
                      />
                    </Col>
                    <Col md="6" className="form-group">
                      <label htmlFor="feInputState">Category</label>
                      <FormSelect id="feInputState" value="Sneaker" >
                        <option>Sneaker</option>
                        <option>Sandal</option>
                        <option>Giày lười</option>
                        <option>Giày công sở</option>
                        <option>Giày bốt</option>
                        <option>Dép</option>
                        <option>Khác</option>
                      </FormSelect>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md="6" className="form-group">
                      <label htmlFor="feCity">Price</label>
                      <FormInput
                        id="feCity"
                        placeholder="Price"
                        value="2.050.000đ"
                        onChange={() => {}}
                      />
                    </Col>
                    <Col md="6" className="form-group">
                      <label htmlFor="feInputState">Size</label>
                      <FormSelect id="feInputState" value="32" >
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>
                        <option>32</option>
                        <option>33</option>
                        <option>34</option>
                      </FormSelect>
                    </Col>
                  </Row>
                  
                  <Row form>
                    <Col md="6" className="form-group">
                      <label htmlFor="feCity">ID</label>
                      <FormInput
                        id="feCity"
                        placeholder="Id"
                        value="5dda47ec319141219bb7033b"
                        onChange={() => {}}
                      />
                    </Col>
                    <Col md="4" className="form-group">
                      <label htmlFor="feInputState">Kind</label>
                      <FormSelect id="feInputState" value="Men" >
                        <option>All</option>
                        <option>Men</option>
                        <option>Women</option>
                      </FormSelect>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md="6" className="form-group">
                      <label htmlFor="feCity">CreatedAt</label>
                      <FormInput
                        placeholder=""
                        value="2019-11-24T09:05:48.377Z"
                        onChange={() => {}}
                      />
                    </Col>
                    <Col md="6" className="form-group">
                      <label htmlFor="feCity">UpdatedAt</label>
                      <FormInput
                        placeholder=""
                        value="2019-11-24T09:05:48.377Z"
                        onChange={() => {}}
                      />
                    </Col>
                    <Col md="12" className="form-group">
                      <label htmlFor="feCity">Description</label>
                      <textarea id="input" className="form-control" rows="3" required="required">This is Shoe of Super man. The man help all the world</textarea>
                    </Col>
                    <Col className="float-left">
                      <button type="button" class="btn btn-primary">Cập Nhật Thông Tin</button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}
  
export default withRouter(ShoeInforDetail);
