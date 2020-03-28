import React from 'react'
import color from '../consts/colors'


class LineStatistics extends React.Component {
    

    getTotal = (data) => {
        let total = 0;
        console.log(data)
        for (const x in data) {
            console.log(data)
            total += data[x];
        }
        return total;
    }

    getStat = () => {
        var data = this.props.data;
        let total = this.getTotal(data);
        
        let html_ = new Array();

        for (const x in data) {

            let childStyle = {
                height : "100%",
                display : "inline-block",
                background : color[x],
                width : "calc(" + (data[x] * 100 / total) + "% - 8px)",
                margin : "0px",
                padding : "0px",
                borderRadius : "2px",
                marginRight : "4px",
            }
            if (data[x] != 0)
                html_.push(<div style = {childStyle} title = {`${x} : ${data[x]}`}></div>);

        }
        return html_;
    }
    
    render () {
        return (
            <span style={style.container}>
                {this.getStat()}
            </span>
        )
    }
};

var style = {
    container : {
        height : "5px",
        borderRadius : "2px",
        margin : "0px",
        padding : "0px",
        width : "100%",
        display : "block"
    }
}

export default LineStatistics;