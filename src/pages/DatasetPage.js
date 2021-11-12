import "./DatasetPage.css";
import DatasetList from "../components/DatasetList";
import axios from "axios";
import React, {useEffect, useState} from "react";

function DatasetPage(){
    const [isLoading, setLoading] = useState(true)
    const [items, setItems] = useState([])

    const fetchData = async () => {
        const result = await axios(
            'http://localhost:8080/static/datasets/dump.json',
        );

        return result;
    };


    useEffect(()=>{
        fetch('http://localhost:8080/static/datasets/dump.json',
                {"method":"GET"}
            )
            .then(response => {
                if(!response.ok)
                    throw new Error("HTTP request error: " + response.status);
                return response.json();
            })
            .then(json => {
                setItems(json);
                setLoading(false);


            });
    }, []);

    if(isLoading){
        return(
            <p>Loading...</p>
        );
    }else{
        return (
        <div>
            {DatasetList(items)}
        </div>
        );
    }
}

export default DatasetPage;