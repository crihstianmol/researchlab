import React from "react";
import { Button, Paper, TextField } from "@mui/material";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import MenuItem from "@mui/material/MenuItem";

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
    <Paper style={{ margin: "10px 10%", padding: "25px 50px" }}>
      <h1>Registrar Nuevo proyecto</h1>
      <br />
      <form>
        <TextField
          label="Nombre del Proyecto"
          fullWidth
          autoComplete="off"
          margin="normal"
        />
        <TextField
          label="Objetivos Generales"
          multiline
          maxRows={4}
          fullWidth
          autoComplete="off"
          margin="normal"
        />
        <TextField
          label="Objetivos Especificos"
          multiline
          maxRows={4}
          fullWidth
          autoComplete="off"
          margin="normal"
        />
        <CurrencyTextField
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
          id="date"
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
          id="date"
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
          label="Nombre del Lider"
          fullWidth
          autoComplete="off"
          margin="normal"
        />
        <TextField
          fullWidth
          label="ID del Lider"
          autoComplete="off"
          margin="normal"
        />
        <TextField
          margin="normal"
          id="outlined-select-currency"
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
          id="outlined-select-currency"
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

        <Button style={{ marginTop: "20px" }} variant="contained">
          Crear Proyecto
        </Button>
      </form>
    </Paper>
  );
}

export default CrearProyecto;
