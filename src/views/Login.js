import React, { Component } from "react";
import { TextField, Container, Button, IconButton } from "@material-ui/core";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

class Login extends Component {
  state = {
    isShowPassword: false,
    email: "admin@gmail.com",
    password: "123456",
  };
  height = 0;
  constructor(props) {
    super(props);
    this.height = window.document.height;
  }
 
  render() {
    return (
      <div className="container">
        <h3>Đăng nhập</h3>
        <Container>
          <TextField
            className="textFieldStyle"
            label="Email"
            margin="dense"
            variant="filled"
            value={this.state.email}
            onChange={event => this.setState({ email: event.target.value })}
          />
          <br />
          <TextField
            className="textFieldStyle"
            label="Mật khẩu"
            margin="dense"
            variant="filled"
            value={this.state.password}
            onChange={event => this.setState({ password: event.target.value })}
            type={this.state.isShowPassword ? "email" : "password"}
            color="white"
            InputProps={{
              endAdornment: (
                <IconButton
                  onClick={() => {
                    this.setState({
                      isShowPassword: !this.state.isShowPassword
                    });
                  }}
                >
                  <FontAwesomeIcon
                    icon={this.state.isShowPassword ? faEye : faEyeSlash}
                  />
                </IconButton>
              )
            }}
          />
          <br />
          <Button
            className="buttonStyle"
            onClick={this.handleLogin.bind(this)}
            style={{
              textTransform: "none",
              width: 500,
              marginTop: 50,
              background: "green",
              color: "white"
            }}
          >
            Đăng nhập
          </Button>
        </Container>
      </div>
    );
  }

  handleLogin() {
    if (this.state.email !== "" && this.state.password !== "") {
      var user = {
        email : this.state.email,
        password : this.state.password,
        role : 'admin'
      };
      axios
        .post(`https://webttcn.herokuapp.com/v1/auth`, user)
        .then(res => {
          // localStorage.setItem('userToken', res.data.token);
          // localStorage.setItem('user', res.data.user);
          window.location.replace('/blog-overview');
        }).catch((error)=> {
          console.log(error.response);
        });
    } else {
      alert("Enter your email or password");
    }
  }
}

export default Login;
