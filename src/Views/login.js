import React, { Component } from 'react';
import './css/login.css'


class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="card login">
          <div className="card-block">
            <h4 className="card-title">Login or Create Account</h4>
            <form>
              <div className="form-group">
                <label HTMLfor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                <small id="emailHelp" className="form-text text-muted">Well never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label HTMLfor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
