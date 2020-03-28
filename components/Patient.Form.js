import React from 'react'
import {addPatient, getHospitalList, getPatientList} from "../queries/query"


class PatientForm extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            name : "",
            age : "",
            status : "",
            hospital : "",
        }
    }

    getHospitals = () => {
        let data = this.props.hospitals
        
        if (data.loading) {
            return (<option disabled>Loading</option>);
        }

        

        return data.hospitals.map(hospital => {
            return (<option value = {hospital.id}>{hospital.name}</option>)
        })
    }

    onSubmit_ = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.onSubmit_({
            variables : {
                name : this.state.name,
                age : 22,
                hospital : this.state.hospital,
                status : this.state.status
            },
            refetchQueries : [
                {query : getPatientList},
                {query : getHospitalList}
            ]
        });
    }

    render () {

        return (
            <form onSubmit = {this.onSubmit_}>
                <input 
                    type = 'text' 
                    placeholder = 'Name'
                    style = {style.textInput}
                    onChange = {(e) => {this.setState({"name": e.target.value})}}
                />
                <input 
                    type = 'number' 
                    placeholder = 'Age'
                    style = {style.textInput}
                    onChange = {(e) => {this.setState({"age": Number(e.target.value)})}}
                />
                <select
                    style = {style.select}
                    onChange = {(e) => {this.setState({"status": e.target.value})}}
                >
                    <option disabled>Status</option>
                    <option></option>
                    <option value='recovered'>Recovered</option>
                    <option value='underTreatment'>UnderTreatment</option>
                    <option value='dead'>Dead</option>
                </select>
                <select
                    style = {style.select}
                    onChange = {(e) => {this.setState({"hospital": e.target.value})}}
                >
                    <option disabled>Hospital</option>
                    <option></option>
                    {this.getHospitals()}
                </select>
                <input
                    type = 'submit'
                    style = {style.submitButton}
                />
            </form>
        )
    }

};


var style = {
    txt : {
        margin : "2px"
    },
    textInput : {
        width : "calc(80% - 6px)",
        padding : "7px",
        height : "30px",
        marginTop : "3px",
        border : "0px",
        borderRadius : "3px",
        background : "rgba(30, 30, 30, 0.9)",
        color : "white"
    },
    select : {
        width : "80%",
        padding : "7px",
        height : "30px",
        marginTop : "3px",
        border : "0px",
        borderRadius : "3px",
        background : "rgba(30, 30, 30, 0.9)",
        color : "white"
    },
    submitButton : {
        width : "50%",
        marginLeft : "25%",
        marginTop : "10px"
    }
}

export default PatientForm;