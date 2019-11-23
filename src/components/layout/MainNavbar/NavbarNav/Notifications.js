import React from "react";
import { NavItem, NavLink, Badge, Collapse, DropdownItem } from "shards-react";

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleNotifications = this.toggleNotifications.bind(this);
  }

  toggleNotifications() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <NavItem className="border-right dropdown notifications">
        <NavLink
          className="nav-link-icon text-center"
          onClick={this.toggleNotifications}
        >
          <div className="nav-link-icon__wrapper">
            <i className="material-icons">&#xE7F4;</i>
            <Badge pill theme="danger">
              2
            </Badge>
          </div>
        </NavLink>
        <Collapse
          open={this.state.visible}
          className="dropdown-menu dropdown-menu-small"
        >
          <DropdownItem>
            <div className="notification__icon-wrapper">
              <div className="notification__icon">
                <i className="material-icons">&#xE6E1;</i>
              </div>
            </div>
            <div className="notification__content">
              <span className="notification__category">Thống Kê</span>
              <p>
                Tổng doanh thu tháng này tăng{" "}
                <span className="text-danger text-semibold">20%</span> so với tháng trước. Tuyệt vời!
              </p>
            </div>
          </DropdownItem>
          <DropdownItem>
            <div className="notification__icon-wrapper">
              <div className="notification__icon">
                <i className="material-icons">&#xE8D1;</i>
              </div>
            </div>
            <div className="notification__content">
              <span className="notification__category">Bán Hàng</span>
              <p>
                Mẫu Giày{" "}
                <span className="text-success text-semibold">Bitis Hunter</span> vừa hết hàng. Nhanh chóng nhập thêm hàng về kho!
              </p>
            </div>
          </DropdownItem>
          <DropdownItem className="notification__all text-center">
            Xem tất cả thông báo
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}
