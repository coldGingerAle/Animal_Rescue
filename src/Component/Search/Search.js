import React, { Component } from 'react';
import './Search.css';

export class Search extends Component {
  render() {
    return(
      <div className="search-container">
        <div className="row">
          <div className="input-holder col-md-2 col-md-offset-3">
            <input className="input" type="text" placeholder="Filter" />
          </div>
          <div className="input-holder col-md-2">
            <input className="input" type="text" placeholder="Location by City" />
          </div>
          <div className='col-md-2'>
            <div className="search-button-container"><button className="search-button btn btn-success">Search Now</button></div>
          </div>
        </div>
      </div>
    )
  }
}
