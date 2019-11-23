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
const ShoeBrand = ({ title }) => (
  <Card small className="mb-3">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <CardBody className="p-0">
      <ListGroup flush>
        <ListGroupItem className="px-3 pb-2">
          <FormCheckbox className="mb-1">
            Nike
          </FormCheckbox>
          <FormCheckbox className="mb-1">
            Bitis
          </FormCheckbox>
          <FormCheckbox className="mb-1">
            Louis Vuitton
          </FormCheckbox>
          <FormCheckbox className="mb-1">
            Adiddas
          </FormCheckbox>
          <FormCheckbox className="mb-1">
            Converse
          </FormCheckbox>
          <FormCheckbox className="mb-1">
            Vans
          </FormCheckbox>
          <FormCheckbox className="mb-1">
            Puma
          </FormCheckbox>
        </ListGroupItem>

        <ListGroupItem className="d-flex px-3">
          <InputGroup className="ml-auto">
            <FormInput placeholder="Thêm thương hiệu" />
            <InputGroupAddon type="append">
              <Button theme="white" className="px-2">
                <i className="material-icons">add</i>
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </ListGroupItem>


        <ListGroupItem className="d-flex px-3 border-0">
          <Button outline theme="accent" size="sm">
            <i className="material-icons">save</i> Lưu Lại
          </Button>
          <Button theme="accent" size="sm" className="ml-auto">
            <i className="material-icons">file_copy</i> Thêm 
          </Button>
        </ListGroupItem>
      </ListGroup>
    </CardBody>
  </Card>
);

ShoeBrand.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

ShoeBrand.defaultProps = {
  title: "Thương Hiệu"
};

export default ShoeBrand;

