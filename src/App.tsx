import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Header, Grid, Segment } from 'semantic-ui-react';
import FicheFormComponent from './pages/FormPage/FicheFormComponent';
import Navbar from './app/utils/nav/Navbar';

function App() {
  return (
    <Fragment>
      <Container className='main'>
        <Navbar />
        <FicheFormComponent />
      </Container>
    </Fragment>
  );
}

export default App;
