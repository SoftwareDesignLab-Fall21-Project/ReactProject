import "./HardwareList.css"
import HardwareSet from "./HardwareSet";

function HardwareList(props){

    // console.log(props.name_1);
    // console.log(props.name_2);
    // console.log(props.capacity_1);
    // console.log(props.capacity_2);
    // console.log(props.available_1);
    // console.log(props.available_2);
    

    return (
        <div className={"hardware-list"}>
            <HardwareSet
                className={"hardware-set"}
                style={{gridRow: 0}}
                name = {props.name_1}
                number = {1}
                capacity = {props.capacity_1}
                available = {props.available_1}
                projects = {props.projects}
            />
            <HardwareSet
                className={"hardware-set"}
                style={{gridRow: 1}}
                name = {props.name_2}
                number = {2}
                capacity = {props.capacity_2}
                available = {props.available_2}
                projects = {props.projects}
            />
        </div>
    );

}

export default HardwareList;