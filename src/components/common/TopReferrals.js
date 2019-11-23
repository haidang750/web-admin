import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  CardFooter,
  Row,
  Col,
  FormSelect
} from "shards-react";

const TopReferrals = ({ title, referralData }) => (
  <Card small>
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
      <div className="block-handle" />
    </CardHeader>

    <CardBody className="p-0">
      <ListGroup small flush className="list-group-small">
        {referralData.map((item, idx) => (
          <ListGroupItem key={idx} className="d-flex px-3">
            <span className="text-semibold text-fiord-blue">{item.title}</span>
            <span className="ml-auto text-right text-semibold text-reagent-gray">
              {item.value}
            </span>
          </ListGroupItem>
        ))}
      </ListGroup>
    </CardBody>

    <CardFooter className="border-top">
      <Row>
        {/* Time Span */}
        <Col>
          <FormSelect
            size="sm"
            id="feTopReferral"
            style={{ maxWidth: "130px" }}
            onChange={() => {}}
          >
            <option>Tuần trước</option>
            <option>Hôm nay</option>
            <option>Tháng trước</option>
            <option>Năm trước</option>
          </FormSelect>
        </Col>

        {/* View Full Report */}
        <Col className="text-right view-report">
          {/* eslint-disable-next-line */}
          <a href="#">Xem thống kê đầy đủ &rarr;</a>
        </Col>
      </Row>
    </CardFooter>
  </Card>
);

TopReferrals.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The referral data.
   */
  referralData: PropTypes.array
};

TopReferrals.defaultProps = {
  title: "Top Khách Hàng",
  referralData: [
    {
      title: "Nguyễn Hải Đăng",
      value: "13.560.000đ"
    },
    {
      title: "Lê Cẩm",
      value: "11.470.000đ"
    },
    {
      title: "An Nguyễn",
      value: "10.692.000đ"
    },
    {
      title: "Duy Nguyễn",
      value: "8.127.000đ"
    },
    {
      title: "Ngô Hiền",
      value: "7.900.000đ"
    },
    {
      title: "Bảo Thịnh",
      value: "6.215.000đ"
    },
    {
      title: "Mạnh Khải",
      value: "4.400.400đ"
    },
    {
      title: "Văn Huy",
      value: "1.250.000đ"
    }
  ]
};

export default TopReferrals;
