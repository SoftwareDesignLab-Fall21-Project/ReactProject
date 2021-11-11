import "./HardwareList.css"
import {Card, CardHeader, Button, CardContent, TextField} from "@mui/material";
import React, { useState, useEffect } from 'react';

function HardwareSet(props){

    const [capacity, setCapacity] = useState(props.capacity);
    const [available, setAvailable] = useState(props.available);


    return (
        <Card className="hardware-card">
            <CardContent>
                <h2>{props.name}</h2>
                <h5>Capacity: {capacity}</h5>
                <h5>Available: {available}</h5>
                <TextField id="standard-basic" label="# Sets to Checkout" variant="standard" onKeyPress={(event) => {
                    if (event.key === 'Enter')
                        console.log('Enter Pressed')
                        var count = parseInt(event.target.value);
                        if(count <= available){
                            var avaCount = parseInt(available)-count;
                            var capCount = parseInt(capacity)+count;
                            // console.log(avaCount);
                            // console.log(capCount);
                            setAvailable(avaCount);
                            setCapacity(capCount);
                        }
                    }} 
                />
            </CardContent>
        </Card>
    );

}

export default HardwareSet;