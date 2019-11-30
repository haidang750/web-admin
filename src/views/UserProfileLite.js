import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";
import { getUser } from "../utils/mixins.js";


import "./backgroundCSS.css";
class UserProfileLite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile : {}
    }
  }
  render() {
    return (
      <Container fluid className="main-content-container px-4 bg1">
        <Row noGutters className="page-header py-4">
          <PageTitle title="Thông Tin Tài Khoản" md="12" className="ml-sm-auto mr-sm-auto" />
        </Row>
        <Row>
          <Col lg="4">
            <UserDetails userProfile={this.state.profile} />
          </Col>
          <Col lg="8">
            <UserAccountDetails userProfile={this.state.profile} />
          </Col>
        </Row>
      </Container>
    );
  }
  componentDidMount() {
    const { location } = this.props.history;
    const arrs = location.pathname.split("/");
    const userId = arrs[arrs.length - 1];
    getUser(userId)
      .then(res => {
        this.setState({ profile : res });
      })
      .catch(error => console.log(error));
  }
}

export default UserProfileLite;
