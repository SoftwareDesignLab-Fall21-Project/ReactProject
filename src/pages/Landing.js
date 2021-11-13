import './Landing.css'
import React, { useState, useEffect } from 'react';
import {Card, CardHeader, Button, CardContent, TextField, Grid} from "@mui/material";
import axios from 'axios';


function Landing(){

    const [user, setUser] = useState("");
    // const [projectName, setProjectName] = useState("");
    //
    // const updateProjectName = (Event) => {
    //     setProjectName(Event.target.value);
    // };

    const createProject = (Event) => {
        Event.preventDefault();
        const data = new FormData(Event.target);

        fetch('/create-project', {
          method: 'POST',
          body: data,
        }).then((response) => {
            console.log(response);
        });
    };


    return (
        <div>
            <h1>Welcome {user}</h1>
            <Grid container direction={"column"} alignItems={"center"} justify={"center"}>
                {/* <p> Use existing project</p>
                <TextField
                    id="standard-basic"
                    label="Project Name"
                    variant="standard"/>
                <Button
                    sx={{m: 1}}
                    variant={"outlined"}
                    size={"small"}>
                    submit
                </Button> */}
                <Card>
                    <CardContent>
                        <div className="spacing-2">
                            <p> Create new project</p>
                        </div>
                        <div className="spacing-1">
                            <form onSubmit={createProject}>
                                <div className="centered-form-element"><TextField
                                    id="standard-basic"
                                    label="Project Name"
                                    variant="standard"
                                    name="project_name"/>
                                </div>
                                <div className="centered-form-element"><TextField
                                    id="standard-basic"
                                    label="Project Description"
                                    variant="standard"
                                    name="project_description"/>
                                </div>
                                <div className="centered-form-element"><TextField
                                    id="standard-basic"
                                    label="Project ID"
                                    variant="standard"
                                    name="project_id"/>
                                </div>
                                <div className="centered-form-element" style={{marginTop: "10%"}}>

                                    <Button
                                        sx={{m: 1}}
                                        variant={"outlined"}
                                        size={"small"}
                                        type="submit">
                                        Create
                                    </Button>
                                </div>

                            </form>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
    
}

export default Landing;