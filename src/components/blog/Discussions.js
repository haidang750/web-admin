import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Row,
  Col
} from "shards-react";

const Discussions = ({ title, discussions }) => (
  <Card small className="blog-comments">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>

    <CardBody className="p-0">
      {discussions.map((discussion, idx) => (
        <div key={idx} className="blog-comments__item d-flex p-3">
          {/* Avatar */}
          <div className="blog-comments__avatar mr-3">
            <img src={discussion.author.image} alt={discussion.author.name} />
          </div>

          {/* Content */}
          <div className="blog-comments__content">
            {/* Content :: Title */}
            <div className="blog-comments__meta text-mutes">
              <a className="text-secondary" href={discussion.author.url}>
                {discussion.author.name}
              </a>{" "}
              phản hồi về sản phẩm{" "}
              <a className="text-secondary" href={discussion.post.url}>
                {discussion.post.title}
              </a>
              <span className="text-mutes">- {discussion.date}</span>
            </div>

            {/* Content :: Body */}
            <p className="m-0 my-1 mb-2 text-muted">{discussion.body}</p>

            {/* Content :: Actions */}
            <div className="blog-comments__actions">
              <ButtonGroup size="sm">
                <Button theme="white">
                  <span className="text-success">
                    <i className="material-icons">check</i>
                  </span>{" "}
                  Lưu lại
                </Button>
                <Button theme="white">
                  <span className="text-danger">
                    <i className="material-icons">clear</i>
                  </span>{" "}
                  Loại bỏ
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      ))}
    </CardBody>

    <CardFooter className="border-top">
      <Row>
        <Col className="text-center view-report">
          <Button theme="white" type="submit">
            Xem tất cả phản hồi
          </Button>
        </Col>
      </Row>
    </CardFooter>
  </Card>
);

Discussions.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The discussions dataset.
   */
  discussions: PropTypes.array
};

Discussions.defaultProps = {
  title: "Phản Hồi",
  discussions: [
    {
      id: 1,
      date: "3 ngày trước",
      author: {
        image: require("../../images/avatars/1.jpg"),
        name: "Lê Cẩm",
        url: "#"
      },
      post: {
        title: "Bitis Hunter",
        url: "#"
      },
      body: "Giày đẹp, đường chỉ may tuyệt vời, đáng đồng tiền bát gạo..."
    },
    {
      id: 2,
      date: "4 ngày trước",
      author: {
        image: require("../../images/avatars/2.jpg"),
        name: "An Nguyễn",
        url: "#"
      },
      post: {
        title: "Nike Prophere F1",
        url: "#"
      },
      body: "Giao hàng nhanh, chất lượng giày tốt, lần sau sẽ ủng hộ tiếp..."
    },
    {
      id: 3,
      date: "5 ngày trước",
      author: {
        image: require("../../images/avatars/3.jpg"),
        name: "Duy Nguyễn",
        url: "#"
      },
      post: {
        title: "Ultraboost SF1",
        url: "#"
      },
      body: "Hàng trong giống F2 chứ không đúng chất lượng của hàng SF1, thất vọng..."
    }
  ]
};

export default Discussions;
