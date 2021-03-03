import axios from 'axios';
import React, {useState} from 'react';

export default function UpdateSource(props: any) {
    const [id, setID] = useState(NaN);
    const [name, setName] = useState("");
    const [organization, setOrganization] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [remarks, setRemarks] = useState("");
    const [retVal, setRetVal] = useState("");

    function submit() {
        axios.put(`http://localhost:5000/sources/update/${id}`, {
            name: name,
            organization: organization,
            phone: phone,
            email: email,
            remarks: remarks
        }).then(response => {
            console.log(response);
            setRetVal(`Your new source has been updated with ID ${response.data.id}`);
        }).catch(err => {
            console.log(err);
        });
    }

    function populateOld(newID: number): void {
        axios.get(`http://localhost:5000/sources/get/${newID}`).then(response => {
            setName(response.data.name);
            setOrganization(response.data.organization);
            setPhone(response.data.phone);
            setEmail(response.data.email);
            setRemarks(response.data.remarks);
        }).catch(err => {
            console.error(err);

            // Reset fields
            setName("");
            setOrganization("");
            setPhone("");
            setEmail("");
            setRemarks("");
        });
    }

    function IDChange(e: React.ChangeEvent<HTMLInputElement>): void {
        let newID = parseInt(e.target.value);

        setID(newID);

        if (isNaN(newID)) {
            setName("");
            setOrganization("");
            setPhone("");
            setEmail("");
            setRemarks("");
        } else {
            populateOld(newID);
        }
    }

    return (
        <div>
            <label>ID: </label> <input onChange={(e) => IDChange(e)} />
            <label>Name: </label> <input onChange={(e) => setName(e.target.value)} value={name} />
            <label>Organization: </label><input onChange={(e) => setOrganization(e.target.value)} value={organization} />
            <label>Phone: </label> <input onChange={(e) => setPhone(e.target.value)} value={phone} />
            <label>Email: </label> <input onChange={(e) => setEmail(e.target.value)} value={email} />
            <label>Remarks: </label> <input onChange={(e) => setRemarks(e.target.value)} value={remarks} />
            <button onClick={submit}>Submit</button>
            <br />
            <p>{retVal}</p>
        </div>
    );
}