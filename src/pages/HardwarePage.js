import React, {useState, useEffect} from 'react';
import "./HardwarePage.css";
import HardwareList from "../components/HardwareList";
import axios from 'axios';
import ProjectList from '../components/ProjectList';

function HardwarePage(){

    //hardware sets
    const [name_1, setName_1] = useState([])
    const [capacity_1, setCapacity_1] = useState([])
    const [available_1, setAvailable_1] = useState([])
    const [name_2, setName_2] = useState([])
    const [capacity_2, setCapacity_2] = useState([])
    const [available_2, setAvailable_2] = useState([])
    const [isLoading, setLoading] = useState(true)

    //projects
    const [projects, setProjects] = useState([])

    // useEffect(()=>{
    //     fetch('/hwcapacity', {
    //         headers : { 
    //           'Content-Type': 'application/json',
    //           'Accept': 'application/json'
    //          }
      
    //       }).then(response =>{
    //         if(response.ok){
    //             return response.json()
    //         }
    //     }).then(data => console.log(data))
    // },[])

    useEffect(()=>{

        console.log('got here');
        const fetchData = async () => {
            const result = await axios(
                '/get-hardware',
            );
            console.log('got here');
            console.log(result);

            return result;
        };
        fetchData().then(
            function(response){
                console.log(response);
                setName_1(response.data.hardware[0]['Name']);
                setCapacity_1(response.data.hardware[0]['Capacity']);
                setAvailable_1(response.data.hardware[0]['Available']);
                setName_2(response.data.hardware[1]['Name']);
                setCapacity_2(response.data.hardware[1]['Capacity']);
                setAvailable_2(response.data.hardware[1]['Available']);

                //projects
                setProjects(response.data.projects);

                setLoading(false);
            }
        )
    }, []);

    if(isLoading){
        return(
            <p>Loading...</p>
        );
    }else{
        return (
        <div>
            <HardwareList
                name_1 = {name_1}
                name_2 = {name_2}
                capacity_1 = {capacity_1}
                capacity_2 = {capacity_2}
                available_1 = {available_1}
                available_2 = {available_2}
            />
            <ProjectList
                projects = {projects}
            />
        </div>
    );
    }

    
}

export default HardwarePage;