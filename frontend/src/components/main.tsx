import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import GetAllSources from './getAllSources';
import CreateSoure from './createSource';
import UpdateSource from './updateSource';
import { MainProps, PagesToLoad } from './interfaces';

export default function Main(props: MainProps) {
    let pageToLoad = props.toLoad as PagesToLoad;

    console.log("Reloading, page to load is now " + pageToLoad);

    // ALL_SOURCES: 1, ADD_SOURCE: 2, EDIT_SOURCE: 3
    let page: JSX.Element;
    
    switch (pageToLoad) {
        case PagesToLoad.NONE:
            page = <p>Click one of the above buttons</p>;
            break;
        case PagesToLoad.ALL_SOURCES:
            page = <GetAllSources />;
            break;
        case PagesToLoad.ADD_SOURCE:
            page = <CreateSoure />;
            break;
        case PagesToLoad.EDIT_SOURCE:
            page = <UpdateSource />;
            break;
        default:
            page = (<p>
                Invalid page to load.
            </p>)
    }

    return page;
}