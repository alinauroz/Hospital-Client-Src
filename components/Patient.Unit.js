import React from 'react'

import Circle from './Circle'

class Unit extends React.Component {
    render () {
        let data = this.props.data

        return (
            <div style = {style.unit}>
                <p style={style.txt}><b>{data.name}</b></p>
                <p style={style.txt}><i>Age : {data.age}</i></p>
                <p style={style.txt}><i>Hospital : {data.hospital.name}</i></p>
                <div style={style.txt}>Status : <Circle status = {data.status}/></div>
            </div>
        )
    }
};


var style = {
    unit : {
        background : "rgba(30, 30, 30, 0.9)",
        borderRadius : "5px",
        color : "white",
        margin : "5px",
        padding : "7px",
        fontSize : "13px",
    },
    txt : {
        margin : "2px"
    }
}

export default Unit;