import React from "react";
import { Paper, TextField } from "@mui/material";
import './ObsAvance.css'



// Añadir sus observaciones a dicho avance (HU_018)

// Por favor tener en cuenta que todos los textfields son outputs , el unico input seria la descripcion.

export const AgregarObservacion = () => {
  return (
    <div className="BodyAvance">
      <Paper  className= "contenedor-avance" style={{ margin: "10px 10%", padding: "25px 50px" }}>
        <div className="vistaPrevia-avance">
          <h2>Agregar observacion al avance :</h2>
          <label>ID Avance:</label>
          <label>ID del proyecto:</label>
          <label>Fecha de avance:</label>
          <label>Descripcion del avance</label>
         
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
