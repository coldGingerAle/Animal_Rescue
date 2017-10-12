import React, { Component } from 'react';
import './Navbar.css';

export class Navbar extends Component {
  render() {
    return(
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="col-md-10 col-md-offset-1">
              <div className="navbar-header">
              </div>
              <ul className="nav navbar-nav">
                <li><button className="btn btn-info navbar-btn leftside-button">About Us</button></li>
                <li><button className="btn btn-info navbar-btn leftside-button">Contact Us</button></li>
                <li><button className="btn btn-info navbar-btn leftside-button">Privacy Policy</button></li>
              </ul>
              <button className="btn btn-danger navbar-btn register pull-right">Register</button>
              <button className="btn btn-primary navbar-btn signin pull-right">Sign In</button>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
