import { Paper, TextField } from "@mui/material";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Footer from "../../Pages/Footer";
import "./Registro.css";

// H1 Registro

function Registro() {
  const rol = [
    {
      value: "Estudiante",
      label: "Estudiante",
    },
    {
      value: "Lider",
      label: "Lider",
    },
    {
      value: "Admin",
      label: "Administrador",
    },
  ];

  const [values, setValues] = React.useState({
    name: "",
    lastName: "",
    DNI: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const regUser = () => {
    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        mutation CreateUser($email: String!, $dni: String!, $name: String!, $lastName: String!, $password: String!, $role: Enum_userRol!) {
          createUser(email: $email, DNI: $dni, name: $name, lastName: $lastName, password: $password, role: $role) {
            _id
          }
        }
      `,
        variables: {
          email: values.email,
          dni: values.DNI,
          name: values.name,
          lastName: values.lastName,
          password: values.password,
          role: values.role
        },
      }),
    }).then(res => res.json())
    .catch((error) => {
      console.error("There is an error:", error)
    })
    .then((response) => {
      console.info("Success:", response)
    })
  }
  return (
    <div className="contenedor-registro" >
      <Paper className="form-registro">
        <h1>Formulario de Registro</h1>
        <TextField
          name="nombreUsuario"
          label="Ingrese su nombre:"
          fullWidth
          value={values.name}
          onChange={handleChange("name")}
          autoComplete="off"
          margin="normal"
        />
        <TextField
          name="apellidoUsuario"
          label="Ingrese su apellido:"
          fullWidth
          value={values.lastName}
          onChange={handleChange("lastName")}
          autoComplete="off"
          margin="normal"
        />
        <TextField
          name="dniUsuario"
          label="Ingrese su DNI:"
          fullWidth
          value={values.DNI}
          onChange={handleChange("DNI")}
          autoComplete="off"
          margin="normal"
        />
        <TextField
          name="emailUsuario"
          label="Ingrese su correo electronico:"
          fullWidth
          value={values.email}
          onChange={handleChange("email")}
          autoComplete="off"
          margin="normal"
        />
        <TextField
          name="claveUsuario"
          label="Cree una contraseña:"
          fullWidth
          value={values.password}
          onChange={handleChange("password")}
          autoComplete="off"
          margin="normal"
        />

        <div className="cmb-box-selcc-rol">
          <TextField
            margin="normal"
            id="slcc-rol"
            select
            label="Seleccion del Rol:"
            value={values.role ? values.role : ''}
            onChange={handleChange("role")}
            helperText="Seleccione su rol correspondiente"
          >
            {rol.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div className="btn-registrarse">
          <button onClick={regUser}>Registrarse</button>
        </div>
      </Paper>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Registro;
