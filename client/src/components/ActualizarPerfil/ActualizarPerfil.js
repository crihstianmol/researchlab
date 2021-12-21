import React from "react";
import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./ActualizarPerfil.css";
import { updateUserName, updateUserLastName, updateUserDNI, updateUserEmail, updateUserPass } from "../../modules/Users";
// Actualizar perfil  HU_003

const ColorButton = styled(Button)({
  backgroundColor: "#0f084b",
});

function ActualizarPerfil() {
  const [values, setValues] = React.useState({
    name: "",
    lastName: "",
    dni: "",
    email: "",
    password: ""
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const updateUser = () => {
    let { name, lastName, dni, email, password } = values
    if (name !== "") {
      updateUserName(localStorage.getItem('id'),name)
    }
    if (lastName !== "") {
      updateUserLastName(localStorage.getItem('id'),lastName)
    }
    if (dni !== "") {
      updateUserDNI(localStorage.getItem('id'),dni)
    }
    if (email !== "") {
      updateUserEmail(localStorage.getItem('id'),email)
    }
    if (password !== "") {
      updateUserPass(localStorage.getItem('id'),password)
    }
  }

  return (
    <div className="act-perf-container">
      <div className="act-perf-paper">
        <h1 className="act-perf-title">Actualizar perfil : </h1>
        <TextField
          required
          id="name"
          label="Nombres"
          margin="normal"
          value={values.name}
          onChange={handleChange("name")}
        />
        <TextField
          required
          id="name"
          label="Apellidos"
          margin="normal"
          value={values.lastName}
          onChange={handleChange("lastName")}
        />
        <TextField
          required
          id="ident"
          label="Identificación"
          margin="normal"
          value={values.dni}
          onChange={handleChange("dni")}
        />
        <TextField
          required
          id="email"
          label="Email"
          margin="normal"
          margin="normal"
          value={values.email}
          onChange={handleChange("email")}
        />
        <TextField
          required
          id="password"
          type="password"
          label="Contraseña"
          margin="normal"
          value={values.password}
          onChange={handleChange("password")}
        />
        <div className="act-perf-button-cont">
          <ColorButton onClick={updateUser} variant="contained">Guardar Cambios</ColorButton>
        </div>
      </div>
    </div>
  );
}

export default ActualizarPerfil;
