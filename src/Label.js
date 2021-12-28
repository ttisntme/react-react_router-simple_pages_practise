// import { colors } from '@material-ui/core';
// import { red } from '@material-ui/core/colors';
import React from 'react';

class Label extends React.Component {
    render() {
        var labelStyle = {
            fontFamily: "sans-serif",
            fontWeight: "bold",
            padding: 15,
            margin: 0,
            
        };
        
        return (
            <p style={labelStyle}>{this.props.lines}</p>
        );
    }
}

export default Label;