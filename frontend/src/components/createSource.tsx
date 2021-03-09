import axios from 'axios';
import React, {useState} from 'react';

export default function CreateSource(props: any) {
    const [name, setName] = useState("");
    const [organization, setOrganization] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [remarks, setRemarks] = useState("");
    const [retVal, setRetVal] = useState("");

    function submit() {
        axios.post("http://localhost:5000/sources/create/", {
            name: name,
            organization: organization,
            phone: phone,
            email: email,
            remarks: remarks
        }).then(response => {
            console.log(response);
            setRetVal(`Your new source has been added with ID ${response.data.id}`);
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div className={"first-item-below-header"}>
            <label>Name: </label>  <input onChange={(e) => setName(e.target.value)} />
            <label>Organization: </label><input onChange={(e) => setOrganization(e.target.value)} />
            <label>Phone: </label> <input onChange={(e) => setPhone(e.target.value)} />
            <label>Email: </label> <input onChange={(e) => setEmail(e.target.value)} />
            <label>Remarks: </label> <input onChange={(e) => setRemarks(e.target.value)} />
            <button onClick={submit}>Submit</button>
            <br />
            <p>{retVal}</p>
        </div>
    );
}