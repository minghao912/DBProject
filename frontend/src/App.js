import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUserFriends } from '@fortawesome/free-solid-svg-icons';

import Main from './components/main.tsx';

function App() {
  // ALL_SOURCES: 1, ADD_SOURCE: 2, EDIT_SOURCE: 3
  let [pageToLoad, setPageToLoad] = useState(1);  // Automatically start with all sources loaded

  // Gets rid of previous screen and renders the "GetAllSources" screen
  function renderPage() {
    switch (pageToLoad) {
      case 1:
        setPageToLoad(2);
        break;
      case 2:
        setPageToLoad(1);
        break;
      case 3: // Do nothing
        break;
    }
  }

  // Get correct icon type
  function getIconType() {
    switch (pageToLoad) {
      case 1:
        return faPlus;
      case 2:
        return faUserFriends;
      case 3: // Do nothing
        break;
    }
  }

  return (<Container style={{alignContent: "center"}}>
    <header className={"text-center mt-2"}>
      <h1>Sources</h1>
    </header>
    <Button className={"float pointer-hover"} onClick={renderPage}>
      <FontAwesomeIcon icon={getIconType()} size={"2x"} className={"centered-item"} />
    </Button>
    <Main toLoad={pageToLoad}/>
  </Container>);
}

export default App;
