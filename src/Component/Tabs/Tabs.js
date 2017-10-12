import React, { Component } from 'react';
import './Tabs.css';

export class Tabs extends Component {
  render() {
    return(
      <div className="tabs-container">
        <div className="container-fluid">
          <div className="col-md-10 col-md-offset-1">
            <div className="col-md-6 col-md-offset-6">
              <div className="col-md-2">
                <div className="tab">Home</div>
              </div>
              <div className="col-md-2">
                <div className="tab">Profile</div>
              </div>
              <div className="col-md-2">
                <div className="tab">Messages</div>
              </div>
              <div className="col-md-2">
                <div className="tab">Adoption</div>
              </div>
              <div className="col-md-2">
                <div className="tab">Photos</div>
              </div>
              <div className="col-md-2">
                <div className="tab">Contact</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
