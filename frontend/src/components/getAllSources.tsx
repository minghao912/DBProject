import axios from 'axios';
import React, {useState} from 'react';

export default function GetAllSources(props: any) {
    interface Source {
        "id": number,
        "name": string,
        "organization": string,
        "phone": string,
        "email": string,
        "remarks": string
    }

    let [data, setData] = useState<Source[]>([] as Source[]);

    function get() {
        axios.get(`http://localhost:5000/sources/get/all`).then(response => {
            /* setName(response.data.name);
            setOrganization(response.data.organization);
            setPhone(response.data.phone);
            setEmail(response.data.email);
            setRemarks(response.data.remarks); */

            setData(response.data as Source[]);
        }).catch(err => console.error(err));

        console.log("Got all sources:\n" + data);
    }

    return (
        <div>
            <button onClick={get}>Get All Sources</button>
            {data.toString()}
        </div>
    )
}