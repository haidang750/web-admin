import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import ShoeDetail from "../components/shoe-infor/ShoeDetail";
import ShoeInforDetail from "../components/shoe-infor/ShoeInforDetail";
import "./backgroundCSS.css";
const ShoeInfor = () => (
  <Container fluid className="main-content-container px-4 bg1">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Thông Tin Giày" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
      <Col lg="4">
        <ShoeDetail />
      </Col>
      <Col lg="8">
        <ShoeInforDetail />
      </Col>
    </Row>
  </Container>
);

export default ShoeInfor;
