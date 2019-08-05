import React, { Component } from 'react';
// import EntryApp from '../assets/videos/entry-app.mp4'
// import EntryPro from '../assets/videos/entry-prototype.mp4'
import '../App.css';

const IMG1 = 'https://previews.dropbox.com/p/thumb/AAhBOsYoUqJZzL_v0A6SQfPN6-pL3rG07etmjfng0yDUOQ6RitgQsERO70_isXK3i7BmF8E6bUrWTuw9qxJwEIkZa40L1qkkGbOJb4Do_hsN4DWetE_NLsMunh-ZOEXnPwMHiOA42Uz4ckbccdsKWaIA6hjDhKUFFsCvzwW_IYxFeOSwbdr4Oj6SnZwziDeqDR7sVxlqpDxdAnovLArrEMd24MxIP9Z1maysbiS6GNbvnzLMlpa1yR5lVtelQ46LYy-kl4iyt5lDOXyIH7ICoikfIZYiUuKxeESdoGaQVQIAKCdDpMOrbqZp2Fd0ffuvQfgupYLIEtxKg9KqMpL2HsAy8b9L3gHMM-lJWMheaVetrw/p.png?fv_content=true&size_mode=5'
const IMG2 = 'https://previews.dropbox.com/p/thumb/AAhiYlLjchw0h_9o6rYj-FyO68z2yTY0v2DBBze4fpSiQkeRS99zSpaTgljkosD_BhCq5Vc44kYXLHlx0-G1VBer4NYEYkwbDTHYY_nwlYvu_AM5WYSEHBbUCIZCdg4oMHMJhotUTsjQS4PnRoV2uTalRqsNhDhkLa9whzCMK9cZmbXSLL3koJbUljbAf0qS2mLhuJt7Xd5wsUIX8l9JpQpWOZ4j1f38tmEAc1l8o7_NUZTjs9LHsEwrpPP89uw-r9kRyEF-OQumOUjS5bfyL7jyGGHmXuOX5EOtOtaMYUZ-IOvu6hrRbdpSYDPSV6G5fTH86jxIgAkWXqCQclHyY6TXTVpvH9yROUblkjVVcPELFA/p.png?fv_content=true&size_mode=5'

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
                    // onClick={this.props.handleCardClick}
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