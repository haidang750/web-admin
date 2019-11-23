import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import ShoeBrand from "../components/add-new-post/ShoeBrand";
import SidebarCategories from "../components/add-new-post/SidebarCategories";
import ShoeSize from "../components/add-new-post/ShoeSize";
import ShoeColor from "../components/add-new-post/ShoeColor";
import AddImg from "../components/add-new-post/AddImg";

const AddNewPost = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Thêm Sản Phẩm" className="text-sm-left" />
    </Row>

    <Row>
      <Col lg="6" md="12">
        <Editor />
         <AddImg />
      </Col>
      <Col lg="3" md="12">
        <ShoeSize />
        <ShoeColor />
      </Col>
      <Col lg="3" md="12">
        <SidebarCategories />
        <ShoeBrand />
      </Col>
    </Row>
  </Container>
);

export default AddNewPost;
