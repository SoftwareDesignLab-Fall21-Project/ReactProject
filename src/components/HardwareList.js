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
                name = {props.name_1}
                capacity = {props.capacity_1}
                available = {props.available_1}
            />
            <HardwareSet
                name = {props.name_2}
                capacity = {props.capacity_2}
                available = {props.available_2}
            />
        </div>
    );

}

export default HardwareList;