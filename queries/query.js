import {gql} from 'apollo-boost'

export const getPatientList = gql`
    {
        patients {
            name
            hospital {
                name
            }
            status
            age
        }
    }
`;

export const getHospitalList = gql`
    {
        hospitals {
            id
            name
            city
            capacity
            statistics {
                capacity
                total
                recovered
                dead
                underTreatment
                critical
              }
        }
    }
`;

export const addPatient = gql `
    mutation ($name : String!, $age : Int!, $hospital : String!, $status : String!) {
        addPatient (name : $name, age : $age, hospital : $hospital, status : $status) {
            name
        }
    }
`