import { Paper, TextField } from "@mui/material";
import React from "react";
import './EditarAvance.css'

function EditarAvance() {
  return (
    <div>
      <Paper className="avance-container">
        <div className="vistaPrevia">
          <h2>Editar avance :</h2>
          <label>ID avance</label>
          <label>ID proyecto</label>
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
        <div className="btn-guardar-cambios">
          <button>Guardar Cambios</button>
        </div>
      </Paper>
    </div>
  );
}
export default EditarAvance;
