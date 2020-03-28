import React from 'react';

import {graphql} from 'react-apollo'
import * as compose from 'lodash.flowright'

import {addPatient, getHospitalList, getPatientList} from "../queries/query"


import Unit from './Patient.Unit'
import PatientForm from './Patient.Form'

class PatientList extends React.Component {

    displayList () {
        let data = this.props.getPatientList;
        console.log(this.props.getPatientList)
        if (data.loading) {
            return <p>Loading ...</p>
        }
        else {
            return data.patients.map(patient => {
                return (
                    <Unit 
                        data = {patient}
                    />
                )
            });
        }
    }

    render () {
        return (
            <div style = {style.container}>
                <h3>
                    Patient List
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
        height : "500px",
        overflow : "auto"
    }
   
}

export default compose(
    graphql(getPatientList, {name : "getPatientList"}),
    graphql(getHospitalList, {name : "getHospitalList"}),
)(PatientList);