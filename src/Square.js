import React from 'react';
// import Background from './images/bg.jpg';

class Square extends React.Component {
    render() {
        var squareStyle = {
            height: this.props.myheight,
            backgroundColor: this.props.color,
            // backgroundImage: './images/bg.jpg',
            backgroundImage: `url(${this.props.bgImg})`,
            backgroundSize: '100%,100%',
        
        };
        
        return(
            <div style={squareStyle}>
        
            </div>
        );
    }
}

export default Square;