import React, { Component } from 'react';


class CampaignCard extends Component {
  render() {
    return (
      <div className="CampaignCard">
        <div className="card">
          <div className="card-header">
            <p>Donate to me</p>
          </div>
          <div className="card-block">
            <p>test body</p>
          </div>
        </div>

      </div>
    );
  }
}

CampaignCard.defaultProps = {
  cityList: [],
  provinceList: [],
};

export default CampaignCard;
