import React, { Component } from 'react';
import './AdoptAPet.css';

export class AdoptAPet extends Component {
  render() {
    return(
      <div className="pet-container container-fluid col-md-10 col-md-offset-1">
        <h1>Adopt a Pet </h1>

        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="col-md-3">
              <div className="pet-picture">
                <img src="Images/dog.jpg" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="pet-picture">
                <img src="Images/cat.jpg" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="pet-picture">
                <img src="Images/rock.jpg" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="pet-picture">
                <img src="Images/shark.jpg" />
              </div>
            </div>
          </div>
        </div>

        <div className="view-all-container">
          <button className="btn btn-success view-all-button">View All</button>
        </div>

      </div>
    )
  }
}
