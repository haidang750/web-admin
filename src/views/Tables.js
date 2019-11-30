import React, {Component} from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import axios from 'axios';
import PageTitle from "../components/common/PageTitle";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";
import { getUsers } from "../utils/mixins.js";

class Tables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    }
  }
  componentDidMount() {
    getUsers()
      .then(res => {
        this.setState({ persons : res });
      })
      .catch(error => console.log(error));
  }
  render(){
    console.log(this.state.persons);
    return(
      <Container fluid className="main-content-container px-4 bg1">
          {/* Page Header */}
          <Row noGutters className="page-header py-4">
            <PageTitle sm="4" title="Danh Sách Khách Hàng" className="text-sm-left" />
          </Row>
          <Row>
            <Col>
              <Card small className="mb-4 overflow-hidden">
                <CardBody className="bg-dark p-0 pb-3">
                  <table className="table table-dark mb-0">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col" className="border-0">
                          ID
                        </th>
                        <th scope="col" className="border-0">
                          First Name
                        </th>
                        <th scope="col" className="border-0">
                          Last Name
                        </th>
                        <th scope="col" className="border-0">
                          Role
                        </th>
                        <th scope="col" className="border-0">
                          Email
                        </th>
                        <th scope="col" className="border-0">
                          Phone
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    { this.state.persons.map(person => 
                        <tr>
                          <td>{person._id}</td>
                          <td><Link to={`/user-profile-lite/${person._id}`}>{person.first_name}</Link></td>
                          <td><Link to={`/user-profile-lite/${person._id}`}>{person.last_name}</Link></td>
                          <td>{person.role}</td>
                          <td>{person.email}</td>
                          <td>{person.phone}</td>
                        </tr>
                      )
                    }
                    </tbody>
                  </table>
                </CardBody>
              </Card>
            </Col>
          </Row>
      </Container>
    );
  }
}
export default Tables;
