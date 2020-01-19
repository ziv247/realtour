import React, { Component } from "react";
import "./loginStyle.css";
import FormRegister from "./registerForm";
import FormLogin from "./loginForm";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleRegister: false
    };
  }

  onToggleRegister = e => {
    this.setState({ toggleRegister: !this.state.toggleRegister });
  };

  render() {
    const { toggleRegister } = this.state;
    return (
      <div>
        <div className="loginMainContainer">
          <button
            type="button"
            id="closeIcon"
            className="closeBtn"
            onClick={this.props.onToggleLogin}
          >
            <span aria-hidden="true">
              <i className="fas fa-times" />
            </span>
          </button>
          <div>
            <div data-testid="login" className="sc-fzXfLR bAzGHq d-flex">
              <div className="sc-fzXfMA kyBnvO">
                {toggleRegister ? <FormRegister /> : <FormLogin />}
              </div>
              <div className="sc-fzXfLU bAzGHt">
                <div className="sc-fzXfLV bAzGHu">
                  <h2
                    data-testid="pro-login-header"
                    className="sc-fzXfLW bAzGHv"
                  >
                    {!toggleRegister && "No"} Have Account?
                  </h2>
                  <p className="sc-fzXfLX fHsiZG">
                    Manage your profile, leads,
                    <br /> listings and more.
                  </p>
                  <br></br>

                  <button
                    className="sc-fzXfMB bAzGHH"
                    onClick={this.onToggleRegister}
                  >
                    {toggleRegister ? "Login" : "Register"}
                  </button>
                </div>
                <div className="sc-fzXfMv bAzGIH">
                  <img
                    src={
                      "https://d31jv8wslxbg1z.cloudfront.net/img/house_login_web.png"
                    }
                    alt="pro-login-img"
                    data-testid="pro-signup-img"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
