import { Button } from '@material-ui/core';
import React from 'react';
import Square from './Square';
import Label from './Label';
import jobBg from './images/nu4.png';


class Jobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: 'Find more',
            jobInfoStatus: "none"
        }
    } 
    
    showMore = () => {
        this.setState({
            buttonText: 'More |_|',
            jobInfoStatus: "block"
        });
        

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
        var jobInfo = {
            display: this.state.jobInfoStatus
        }
        return(
            <div>
                <h1>Jobs Page</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, dicta.</p>
                <div style={cardStyle}>
                        <Square color={"#FF6663"} myheight={200} bgImg={jobBg}/>
                        <Label lines={"It is the jobs page!"}/>
                        <Button style={buttonStyle} onClick={this.showMore}>{this.state.buttonText}</Button>
                </div>
                <div style={jobInfo}>
                    <ul>
                        <li>Summer Intern: Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                        <li>Fall Intern: Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                        <li>Spring Intern: Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                        <li>Full-Time Job: Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                        <li>Part-Time Job: Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Jobs;