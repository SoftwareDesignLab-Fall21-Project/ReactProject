import "./ProjectList.css"
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from "@mui/material";
import React, { useState, useEffect } from 'react';

function ProjectSet(props){

    const [projects, setProjects] = useState(props.projects);

    /*
    function createData(Name, HardwareSet1, HardwareSet2) {
        return { Name, HardwareSet1, HardwareSet2};
      }
      
      const projects = [
        createData('Project A', 0, 0),
        createData('Project B', 0, 0),
      ];
      */


    return (
    <TableContainer component={Paper} className = "project-table">
      <Table sx={{ minWidth: 650 }} size = "small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell align="right">HardwareSet1 qty.</TableCell>
            <TableCell align="right">HardwareSet2 qty.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((projects) => (
            <TableRow
              key={projects.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {projects.Name}
              </TableCell>
              <TableCell align="right">{projects.HardwareSet1}</TableCell>
              <TableCell align="right">{projects.HardwareSet2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );

}

export default ProjectSet;