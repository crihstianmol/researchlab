import React from "react";
import { outlinedInputClasses, Paper, TextField } from "@mui/material";
import './avance.css'


// Añadir sus observaciones a dicho avance (HU_018)

// Por favor tener en cuenta que todos los textfields son outputs , el unico input seria la descripcion.

export const AgregarObservacion = () => {
  return (
    <div className="BodyAvance">
      <Paper style={{ margin: "10px 10%", padding: "25px 50px" }}>
        <div className="vistaPrevia-prj">
          <h1>Agregar observacion al avance :</h1>
          <TextField
            name="avance"
            // value={value}
            label="ID avance"
            fullWidth
            autoComplete="off"
            margin="normal"
            // onChange={changeHandler}
          />
          <TextField
            name="avance"
            // value={value}
            label="ID del proyecto"
            fullWidth
            autoComplete="off"
            margin="normal"
            // onChange={changeHandler}
          />
          <TextField
            name="fchAvance"
            // value={value}
            // onChange={changeHandler}
            label="Fecha del Avance"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            label="Descripcion del avance:"
            name="DespAvance"
            // value={value}
            // onChange={changeHandler}
            multiline
            maxRows={4}
            fullWidth
            autoComplete="off"
            margin="normal"
          />

          <TextField
            label="Observacion del avance:"
            name="ObsAvance"
            // value={value}
            // onChange={changeHandler}
            multiline
            maxRows={4}
            fullWidth
            autoComplete="off"
            margin="normal"
          />
        </div>
        <div className="btn-Obs-avance">
          <button>Guardar Observacion</button>
        </div>
      </Paper>
    </div>
  );
};
