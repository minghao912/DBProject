import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import GetAllSources from './getAllSources';
import CreateSoure from './createSource';
import UpdateSource from './updateSource';
import { MainProps, PagesToLoad } from './utils';

export default function Main(props: MainProps) {
    let pageToLoad = props.toLoad as PagesToLoad;
    let classesFromParent = props.className as string;

    console.log("Reloading, page to load is now " + pageToLoad);

    // ALL_SOURCES: 1, ADD_SOURCE: 2, EDIT_SOURCE: 3
    let page: JSX.Element;
    
    switch (pageToLoad) {
        case PagesToLoad.NONE:
            page = <p>Click the button</p>;
            break;
        case PagesToLoad.ALL_SOURCES:
            page = <GetAllSources className={classesFromParent} renderEditPage={props.renderEditPage} />;
            break;
        case PagesToLoad.ADD_SOURCE:
            page = <CreateSoure className={classesFromParent}/>;
            break;
        case PagesToLoad.EDIT_SOURCE:
            page = <UpdateSource className={classesFromParent} sourceToEdit={props.sourceToEdit} />;
            break;
        default:
            page = <p>Invalid page to load.</p>;
    }

    return page;
}