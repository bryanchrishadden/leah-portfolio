import React, { Component } from 'react';
import PorschePortfolioRow from './PorschePortfolioRow'
import '../App.css';

class Content extends Component {
  render() {
    return (
      <div className="content">
        <PorschePortfolioRow handleCardClick={this.props.handleCardClick} />
      </div>
    )
  }
}

export default Content;