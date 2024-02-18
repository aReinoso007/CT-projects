import React from 'react';
import './App.css';
import WriteToSessionStorage from './session-storage/WriteToSessionStorage';
import { Container } from 'react-bootstrap';

const App: React.FC = ()=> {

  sessionStorage.setItem('BOOTCAMP_INFO','This bootcampt is awesome')

  return (
    <Container>
      <h1>Hello Auth World</h1>
      <WriteToSessionStorage key="BOOTCAMP_INFO" value="This bootcampt is awesome"/>
    </Container>
  );
}

export default App;
