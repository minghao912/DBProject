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
  let [sourceToEdit, setSourceToEdit] = useState(-1);

  // Gets rid of previous screen and renders the proper screen
  function renderPage() {
    switch (pageToLoad) {
      case 1:
        setPageToLoad(2);
        break;
      case 2:
        setPageToLoad(1);
        break;
      case 3:
        setPageToLoad(1);
        break;
    }
  }

  // Renders the edit page
  function renderEditPage(sourceID) {
    setSourceToEdit(sourceID);
    setPageToLoad(3);
  }

  // Get correct icon type
  function getIconType() {
    switch (pageToLoad) {
      case 1:
        return faPlus;
      case 2:
        return faUserFriends;
      case 3:
        return faUserFriends;
        break;
    }
  }

  return (<Container style={{alignContent: "center"}}>
    <header className={"text-center mt-4 mb-3"}>
      <h1>Sources</h1>
    </header>
    <Button className={"float-bottom-right pointer-hover"} onClick={renderPage}>
      <FontAwesomeIcon icon={getIconType()} size={"2x"} className={"centered-item"} />
    </Button>
    <Main className="first-item-below-header" toLoad={pageToLoad} sourceToEdit={sourceToEdit} renderEditPage={sourceID => renderEditPage(sourceID)} />
  </Container>);
}

export default App;
