import React, {useState, useEffect} from 'react';
import "./HardwarePage.css";
import HardwareList from "../components/HardwareList";

function HardwarePage(){

    const [capacity, setCapacity] = useState([])

    useEffect(()=>{
        fetch('/hwcapacity', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          }).then(response =>{
            if(response.ok){
                return response.json()
            }
        }).then(data => console.log(data))
    },[])

    return (
        <div>
            <div>Hardware page</div>
            <HardwareList/>
        </div>
    );
}

export default HardwarePage;