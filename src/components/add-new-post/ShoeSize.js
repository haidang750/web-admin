import React from "react";
import PropTypes from "prop-types";
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

const ShoeSize = ({ title }) => (
  <Card small className="mb-3">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <CardBody className="p-0">
      <ListGroup flush>
        <ListGroupItem className="px-3 pb-2">
          <FormCheckbox className="mb-1" value="38">
            38
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="39">
            39
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="40">
            40
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="41">
            41
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="42">
            42
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="43">
            43
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="44">
            44
          </FormCheckbox>
        </ListGroupItem>
      </ListGroup>
    </CardBody>
  </Card>
);

ShoeSize.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

ShoeSize.defaultProps = {
  title: "Kích cỡ"
};

export default ShoeSize;
