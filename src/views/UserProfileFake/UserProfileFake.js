import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../../components/common/PageTitle";
import UserDetailFake from "./UserDetailFake";
import UserAccountDetailFake from "./UserAccountDetailFake";
import "../backgroundCSS.css";
const UserProfileFake = () => (
  <Container fluid className="main-content-container px-4 bg1">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Thông Tin Tài Khoản" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
      <Col lg="4">
        <UserDetailFake />
      </Col>
      <Col lg="8">
        <UserAccountDetailFake />
      </Col>
    </Row>
  </Container>
);

export default UserProfileFake;