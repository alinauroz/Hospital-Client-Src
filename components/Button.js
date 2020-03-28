import React from 'react';

class Button extends React.Component {

    render () {
        return (
            <input 
                type = 'button'
                style = {styles.button}
                value = {this.props.value}
                onClick = {this.props.onClick_}
            />
        )
    }

};

var styles = {
    button : {
        background : "transparent",
        color : "rgb(100, 100, 100)",
        border : "0px",
        fontSize : "13px",
        fontWeight : "bold"
    }
}

export default Button;