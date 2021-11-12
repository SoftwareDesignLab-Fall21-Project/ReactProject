import "./ProjectList.css"
import ProjectSet from "./ProjectSet";

function ProjectList(props){

    // console.log(props.name_1);
    // console.log(props.name_2);
    // console.log(props.capacity_1);
    // console.log(props.capacity_2);
    // console.log(props.available_1);
    // console.log(props.available_2);
    

    return (
        <div className={"project-list"}>
            <ProjectSet
                projects = {props.projects}

            />
        </div>
    );

}

export default ProjectList;