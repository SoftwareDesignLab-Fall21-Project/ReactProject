import "./HardwareList.css"
import HardwareSet from "./HardwareSet";

function HardwareList(){

    return (
        <div className={"hardware-list"}>
            <HardwareSet
                name = "HWSet1"
                capacity = "10"
                available = "5"
            />
            <HardwareSet
                name = "HWSet2"
                capacity = "15"
                available = "2"
            />
        </div>
    );

}

export default HardwareList;