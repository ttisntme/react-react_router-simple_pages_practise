import { Button } from '@material-ui/core';
import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Square from './Square';
import Label from './Label';
import Homebg from './images/nu2.png';

class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            buttonText: 'Check'
        }
        // this.handleClick = this.handleClick.bind(this);
    } 
    
    // handleClick = () => {
       
    //     this.props.navigate("/contactUs");
    // }

    changeText = () => {
        this.setState({
            buttonText: 'Checked'
        })
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
            color: "#fff",
            padding: "5px",
            marginLeft: "10px"
        };

        return(
            <div>
                <h1> Home Page </h1> 
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, dicta.</p>
                {/* <Button onClick={this.handleClick}>Route to Contact Page</Button> */}
                {/* <Button onClick={this.changeText}>{this.state.buttonText}</Button> */}

                <div style={cardStyle}>
                        <Square color={"#FF6663"} myheight={200} bgImg={Homebg}/>
                        <Label lines={"It is the home page!"}/>
                        <Button style={buttonStyle} onClick={this.changeText}>{this.state.buttonText}</Button>
                </div>
            
            </div>
        )
    }
}

// function WithNavigate(props) {
//     let navigate = useNavigate();
//     return <Home {...props} navigate={navigate} />
// }

// export default WithNavigate;
export default Home;