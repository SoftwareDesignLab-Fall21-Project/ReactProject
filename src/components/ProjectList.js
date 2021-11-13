import "./ProjectList.css"
import ProjectSet from "./ProjectSet";
import {useContext} from "react";
import {hwSetContext} from "../pages/HardwarePage";

function ProjectList(props){
    const projects = useContext(hwSetContext)[3];
    // console.log(props.name_1);
    // console.log(props.name_2);
    // console.log(props.capacity_1);
    // console.log(props.capacity_2);
    // console.log(props.available_1);
    // console.log(props.available_2);
    

    return (
        <div className={"project-list"}>
            <ProjectSet
                projects = {projects}
            />
        </div>
    );

}

export default ProjectList;