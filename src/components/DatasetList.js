import "./DatasetList.css"
import React from "react";
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {GridRenderCellParams} from "@mui/x-data-grid";
import {IconButton, Tooltip} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import {blue} from '@mui/material/colors';

const columns: GridColDef[] = [
    { field: 'title', headerName: 'Title', width: 150, flex: 0.2, renderCell: (params: GridRenderCellParams<string>) => (
        <Tooltip title={params.value} placement="top-start">
            <div>{params.value}</div>
        </Tooltip>
        )},
    { field: 'description', headerName: 'Description', flex: 1, renderCell: (params: GridRenderCellParams<string>) => (
        <Tooltip title={params.value} placement="top-start">
            <div>{params.value}</div>
        </Tooltip>

        )},
    { field: 'size', headerName: 'Size', width: 150, renderCell: (params: GridRenderCellParams<string>) => (
        <Tooltip title={params.value[0]} placement="top-start">
            <div>{params.value[1]}</div>
        </Tooltip>

        )},
    { field: 'link', headerName: 'Link', width: 150, renderCell: (params: GridRenderCellParams<string>) => (
        <IconButton href={params.value}>
            <DownloadIcon sx={{ color: blue['800'] }}/>
        </IconButton>
        )},
];

function DatasetList(items){

    let rows  = [];
    items["datasets"].forEach((item, i)=> {
        rows.push({
            id: i,
            title: item["title"],
            description: item["description"],
            size: [item["file_size"] + " bytes", item["file_size_human"]],
            link: item["file_url"]
        });
    });

    // const clickHandler = (event) => {
    //     console.log("click!");
    // };

    return(
        <div className="dataset-list-container">
            <DataGrid rows={rows}
                      columns={columns}
                      // componentsProps={{
                      //     row: {
                      //       onMouseOver: clickHandler,
                      //     },
                      // }}
                      className="dataset-list"
                      pageSize={10}
                      rowsPerPageOptions={[10]}
            />
        </div>
    );
}

export default DatasetList;