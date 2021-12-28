import React from 'react';
import Square from './Square';
import Label from './Label';
import aboutBg from './images/nu3.png';

class AboutUs extends React.Component {
    render() {
        var cardStyle = {
            height: 300,
            width: 400,
            padding: 0,
            backgroundColor: "#FFF",
            WebkitFilter: "drop-shadow(0px 0px 5px #666)",
            filter: "drop-shadow(0px 0px 5px #666)"
        };
        return(
            <div>
                <h1>About Us Page</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, dicta.</p>
                <div style={cardStyle}>
                        <Square color={"#FF6663"} myheight={200} bgImg={aboutBg}/>
                        <Label lines={"It is the about page!"}/>
                        
                </div>
            </div>
        )
    }
}

export default AboutUs;