import React from "react";
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./ActualizarPerfil.css";

// Actualizar perfil  HU_003

const ColorButton = styled(Button)({
  backgroundColor: "#0f084b",
});

function ActualizarPerfil() {
  return (
    <div className="act-perf-container">
      <div className="act-perf-paper">
        <h1 className="act-perf-title">Actualizar perfil : </h1>
        <TextField
          required
          id="email"
          label="Email"
          margin="normal"
          margin="normal"
        />
        <TextField
          required
          id="ident"
          label="Identificación"
          margin="normal"
        />
        <TextField
          required
          id="name"
          label="Nombre Completo"
          margin="normal"
        />
        <TextField
          required
          id="password"
          type="password"
          label="Contraseña"
          margin="normal"
        />
        <div className="act-perf-button-cont">
          <ColorButton variant="contained">Guardar Cambios</ColorButton>
        </div>
      </div>
    </div>
  );
}

export default ActualizarPerfil;
