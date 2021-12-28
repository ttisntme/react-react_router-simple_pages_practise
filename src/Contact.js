import { Button } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Square from './Square';
import Label from './Label';
import contactBg from './images/nu5.png';

class Contact extends React.Component {
    
    handleClick = () => {
        this.props.navigate("/contactUs");
    }

    render() {
        var cardStyle = {
            height: 300,
            width: 400,
            padding: 0,
            backgroundColor: "#FFF",
            WebkitFilter: "drop-shadow(0px 0px 5px #666)",
            filter: "drop-shadow(0px 0px 5px #666)"
        };
        var buttonStyle = {
            backgroundColor:  "#ff0000",
            color: "#fff"
        };

        return(
            <div>
                <h1>Contact Page</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, dicta.</p>
                
                <div style={cardStyle}>
                        <Square color={"#FF6663"} myheight={200} bgImg={contactBg}/>
                        <Label lines={"It is the contact page!"}/>
                </div>
                <br></br>

                <Button style={buttonStyle} onClick={this.handleClick}>Route to Contact Us Detail Page</Button>
            </div>
        )
    }
}
function WithNavigate(props) {
    let navigate = useNavigate();
    return <Contact {...props} navigate={navigate} />
}



export default WithNavigate;
// export default Contact;