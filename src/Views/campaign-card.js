import React, { Component } from 'react';
import './css/ccard.css';
import logo from './img/cryptofund.svg';


class CampaignCard extends Component {
  render() {
    return (
      <div className="CampaignCard">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">{this.props.name}</h4>
          </div>
          <div className="card-block">
            <p>{this.props.description}</p>
            <h4 className="card-link">Address</h4>
            <h3 className="card-need"> 1.5 / 2.0 eth</h3>
          </div>

        </div>

      </div>
    );
  }
}

CampaignCard.defaultProps = {
  name: "Help With Medical",
  description: "I am trying to go to college, but recently had to drop out due to the fact I was diagnosed with x disease. I need funds to pay medical bills as well as tuition.",
  address: "0xf2f1fg12f3gf13fg12",
};

export default CampaignCard;
