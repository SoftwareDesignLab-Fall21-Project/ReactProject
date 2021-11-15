import "./HardwareList.css"
import {Card, Button, CardContent, InputLabel, MenuItem, FormControl, Select, OutlinedInput, Slider} from "@mui/material";
import React, { useState, useContext} from 'react';
import {hwSetContext} from "../pages/HardwarePage.js";

function HardwareSet(props){
    const updateHardwarePage = useContext(hwSetContext)[0];
    const capacity = props.capacity;

    const available = useContext(hwSetContext)[props.number];
    const projects = useContext(hwSetContext)[3];


   
    const [sliderNum, setSliderNum] = useState(0);

    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const checkoutHardware = (Event) => {
        Event.preventDefault();
        const data = new FormData(Event.target);
        data.append('project_name', name);
        data.append('hw_name', props.name);
        data.append('number', sliderNum);

        fetch('/checkout-hw', {
          method: 'POST',
          body: data,
        }).then(response => {
                if(!response.ok)
                    throw new Error("HTTP request error: " + response.status);
                return response.json();
        }).then(json => {
            if (json[0]['success'] === "true") {
                updateHardwarePage();
            }
        });

    };

    const returnHardware = () => {
        const data = new FormData(Event.target);
        data.append('project_name', name);
        data.append('hw_name', props.name);
        projects.forEach((project) => {
            if(project.Name === name){
                if(props.number === 1){
                    data.append('number', project.HardwareSet1);
                }else{
                    data.append('number', project.HardwareSet2);
                }
            }
        });




        fetch('/return-hw', {
          method: 'POST',
          body: data,
        }).then(response => {
                if(!response.ok)
                    throw new Error("HTTP request error: " + response.status);
                return response.json();
        }).then(json => {
            if (json[0]['success'] === "true") {
                updateHardwarePage();
            }
        });
    };


    return (
        <Card className="hardware-card">
            <CardContent>
                <h2>{props.name}</h2>
                <h5>Capacity: {capacity}</h5>
                <h5>Available: {available}</h5>
                <h4>Select Project and Amount of Hardware to Checkout or Return All Hardware for a Selected Project:</h4>
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

                <form onSubmit={checkoutHardware}>
                    <div id="slider-control">
                    <Slider
                        aria-label="Always visible"
                        defaultValue={0}
                        // getAriaValueText={valuetext}
                        step={1}
                        min={0}
                        max={parseInt(available)}
                        valueLabelDisplay="on"
                        name="num_hw"
                        onChange={(Event) => {
                            setSliderNum(Event.target.value);
                        }}
                    />
                    </div>
                    <div id="button-return" >
                        <Button variant="outlined" type="submit">Checkout Selected</Button>
                    </div>
                </form>
                <div id="button-return">
                    <Button variant="outlined" onClick={returnHardware}>Return All</Button>
                </div>
            </CardContent>
        </Card>
    );

}

export default HardwareSet;