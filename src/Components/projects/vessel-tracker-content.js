import React, { Component } from 'react';
import VesselTrackerVideo from '../../assets/videos/vesseltracker-app.mp4'
import ReactPlayer from 'react-player'
import '../../App.css';

class vesselTrackerContent extends Component {
    render() {
        return (
            <div className="description">
                <div
                    href="/"
                    id="vesselTrackerProject"
                    className="img"
                    onClick={this.props.handleCardClick}
                >
                    <h2><span>Vessel Tracker App</span></h2>
                </div>
                <h2 className="tech-stack"><span>Tech Stack: </span>React, Node, AWS, Redux, Jest, JWT Tokens, Google Maps API</h2>
                <a href="/"><button className="back">Go Back</button></a>
                <h2 className="text">
                    "We want to able to know where every new Porsche in the world is, on one screen".<br />
                    Currently in use at every port in the world that tracks shipping for Porsche Cars, this<br />
                    app needed to be mobile friendly & 70inch TV friendly.
                </h2>
                <h2 className="text">
                    The users were diverse: port managers, the logistics department, even C Suite execs.  <br />
                    The real challenge here was making sure the presentation layer was not overwhelming to each of our users. <br />
                </h2>
                <div className="demo">
                    <ReactPlayer url={VesselTrackerVideo} width="61vw" height="40vw" playing={true} loop={true} />
                </div>
            </div>
        )
    }
}

export default vesselTrackerContent
