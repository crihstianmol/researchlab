import React, { useState, useEffect } from "react";
import { Button, Paper, TextField } from "@mui/material";
import {listUsers} from "../../modules/Users"
import { styled } from "@mui/material/styles";
import {regProject} from "../../modules/Projects"
import "./CrearProyecto.css";

// Creacion de proyecto HU_012
const ColorButton = styled(Button)({
  backgroundColor: "#0f084b",
});


function CrearProyecto() {

  useEffect(() => {
    listUsers({_id:localStorage.getItem('id') !== undefined && localStorage.getItem('id') !== null ? localStorage.getItem('id') : ''})
    .then((res) => {
      setLeaderName(res[0].name)
    })
  }, []);

  const [proyecto, setProyecto] = useState({
    nombreProyecto: "",
    presupuesto: "",
    fchInicio: "",
    fchFinal: "",
  });
  function clickHandler() {
    regProject(proyecto.nombreProyecto,parseFloat(proyecto.presupuesto),proyecto.fchInicio,proyecto.fchFinal,leaderId,leaderName)
    .then(res => console.log(res))
    setProyecto({
      nombreProyecto: "",
      presupuesto: "",
      fchInicio: "",
      fchFinal: "",
    });
  }
  function changeHandler(event) {
    const { name, value } = event.target;
    setProyecto((preValues) => {
      return {
        ...preValues,
        [name]: value,
      };
    });
  }

  // estas const definen las opciones de los combo box de fase y estado
  const [leaderId, setLeaderId] = useState(localStorage.getItem('id') !== undefined && localStorage.getItem('id') !== null ? localStorage.getItem('id') : '')
  const [leaderName, setLeaderName] = useState("")



  return (
    <div className="form-container">
      <Paper
        className="prj-container"
        style={{ margin: "10px 10%", padding: "25px 50px" }}
      >
        <div className="container-title">
          <h1>Registrar nuevo proyecto : </h1>
          <br />
        </div>
        <div className="form-items">
          <form>
            <TextField
              name="nombreProyecto"
              value={proyecto.nombreProyecto}
              label="Nombre del Proyecto"
              fullWidth
              autoComplete="off"
              margin="normal"
              onChange={changeHandler}
            />
            <TextField
              label="Presupuesto"
              fullWidth
              name="presupuesto"
              autoComplete="off"
              variant="outlined"
              margin="normal"
              value={proyecto.presupuesto}
              onChange={changeHandler}
              type="number"
            />
            <div className="Fch-inicio">
              <TextField
                name="fchInicio"
                value={proyecto.fchInicio}
                onChange={changeHandler}
                label="Fecha de Inicio"
                type="date"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              />
            </div>
            <div className="Fch-final">
              <TextField
                name="fchFinal"
                value={proyecto.fchFinal}
                onChange={changeHandler}
                label="Fecha de terminacion"
                type="date"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              />
            </div>

            <div className="btn-crear-proyecto">
              <ColorButton variant="contained" onClick={() => clickHandler()}>
                Crear
              </ColorButton>
            </div>
          </form>
        </div>
      </Paper>
    </div>
  );
}

export default CrearProyecto;
