import React from "react";
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./ActualizarPerfil.css";

const ColorButton = styled(Button)({
  backgroundColor: "#0f084b",
});

function ActualizarPerfil() {
  return (
    <div className="act-perf-container">
      <div className="act-perf-paper">
        <h1 className="act-perf-title">Actualizar Perfil</h1>
        <TextField
          required
          id="email"
          label="Email"
          variant="standard"
          margin="normal"
        />
        <TextField
          required
          id="ident"
          label="Identificación"
          variant="standard"
        />
        <TextField
          required
          id="name"
          label="Nombre Completo"
          variant="standard"
        />
        <TextField
          required
          id="password"
          type="password"
          label="Contraseña"
          variant="standard"
        />
        <div className="act-perf-button-cont">
          <ColorButton variant="contained">Guardar Cambios</ColorButton>
        </div>
      </div>
    </div>
  );
}

export default ActualizarPerfil;
