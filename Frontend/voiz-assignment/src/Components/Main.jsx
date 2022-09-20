import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import '../App.css';
import Navbar from './Navbar';
import Select from './Select';
import { Table } from './Table'

function Main() {
    const [label, setLabel] = useState("");
    const [val, setVal] = useState("");
    const [apiLink, setApiLink] = useState("")
    const [options, setOptions] = useState([
        { label: "India", value: "india" },
        { label: "Russia", value: "russia" },
        { label: "Germany", value: "germany" },
    ]);
    const [selected, setSelected] = useState([]);

    const customizeOptions = () => {
        const option = {
            label,
            value: val
        }

        setLabel("")
        setVal("")

        setOptions([...options, option]);
        alert("OPTION ADDED")
    }

    const importOptions = () => {
        axios.get(apiLink).then((res) => {
            setOptions(res.data);
            alert("Options Imported")
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <>
            <Navbar />
            <div id='container'>
                <div id='left'>
                    <div>
                        <h2>Customize Options</h2>
                        <TextField value={label} onChange={(e) => setLabel(e.target.value)} fullWidth id="outlined-basic" label="Label" variant="outlined" /><br /><br />
                        <TextField value={val} onChange={(e) => setVal(e.target.value)} fullWidth id="outlined-basic" label="Value" variant="outlined" /><br /><br />
                        <Button onClick={customizeOptions} fullWidth variant="contained">Save</Button>
                    </div><br />
                    <div>
                        <h2>Select Options</h2>
                        <Select options={options} selected={selected} setSelected={setSelected} />
                    </div>
                </div>

                <div id='right'>
                    <div id='selectedOptions' className='example' >
                        <h2>Selected Options</h2>
                        <Table data={selected} />
                    </div>

                    <div>
                        <h2>Import Options</h2>
                        <TextField value={apiLink} onChange={(e) => setApiLink(e.target.value)} id="outlined-basic" label="API LINK" variant="outlined" />
                        <Button style={{ marginTop: "10px", marginLeft: "10px" }} onClick={importOptions} variant='contained'>Import</Button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Main;
