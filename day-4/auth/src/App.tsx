import React from 'react';
import './App.css';
import WriteToSessionStorage from './session-storage/WriteToSessionStorage';
import { Container } from 'react-bootstrap';
import SessionStorageForm from './exercise-1/SessionStorageForm';

const App: React.FC = ()=> {

  const props = {
    storageKey: 'BOOTCAMP_INFO',
    value: 'This bootcamp is awesome'
  }

  return (
    <Container>
      <h1>Hello Auth World</h1>
      <WriteToSessionStorage {...props}/>
      <h1>Session Storage Form</h1>
      <SessionStorageForm />
    </Container>
  );
}

export default App;
