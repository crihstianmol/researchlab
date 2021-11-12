import React from "react";
import { Button, Paper, TextField } from "@mui/material";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import MenuItem from "@mui/material/MenuItem";
import styles from './CrearProyecto.css'

function CrearProyecto() {
  const [value, setValue] = React.useState();

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
    <Paper id="container" style={{ margin: "10px 10%", padding: "25px 50px" }}>
      <h1>Registrar Nuevo proyecto</h1>
      <br />
      <form>
        <TextField
          id="nombre-proyecto"
          label="Nombre del Proyecto"
          fullWidth
          autoComplete="off"
          margin="normal"
        />
        <TextField
          id="objetivos"
          label="Objetivos Generales"
          multiline
          maxRows={4}
          fullWidth
          autoComplete="off"
          margin="normal"
        />
        <TextField
          id="objetivos"
          label="Objetivos Especificos"
          multiline
          maxRows={4}
          fullWidth
          autoComplete="off"
          margin="normal"
        />
        <CurrencyTextField
          id="presupuesto"
          label="Presupuesto"
          fullWidth
          value={value}
          currencySymbol="$"
          variant="outlined"
          outputFormat="string"
          decimalCharacter="."
          digitGroupSeparator=","
          onChange={(event, value) => setValue(value)}
          margin="normal"
        />
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
        <TextField
          id="nombre-lider"
          label="Nombre del Lider"
          fullWidth
          autoComplete="off"
          margin="normal"
        />
        <TextField
          id="ID-lider"
          fullWidth
          label="ID del Lider"
          autoComplete="off"
          margin="normal"
        />
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

        <Button id="btn-agregar" style={{ marginTop: "20px" }} variant="contained">
          Crear Proyecto
        </Button>
      </form>
    </Paper>
  );
}

export default CrearProyecto;
