import React from 'react';

import {graphql} from 'react-apollo'
import {addPatient, getHospitalList, getPatientList} from "../queries/query"

import Unit from './Hospital.Unit'

class HospitalList extends React.Component {

    displayList () {
        let data = this.props.data;
        if (data.loading) {

        }
        else {
            return data.hospitals.map(hospital => {
                return (
                    <Unit 
                        data = {hospital}
                    />
                )
            });
        }
    }

    render () {
        return (
            <div style = {style.container}>
                <h3>
                    Hospital List
                </h3>
                <div style={style.unitContainer}>
                    {this.displayList()}
                </div>
            </div>
        )
    }

};

var style = {
    container : {
        display : "inline-block",
        width : "30%",
        minWidth : "250px",
        margin : "10px",
        height : "100%",
        minHeight : "500px",
        borderRadius : "5px",
        padding : "10px",
        verticalAlign : "top"

    },
    unitContainer : {
        height : "500px"
    }
}

export default graphql(getHospitalList)(HospitalList);