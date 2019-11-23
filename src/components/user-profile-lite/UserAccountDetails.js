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

class UserAccountDetails extends Component{
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
                      <label htmlFor="feFirstName">First Name</label>
                      <FormInput
                        id="feFirstName"
                        placeholder="First Name"
                        value = {this.state.first_name}
                        onChange={() => {}}
                      />
                    </Col>
                    <Col md="6" className="form-group">
                      <label htmlFor="feLastName">Last Name</label>
                      <FormInput
                        id="feLastName"
                        placeholder="Last Name"
                        value= {this.state.last_name}
                        onChange={() => {}}
                      />
                    </Col>
                  </Row>
                  <Row form>
                    <Col className="form-group">
                      <label htmlFor="feEmail">Email</label>
                      <FormInput
                        type="email"
                        id="feEmail"
                        placeholder="Email Address"
                        value= {this.state.email}
                        onChange={() => {}}
                        autoComplete="email"
                      />
                    </Col>
                    {/*<Col md="6" className="form-group">
                      <label htmlFor="fePassword">Password</label>
                      <FormInput
                        type="password"
                        id="fePassword"
                        placeholder="Password"
                        value="dang123"
                        onChange={() => {}}
                        autoComplete="current-password"
                      />
                    </Col>*/}
                  </Row>
                  <FormGroup>
                    <label htmlFor="feAddress">Phone</label>
                    <FormInput
                      id="feAddress"
                      placeholder={this.state.phone}
                      value="0935236262"
                      onChange={() => {}}
                    />
                  </FormGroup>
                  <Row form>
                    <Col md="6" className="form-group">
                      <label htmlFor="feCity">ID</label>
                      <FormInput
                        id="feCity"
                        placeholder=""
                        value={this.state.id}
                        onChange={() => {}}
                      />
                    </Col>
                    <Col md="4" className="form-group">
                      <label htmlFor="feInputState">Role</label>
                      <FormSelect id="feInputState" value={this.state.role}>
                        <option>User</option>
                        <option>Admin</option>
                      </FormSelect>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md="6" className="form-group">
                      <label htmlFor="feCity">CreatedAt</label>
                      <FormInput
                        placeholder=""
                        value={this.state.CreatedAt}
                        onChange={() => {}}
                      />
                    </Col>
                    <Col md="6" className="form-group">
                      <label htmlFor="feCity">UpdatedAt</label>
                      <FormInput
                        placeholder=""
                        value={this.state.UpdatedAt}
                        onChange={() => {}}
                      />
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
  
export default withRouter(UserAccountDetails);
