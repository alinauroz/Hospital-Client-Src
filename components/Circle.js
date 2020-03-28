import React from 'react'

import color from '../consts/colors'

class Circle extends React.Component {
    render () {
        let circleStyle = {
            height : "10px",
            width : "10px",
            borderRadius : "5px",
            marginLeft : "5px",
            background : color[this.props.status],
            display : "inline-block"
        }
        return (
            <div style = {circleStyle} title = {this.props.status}></div>
        )
    }
};

export default Circle;