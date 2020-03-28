import React from 'react';

import {graphql} from 'react-apollo'
import * as compose from 'lodash.flowright'

import {addPatient, getHospitalList, getPatientList} from "../queries/query"

import PatientForm from './Patient.Form'

class PatientFormContainer extends React.Component {
    render () {
        return (
            <div style = {style.container}>
                <h3>
                    Add Patient
                </h3>
                <PatientForm
                    hospitals = {this.props.getHospitalList}
                    onSubmit_ = {this.props.addPatient}
                />
                <h3>About</h3>
                <p style = {{fontSize : "13px"}}>
                    The API provides information about patients, hospitals, hospitals' capacity and number of patient admitted. It also provides statistics.
                    <br />
                    The server is implemented using GraphQL which saves from under-fetching and over-fetching. The server returns JSON as well as JSON response.
                    <br />
                    Patients can be added using the form given above. To add Hospital use GraphiQL. Hover over colored shapes to view information.
                </p>
            </div>
        )
    }
};

var style  = {
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
}

export default compose(
    graphql(getPatientList, {name : "getPatientList"}),
    graphql(getHospitalList, {name : "getHospitalList"}),
    graphql(addPatient, {name : "addPatient"}),
)(PatientFormContainer);