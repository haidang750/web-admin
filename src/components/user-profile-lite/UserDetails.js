import React,{Component} from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import {withRouter} from "react-router";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress
} from "shards-react";
import Tables from '../../views/Tables';
import {getUser} from "../../utils/mixins.js";

class UserDetails extends Component{
  constructor(props) {
    super(props);
    this.state = {
      first_name : "",
      last_name: "",
    }
  }
  componentDidMount() {
    const {location} = this.props.history;
    getUser()
      .then(res => {
        let arrs = location.pathname.split("/");
        let _idxUser = res.data.findIndex(item => item._id === arrs[arrs.length - 1]);
        if(_idxUser > -1) {
          this.setState({
            first_name : res.data[_idxUser].first_name,
            last_name : res.data[_idxUser].last_name,
          })
        }
      })
      .catch(error => console.log(error));
  }
  render(){
    return(
      <Card small className="mb-4 pt-3">
        <CardHeader className="border-bottom text-center">
          <div className="mb-3 mx-auto">
            <img
              className="rounded-circle"
              src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t31.0-8/p720x720/478862_369691419817769_1539611747_o.jpg?_nc_cat=111&_nc_eui2=AeF-Cdx1cHQeq7ze0we_w65LLbGhxTKrj3IQsi_99z5KEcu242IX82UbD0zLPKQK08QvRYbUvIgpY5k8YKHTZxIXYXzLIqnv650zqRzG_XXIaQ&_nc_ohc=zeQPFr_CHrUAQnUTSrpntRTv4dk-8c5_yGvJuwnNhtbk6fHCOcdBwG_TQ&_nc_ht=scontent.fsgn2-4.fna&oh=acbfc8a64da85f9861b5190b1847d96e&oe=5E4AE86F"
              alt="UserAvatar"
              width="110"
            />
          </div>
          <h4 className="mb-0">{this.state.last_name} {this.state.first_name}</h4>
        </CardHeader>
      </Card>
    );
  }
}

export default withRouter(UserDetails);

