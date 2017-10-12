import React, { Component } from 'react';
import './Posting.css';

export class Posting extends Component {
  render() {
    return(
      <div className="col-md-3">
        <div className="posting-container">
          <div className="title">Item 1</div>
          <div className="filler"></div>
          <div className="list-item">Item 2</div>
          <div className="list-item">Item 3</div>
          <div className="list-item">Item 4</div>
        </div>
      </div>
    )
  }
}
