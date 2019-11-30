import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";
import "./image.css";
export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2 image"
            src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t31.0-8/p720x720/478862_369691419817769_1539611747_o.jpg?_nc_cat=111&_nc_eui2=AeF-Cdx1cHQeq7ze0we_w65LLbGhxTKrj3IQsi_99z5KEcu242IX82UbD0zLPKQK08QvRYbUvIgpY5k8YKHTZxIXYXzLIqnv650zqRzG_XXIaQ&_nc_ohc=zeQPFr_CHrUAQnUTSrpntRTv4dk-8c5_yGvJuwnNhtbk6fHCOcdBwG_TQ&_nc_ht=scontent.fsgn2-4.fna&oh=acbfc8a64da85f9861b5190b1847d96e&oe=5E4AE86F"
            alt="User Avatar"
          />{" "}
          <span className="d-none d-md-inline-block">Hải Đăng</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          <DropdownItem tag={Link} to="admin-profile">
            <i className="material-icons">&#xE7FD;</i> Thông Tin Cá Nhân
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag={Link} className="text-danger" to="/login">
            <i className="material-icons text-danger">&#xE879;</i> Đăng Xuất
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}
