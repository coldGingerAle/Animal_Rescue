import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import logo from './logo.svg';

import { Navbar } from './Component/Navbar/Navbar';
import { Tabs } from './Component/Tabs/Tabs';
import { Search } from './Component/Search/Search';
import { Posting } from './Component/Posting/Posting';
import { AdoptAPet } from './Component/AdoptAPet/AdoptAPet';

import './App.css';

const MapWithAMarker = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
    />
  </GoogleMap>
);

class App extends Component {
  render() {
    return (
      <div className="App text-center">
      <Navbar />
      <Tabs />
      <MapWithAMarker
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      <Search />

      <div>
        <h1>Top Postings</h1>
        <div className="container-fluid">
          <div className="col-md-10 col-md-offset-1">
            <Posting />
            <Posting />
            <Posting />
            <Posting />
          </div>
        </div>
      </div>

      <AdoptAPet />

      </div>
    );
  }
}

export default App;
