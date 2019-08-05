import React, { Component } from 'react';
// import EntryApp from '../assets/videos/entry-app.mp4'
// import EntryPro from '../assets/videos/entry-prototype.mp4'
import '../App.css';

const IMG1 = 'https://photos.google.com/photo/AF1QipMBKXSlMw2Ceh2-EVJrsaSDP_na_0_I9HI4hDyw'
const IMG2 = 'https://photos.google.com/photo/AF1QipMcobpoZmmTuX3V7DDswxIoQLMLre9zSCYAKrHk'

var IMGStyle1 = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${IMG1})`,
    color: "black"
};

var IMGStyle2 = {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${IMG2})`,
    color: "black"
};

const openNewTab = (e) => {
    const clickedID = e.target.id
    let linkToOpen = clickedID === 'site1' ? 'http://3.91.22.26/' : 'http://52.87.226.99'
    window.open(linkToOpen, '_blank');
}

class PorschePortfolioRow extends Component {
    render() {
        return (
            <div className="cards-wrapper">
                <div
                    href="/"
                    id="site1"
                    className="ux-column"
                    onClick={openNewTab}
                    style={IMGStyle1}
                >
                    <h2>Wordpress Example 1</h2>
                </div>
                <div
                    href="/"
                    id="site2"
                    className="ux-column"
                    onClick={openNewTab}
                    // onClick={this.props.handleCardClick}
                    style={IMGStyle2}
                >
                    <h2>Wordpress Example 2</h2>
                </div>
            </div>
        )
    }
}

export default PorschePortfolioRow