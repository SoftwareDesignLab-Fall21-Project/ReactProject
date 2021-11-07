import './Landing.css'
import { Grid, TextField, Button } from '@material-ui/core';


function Landing(){
    return (
        <div>
            <Grid container
              direction = "column"
              alignItems="center"
              justify="center"
              style={{ minHeight: "100vh"}}
            >
                <Login />
            </Grid>
        </div>
    );
}

const Login = () => {
    return (
        <div>
            <Grid container
                  direction = "column"
                  alignItems="center"
                  justify="center"
                  style={{ minHeight: "100vh"}}
            >
                <TextField
                    margin={"normal"}
                    id="outlined-basic"
                    label="Username"
                    variant="outlined" />
                <TextField
                    margin={"normal"}
                    id="outlined-basic"
                    label="Password"
                    variant="outlined" />
                <Button size={"large"} variant={"contained"} color={"primary"}>
                    Log in.
                </Button>
                Landing page.
            </Grid>
        </div>
    );
}

export default Landing;