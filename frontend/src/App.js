import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';

import Main from './components/main.tsx';
import GetAllSources from './components/getAllSources';

function App() {
  // ALL_SOURCES: 1, ADD_SOURCE: 2, EDIT_SOURCE: 3
  let [pageToLoad, setPageToLoad] = useState(0);

  // Gets rid of previous screen and renders the "GetAllSources" screen
  function renderAllSources() {
    setPageToLoad(1);
    console.log("Displaying new page: " + pageToLoad);
  }
  
  return (<Container style={{alignContent: "center"}}>
    <Row className="justify-content-md-center my-3">
        <Button onClick={renderAllSources}>Get All Sources</Button>
    </Row>
    <Main toLoad={pageToLoad}/>
  </Container>);
}

export default App;
