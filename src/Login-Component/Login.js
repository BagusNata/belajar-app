import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Nav-login"
import { isValid } from "shortid";

const initialState = {
  userid: "",
  password: "",
  useridError: "",
  passwordError: "",
};

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  validate = () => {
    let useridError = "";
    let passwordError = "";

    if (this.state.userid.length < 5) {
      useridError = "Invalid User id!";
    }
    if (this.state.password.length < 6 ) {
      passwordError = "Wrong password!";
    }

    if (useridError || passwordError) {
      this.setState({ useridError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="backgroundLogin" style={{paddingBottom:"10.5rem"}}>
        <div>
          <Navbar />
        </div>
        <div className="container addshoes">
          <div className="loginflex mt7">
            <div className="op100">
              <h3 className="tac mb2">USER LOGIN</h3>
              <form onSubmit={this.handleSubmit}>
                <div className="tal">
                  <label>User id :</label> <br />
                  <input
                    className="borderform"
                    name="userid"
                    value={this.state.userid}
                    onChange={this.handleChange}
                  />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.useridError}
                  </div>
                </div>

                <div className="tal">
                  <label>Password :</label> <br />
                  <input
                    className="borderform"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.passwordError}
                  </div>
                </div>

                <br />
                <button
                  type={!isValid ? "button" : "submit"}
                  className=" btn btn-success loginbtn btncolor ml35"
                >
                  <Link
                    to="/Home"
                    className="nav-link"
                    style={{ color: "white" }}
                  >
                    LOGIN
                  </Link>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;