import React from 'react';


import LineStatistics from './LineStatistics'

class Unit extends React.Component {
    render () {
        let data = this.props.data;
        let stat = data.statistics;
        return (
            <div style = {style.unit}>
                <p style={style.txt}><b>{data.name}</b></p>
                <p style={style.txt}><i>City : {data.city}</i></p>
                <p style={style.txt}><i>capacity : {data.capacity}</i></p>
                <p style={style.txt}>Patient Statistics</p>
                <LineStatistics 
                    data = { 
                        {
                            "recovered" : stat.recovered,
                            "underTreatment" : stat.underTreatment,
                            "critical" : stat.critical,
                            "dead" : stat.dead
                        }
                    }
                />
                <br />
                <p style={style.txt}>Space</p>
                <LineStatistics 
                    data = { 
                        {
                            "occupied" : stat.total,
                            "free" : stat.capacity - stat.total
                        }
                    }
                />
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
        paddingBottom : "15px"
    },
    txt : {
        margin : "2px"
    }
}

export default Unit;