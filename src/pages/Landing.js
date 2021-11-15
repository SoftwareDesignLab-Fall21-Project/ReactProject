import './Landing.css'
import React, {useContext} from 'react';
import {Card, Button, CardContent, TextField, Grid} from "@mui/material";
import {signedInContext} from "../App";


function Landing(){
    const user = useContext(signedInContext)[3];

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

            <Grid container direction={"column"} alignItems={"center"} justify={"center"}>
                <div className={"card-container"}>
                    <h1>Welcome {user}</h1>
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
                </div>
            </Grid>
        </div>
    );
    
}

export default Landing;