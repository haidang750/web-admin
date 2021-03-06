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
  }

  render(){
    const  {userProfile} = this.props;
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
                        value = {userProfile.first_name}
                        onChange={() => {}}
                      />
                    </Col>
                    <Col md="6" className="form-group">
                      <label htmlFor="feLastName">Last Name</label>
                      <FormInput
                        id="feLastName"
                        placeholder="Last Name"
                        value= {userProfile.last_name}
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
                        value= {userProfile.email}
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
                      placeholder="Phone"
                      value={userProfile.phone}
                      onChange={() => {}}
                    />
                  </FormGroup>
                  <Row form>
                    <Col md="6" className="form-group">
                      <label htmlFor="feCity">ID</label>
                      <FormInput
                        id="feCity"
                        placeholder="Id"
                        value={userProfile._id}
                        onChange={() => {}}
                      />
                    </Col>
                    <Col md="4" className="form-group">
                      <label htmlFor="feInputState">Role</label>
                      <FormSelect id="feInputState" value={userProfile.role}>
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
                        value={userProfile.createdAt}
                        onChange={() => {}}
                      />
                    </Col>
                    <Col md="6" className="form-group">
                      <label htmlFor="feCity">UpdatedAt</label>
                      <FormInput
                        placeholder=""
                        value={userProfile.updatedAt}
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
