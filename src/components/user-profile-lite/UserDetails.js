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
import { getUser } from "../../utils/mixins.js";
import { config } from '../../config.js';
const defaultImage = "https://scontent.fsgn2-4.fna.fbcdn.net/v/t31.0-8/p720x720/478862_369691419817769_1539611747_o.jpg?_nc_cat=111&_nc_eui2=AeF-Cdx1cHQeq7ze0we_w65LLbGhxTKrj3IQsi_99z5KEcu242IX82UbD0zLPKQK08QvRYbUvIgpY5k8YKHTZxIXYXzLIqnv650zqRzG_XXIaQ&_nc_ohc=zeQPFr_CHrUAQnUTSrpntRTv4dk-8c5_yGvJuwnNhtbk6fHCOcdBwG_TQ&_nc_ht=scontent.fsgn2-4.fna&oh=acbfc8a64da85f9861b5190b1847d96e&oe=5E4AE86F";

class UserDetails extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    const { userProfile } = this.props;
    console.log(`${config.url}/${userProfile.avatar}`);
    return(
      <Card small className="mb-4 pt-3">
        <CardHeader className="border-bottom text-center">
          <div className="mb-3 mx-auto">
            <img
              className="rounded-circle"
              src={(!!userProfile.avatar) ? `${config.url}/${userProfile.avatar}` : defaultImage}
              alt="UserAvatar"
              width="110"
            />
          </div>
          <h4 className="mb-0">{userProfile.last_name} {userProfile.first_name}</h4>
        </CardHeader>
      </Card>
    );
  }
}

export default withRouter(UserDetails);

