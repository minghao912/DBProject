import React, {useState} from 'react';

import { Container, Row, Col, Button} from 'react-bootstrap';

import GetAllSources from './getAllSources';
import CreateSoure from './createSource';
import UpdateSource from './updateSource';

export default function Main(props: any) {
    let pageToLoad = props.toLoad;

    console.log("Reloading, page to load is now " + pageToLoad);

    // ALL_SOURCES: 1, ADD_SOURCE: 2, EDIT_SOURCE: 3
    let page: JSX.Element;
    
    switch (pageToLoad) {
        case 0:
            page = <p>Click one of the above buttons</p>;
            break;
        case 1:
            page = <GetAllSources />;
            break;
        case 2:
            page = <CreateSoure />;
            break;
        case 3:
            page = <UpdateSource />;
            break;
        default:
            page = (<p>
                Invalid page to load.
            </p>)
    }

    return page;
}