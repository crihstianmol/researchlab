import { Button, Paper, TextField } from "@mui/material";
import React from "react";

// Agregar descripcion avance HU_022

function CrearAvance() {
  return (
    <div className="BodyAvance">
      <Paper style={{ margin: "10px 10%", padding: "25px 50px" }}>
        <div className="vistaPrevia-prj">
          <h1>Agregar nuevo avance :</h1>
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
        </div>
        <div className="btn-agregar-avance">
          <button>Guardar avance</button>
        </div>
      </Paper>
    </div>
  );
}

export default CrearAvance;
