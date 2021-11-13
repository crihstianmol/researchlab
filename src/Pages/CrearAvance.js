import { Button } from "@mui/material";
import React from "react";

function CrearAvance() {
  return (
    <div className="BodyAvance">
      <Paper style={{ margin: "10px 10%", padding: "25px 50px" }}>
        <div className="vistaPrevia-prj">
          <TextField
            name="avance"
            value={value}
            label="ID avance"
            fullWidth
            autoComplete="off"
            margin="normal"
            onChange={changeHandler}
          />
          <TextField
            name="avance"
            value={value}
            label="ID del proyecto"
            fullWidth
            autoComplete="off"
            margin="normal"
            onChange={changeHandler}
          />
          <TextField
            name="fchAvance"
            value={value}
            onChange={changeHandler}
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
            value={value}
            onChange={changeHandler}
            multiline
            maxRows={4}
            fullWidth
            autoComplete="off"
            margin="normal"
          />
        </div>
        <div className="btn-agregar-avance">
          <Button>Guardar avance</Button>
        </div>
      </Paper>
    </div>
  );
}

export default CrearAvance;
