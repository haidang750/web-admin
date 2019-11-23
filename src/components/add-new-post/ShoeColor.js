import React from "react";
import PropTypes from "prop-types";
import './AddImage.css';
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
  FormInput
} from "shards-react";
const ShoeColor = ({ title }) => (
  <Card small className="mb-3">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <CardBody className="p-0">
      <ListGroup flush>
        <ListGroupItem className="px-3 pb-2">
          <FormCheckbox className="mb-1">
            <span className="span-red"></span>
          </FormCheckbox>
          <FormCheckbox className="mb-1 mt-3">
            <span className="span-green"></span>
          </FormCheckbox>
          <FormCheckbox className="mb-1 mt-3">
            <span className="span-blue"></span>
          </FormCheckbox>
          <FormCheckbox className="mb-1 mt-3">
            <span className="span-yellow"></span>
          </FormCheckbox>
          <FormCheckbox className="mb-1 mt-3">
            <span className="span-black"></span>
          </FormCheckbox>
          <FormCheckbox className="mb-1 mt-3">
            <span className="span-pink"></span>
          </FormCheckbox>
        </ListGroupItem>
      </ListGroup>
    </CardBody>
  </Card>
);

ShoeColor.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

ShoeColor.defaultProps = {
  title: "Màu Sắc"
};

export default ShoeColor;
