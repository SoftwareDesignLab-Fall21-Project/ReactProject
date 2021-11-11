import './Landing.css'
import {Button, Grid, TextField} from "@mui/material";
import React, { useState, useEffect } from 'react';


function Landing(){
    return (
        <div>
            <h1>Welcome #User</h1>
            <Grid container direction={"column"} alignItems={"center"} justify={"center"}>
                <p> Use existing project</p>
                <TextField
                    id="standard-basic"
                    label="Project Name"
                    variant="standard"/>
                <Button
                    sx={{m: 1}}
                    variant={"outlined"}
                    size={"small"}>
                    submit
                </Button>
                <p> Create new project</p>
                <TextField
                    id="standard-basic"
                    label="Project Name"
                    variant="standard"/>
                <Button
                    sx={{m: 1}}
                    variant={"outlined"}
                    size={"small"}>
                    submit
                </Button>
            </Grid>
        </div>
    );
    
}

export default Landing;