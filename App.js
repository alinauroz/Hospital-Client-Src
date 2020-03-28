import React from 'react';

//components
import TopBar from './components/TopBar'
import HospitalList from './components/HospitalList'
import PatientList from './components/PatientList'
import PatientFormContainer from './components/Patient.FormContainer'

import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'

const client = new ApolloClient ({
  uri : "http://localhost:3003/graphql",
})

function App() {
  return (
    <ApolloProvider client = {client} style = {style.main}>
          <TopBar />
          <HospitalList />
          <PatientList />
          <PatientFormContainer />
    </ApolloProvider>
  );
}

var style = {
  main : {
    height : "100%"
  }
}

export default App;
