import React, { Component } from 'react';
import Login from './login.js';
import './css/campaign.css';
import CCard from './campaign-card.js';


class Campaigns extends Component {
  render() {
    return (
      <div className="Campaigns">
      <div className="row">
        <div className="col-lg-3">
          <div className="jumbotron">
            <Login/>
            <p>Donate anonymously, or sign in and build up karma so people know that you are willing to support them</p>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="jumbotron campaign">
            <h1>Popular Campaigns</h1>
            <div className="container">
              <CCard className="ccard" name="Help Me"/>
              <CCard className="ccard" name="Donate to My Fund"/>
              <CCard className="ccard"/>
              <CCard className="ccard"/>
              <CCard className="ccard"/>
              <CCard className="ccard"/>
              <CCard className="ccard"/>
              <CCard className="ccard"/>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Campaigns;
