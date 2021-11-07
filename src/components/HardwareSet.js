import "./HardwareList.css"
import {Card, CardHeader, Button, CardContent} from "@mui/material";
import React, { useState } from 'react';

function HardwareSet(props){

    const [capacity, setCapacity] = useState(props.capacity);
    const [available, setAvailable] = useState(props.available);


    return (
        <Card className="hardware-card">
            <CardContent>
                <h2>{props.name}</h2>
                <h5>Capacity: {capacity}</h5>
                <h5>Available: {available}</h5>
            </CardContent>
        </Card>
    );

}

export default HardwareSet;