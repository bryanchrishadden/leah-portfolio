import React, { Component } from 'react';
import vtAppVideo from '../../assets/videos/entry-app.mp4'
import ReactPlayer from 'react-player'
import '../../App.css';

class vesselTrackerContent extends Component {
    render() {
        const PorscheShieldIcon = 'https://www.dropbox.com/s/pfuahxwm15n3p7s/Screenshot%202019-08-04%2022.50.53.png?dl=0'

        var PorscheShieldImg = {
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url(${PorscheShieldIcon})`,
            color: "black"
        };
        return (
            <div className="description">
                <div
                    href="/"
                    id="vesselTrackerProject"
                    className="img"
                    onClick={this.props.handleCardClick}
                    style={PorscheShieldImg}
                >
                    <h2><span>Vehicle Tracker Entrypoint Porototype & App</span></h2>
                </div>
                <h2 className="tech-stack"><span>Tech Stack: </span>React, Node, AWS, Redux, Jest, JWT Tokens, Postgress, Sketch, Photoshop, InVision</h2>
                <a href="/"><button className="back">Go Back</button></a>
                <h2 className="text">
                    Porsche wanted a more modern experience for delearships tracking their cars/orders, <br />
                    they wanted a modern, simple design that was easy to understand at a glance. Working remotely, I designed the app which was then presented to Porsche leadership.
                </h2>
                <h2 className="text">
                    After we recieved approval to move forward,and I started the build, of which the main challenge was keeping things
                    simple for team members who may not be very technical, while also designing the data flow in a
                    way that made it very easy for seasoned salesmen/saleswomen to get car info quickly. <br />
                </h2>
                <div className="demo">
                    {/* <ReactPlayer url={vtProtoypeVideo} width="61vw" height="40vw" playing={true} loop={true} /> */}
                    <ReactPlayer url={vtAppVideo} width="61vw" height="40vw" playing={true} loop={true} />
                </div>
            </div>
        )
    }
}

export default vesselTrackerContent
