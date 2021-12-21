import React, {useState,useEffect} from 'react'
import "./EditProyectosPopUp.css"
import { Button } from "@mui/material"
import { styled } from "@mui/material/styles"
import { Paper, TextField } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import "./EditObjectives.css"

const ColorButton = styled(Button)({
    backgroundColor: "#fff",
    color:"#000",
  });

const HeadRow = styled(TableRow)({
  backgroundColor: "#C8D6CF",
});

const EditObjectives = ({ isOpen, close, project,specObj,genObj}) => {
    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    };

    useEffect(() => {
    }, [isOpen]);

    const printGenObs = () => {
      if (genObj[project._id]) {
        return genObj[project._id].map((obj) => (
          <TableRow
            key={obj.id}
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
            }}
          >
            <TableCell component="th" scope="row">
              {obj.user}
            </TableCell>
            <TableCell align="right">
              {obj.objective}
            </TableCell>
            <TableCell align="right">
              <IconButton aria-label="edit" onClick={()=>close(project,obj,true,"general")}>
                <EditIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ));
      }
    };

    const printSpecObs = () => {
      if (specObj[project._id]) {
        return specObj[project._id].map((obj) => (
          <TableRow
            key={obj.id}
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
            }}
          >
            <TableCell component="th" scope="row">
              {obj.user}
            </TableCell>
            <TableCell align="right">
              {obj.objective}
            </TableCell>
            <TableCell align="right">
              <IconButton aria-label="edit" onClick={()=>close(project,obj,true,"especifico")}>
                <EditIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ));
      }
    };
    

    return (
      <>
        <div
          className={`pop-modal-back ${isOpen && "pop-modal-open"}`}
          onClick={() => close()}
        >
          <div className="pop-modal__dialog" onClick={handleModalDialogClick}>
            <div className="pop-update-box">
              <div className="pop-update-label pop-title">
                <div className="pop-titleCloseBtn">
                  <button onClick={() => close()}>X</button>
                </div>
                <div className="pop-label-title">
                  <label>
                    {"Id del Proyecto: " + project._id}
                  </label>
                </div>
              </div>
              <div className="pop-update-label pop-body-edit">
                <h3 className="pop-table-title">Objetivos Generales</h3>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <HeadRow>
                        <TableCell>Usuario</TableCell>
                        <TableCell align="right">Objetivo</TableCell>
                        <TableCell align="right">Edit</TableCell>
                      </HeadRow>
                    </TableHead>
                    <TableBody>
                      {printGenObs()}
                    </TableBody>
                  </Table>
                </TableContainer>
                <div className="pop-projectbutton">
                  <ColorButton
                    variant="contained"
                    onClick={() => close(project,null,true,"general")}
                  >
                    Añadir Objetivo
                  </ColorButton>
                </div>
                <h3 className="pop-table-title">Objetivos Especificos</h3>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <HeadRow>
                        <TableCell>Usuario</TableCell>
                        <TableCell align="right">Objetivo</TableCell>
                        <TableCell align="right">Edit</TableCell>
                      </HeadRow>
                    </TableHead>
                    <TableBody>
                      {printSpecObs()}
                    </TableBody>
                  </Table>
                </TableContainer>
                <div className="pop-projectbutton">
                  <ColorButton
                    variant="contained"
                    onClick={() => close(project,null,true,"especifico")}
                  >
                    Añadir Objetivo
                  </ColorButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default EditObjectives;