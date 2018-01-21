import React, { Component } from 'react';
import logo from './img/cryptofund.svg';
import './css/home.css';


class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="jumbotron about">
          <h1>Crypto Crowd Fund</h1>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <img className="logo" src={logo} alt=""></img>
          </div>
          <div className="col-lg-6">
            <div className="jumbotron idea">
              <h1>Purpose</h1>
                <p>Crypto Fund aims to aid those in need. Whether it is raising money for a cause, or supporting change.</p>
              <h1>Idea</h1>
                <p>By leveraging the Eth blockchain, users can support campaigns through advanced smart contracts with campaign addresses.</p>
                <p>Once contract is fullfilled, the receiving user gets campaign the payout.</p>
              <h1>Change</h1>
                <p>Currency can be easily used to donate to those in need across the country.</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
