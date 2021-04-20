import React from 'react';
// import { Grid } from 'semantic-ui-react';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './Header/Header';
// import LeftPanel from './LeftPanel/LeftPanel';
// import RightPanel from './RightPanel/RightPanel';
// import Footer from './Footer/Footer';

export default function App() {
  return (
    <>
      <Container fluid>
        <Header />
        <hr />
        {/* <LeftPanel />
        <RightPanel />
        <Footer /> */}
      </Container>
    </>
  );
}
