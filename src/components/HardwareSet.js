import "./HardwareList.css"
import {Card, CardHeader, Button, CardContent, TextField, Box, InputLabel, MenuItem, FormControl, Select, OutlinedInput} from "@mui/material";
import React, { useState, useEffect } from 'react';

function HardwareSet(props){

    const [capacity, setCapacity] = useState(props.capacity);
    const [available, setAvailable] = useState(props.available);
    const [projects, setProjects] = useState(props.projects);

   

    const [name, setName] = useState([]);

    const handleChange = (event) => {
        setName(event.target.value);
    };


    return (
        <Card className="hardware-card">
            <CardContent>
                <h2>{props.name}</h2>
                <h5>Capacity: {capacity}</h5>
                <h5>Available: {available}</h5>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-name-label">Name</InputLabel>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        value={name}
                        onChange={handleChange}
                        input={<OutlinedInput label="Name" />}
                    >
                        {projects.map((projects) => (
                        <MenuItem
                            key={projects.Name}
                            value={projects.Name}
                        >
                        {projects.Name}
                        </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </CardContent>
        </Card>
    );

}

export default HardwareSet;