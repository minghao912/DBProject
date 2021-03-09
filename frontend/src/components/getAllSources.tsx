import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';

import { Source } from './interfaces';

export default function GetAllSources(props: any) {
    let [data, setData] = useState<Source[]>([] as Source[]);

    useEffect(() => {
        axios.get(`http://localhost:5000/sources/get/all`).then(response => {
            setData(response.data as Source[]);
            
            console.log("Got all sources:\n" + data);
        }).catch(err => console.error(err));
    }, []);

    return (
        <Container className="justify-content-md-center">
            <Row className="justify-content-md-center my-3">
                <Col className="col-mx-4" id="source-cards">
                    <GetCardsForAllSources sources={data}/>
                </Col>
            </Row>
        </Container>
    )
}

function GetCardsForAllSources(props: any): JSX.Element {
    let sourceData = props.sources as Source[];
    let cardHTML: JSX.Element[] = [];

    for (const s of sourceData) {
        cardHTML.push(getCardFromSource(s));
    }

    return (<div>
        {cardHTML}
    </div>)
}

function getCardFromSource(source: Source): JSX.Element {
    console.log("Creating card for source " + source.id);

    return (<Row className="first-item-below-header row my-3">
        <Card style={{width: "100%"}}>
            <Card.Title>{source.name}</Card.Title>
            <Card.Body style={{alignContent: "center"}}>
                <p>Organization: {source.organization}</p>
                <p>Email: {source.email}</p>
                <p>Phone: {source.phone}</p>
                <p className="mt-2">{source.remarks}</p>
            </Card.Body>
        </Card>
    </Row>)
}