import React, { useState } from "react";
import { Button, Paper, TextField } from "@mui/material";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import MenuItem from "@mui/material/MenuItem";
import "./CrearProyecto.css";

function CrearProyecto() {
  const [proyecto, setProyecto] = useState({
    nombreProyecto: "",
    objGenerales: "",
    objEspecificos: "",
    presupuesto: "",
    fchInicio: "",
    fchFinal: "",
    nombreLider:"",
    idLider:"",

  });
  function changeHandler(event){
    const {name, value} = event.target
    setProyecto(preValues => {
      return{
        ...preValues,
        [name]: value

      }
    })

  }
  console.log(proyecto);

  // Encontre esta es la funcion para el input de la fecha
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  // Encontre que esta es la funcion para establecer capturar el valor monetario ingresado
  const [value, setValue] = React.useState(100);

  // estas const definen las opciones de los combo box de fase y estado

  const projectStatus = [
    {
      value: "Activo",
      label: "Activo",
    },
    {
      value: "inactivo",
      label: "Inactivo",
    },
  ];

  const projectStage = [
    {
      value: "Iniciado",
      label: "Inciado",
    },
    {
      value: "En desarrollo",
      label: "En desarrollo",
    },
    {
      value: "Terminado",
      label: "Terminado",
    },
  ];

  return (
    <div className="form-container">
      <Paper style={{ margin: "10px 10%", padding: "25px 50px" }}>
        <div className="container-title">
          <h1>Registrar Nuevo proyecto</h1>
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
              label="Objetivos Generales"
              name="objGenerales"
              value={proyecto.objGenerales}
              onChange={changeHandler}
              multiline
              maxRows={4}
              fullWidth
              autoComplete="off"
              margin="normal"
            />
            <TextField
              label="Objetivos Especificos"
              name="objEspecificos"
              value={proyecto.objEspecificos}
              onChange={changeHandler}
              multiline
              maxRows={4}
              fullWidth
              autoComplete="off"
              margin="normal"
            />
            <CurrencyTextField
              label="Presupuesto"
              fullWidth
              name="presupuesto"
              value={value}
              currencySymbol="$"
              variant="outlined"
              outputFormat="string"
              decimalCharacter="."
              digitGroupSeparator=","
              onChange={(event, value) => setValue(value)}
              margin="normal"
            />
            <div className="Fch-inicio">
            <TextField
                id="fecha"
                label="Fecha de Inicio"
                type="date"
                defaultValue="2017-05-24"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              />
            </div>
            <div className="Fch-final">
              <TextField
                id="fecha"
                label="Fecha de terminacion"
                type="date"
                defaultValue="2017-05-24"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              />
            </div>
            <TextField
              label="Nombre del Lider"
              name="nombreLider"
              value={proyecto.nombreLider}
              onChange={changeHandler}
              fullWidth
              autoComplete="off"
              margin="normal"
            />
            <TextField
              fullWidth
              label="ID del Lider"
              name="idLider"
              value={proyecto.idLider}
              onChange={changeHandler}
              autoComplete="off"
              margin="normal"
            />
            <div className="cmb-box-est-prj">
              <TextField
                margin="normal"
                id="estado-proyecto"
                select
                label="Estado del Proyecto"
                value={projectStatus}
                helperText="Seleccione el estado del Proyecto"
              >
                {projectStatus.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="cmb-box-fase-prj">
              <TextField
                margin="normal"
                id="fase-proyecto"
                select
                label="Fase del Proyecto"
                value={projectStage}
                helperText="Seleccione la fase del proyecto"
              >
                {projectStage.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <div className="btn-crear-proyecto">
              <Button
                id="btn-agregar"
                style={{ marginTop: "20px" }}
                variant="contained"
              >
                Crear Proyecto
              </Button>
            </div>
          </form>
        </div>
      </Paper>
    </div>
  );
}

export default CrearProyecto;
