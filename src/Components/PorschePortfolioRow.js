import React, { Component } from 'react';
// import EntryApp from '../assets/videos/entry-app.mp4'
// import EntryPro from '../assets/videos/entry-prototype.mp4'
import '../App.css';

import IMG1 from '../assets/bg1.png'
import IMG2 from '../assets/bg2.png'

// const IMG1 = 'https://photos.google.com/share/AF1QipM6UYTy7qRqMLS9PppTY6mEBv5qbR6Hym4BQxwaCZzmXkCEk24uLpJde_udqIn6tw/photo/AF1QipOP4ZpvvYrXg1cFWsLPLN2tT5OtzuHLiyjJO7-y?key=ZGxKRG45eG9Xa2wySnJtaEdmSmpUanFRaUxmUWdB'
// const IMG2 = 'https://photos.google.com/share/AF1QipP4csz6JN6poRGhG363YSom20mmYmF8-Ek_kmimnvO-RIZGjNrMWDAsLshgbx6MGQ/photo/AF1QipMFrWnKq2EmGeKhOmYB0daSUsKGBGq6Spme5a1c?key=VmZ1em1aWmhrOTh4VERiYXFiX244c0dKSWFtNktB'

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