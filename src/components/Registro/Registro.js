import { Paper, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Footer from "../../Pages/Footer";
import "./Registro.css";

function Registro() {
  const rol = [
    {
      value: "estudiante",
      label: "Estudiante",
    },
    {
      value: "lider",
      label: "Lider",
    },
    {
      value: "administrador",
      label: "Administrador",
    },
  ];
  return (
    <div className="contenedor-registro" >
    <Paper className="form-registro">
      <h1>Formulario de Registro</h1>
      <TextField
        name="nombreUsuario"
        label="Ingrese su nombre:"
        fullWidth
        autoComplete="off"
        margin="normal"
      />
      <TextField
        name="apellidoUsuario"
        label="Ingrese su apellido:"
        fullWidth
        autoComplete="off"
        margin="normal"
      />
      <TextField
        name="dniUsuario"
        label="Ingrese su DNI:"
        fullWidth
        autoComplete="off"
        margin="normal"
      />
      <TextField
        name="emailUsuario"
        label="Ingrese su correo electronico:"
        fullWidth
        autoComplete="off"
        margin="normal"
      />
      <TextField
        name="claveUsuario"
        label="Cree una contraseña:"
        fullWidth
        autoComplete="off"
        margin="normal"
      />

      <div className="cmb-box-selcc-rol">
        <TextField
          margin="normal"
          id="slcc-rol"
          select
          label="Seleccion del Rol:"
          value={rol}
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
        <button>Registrarse</button>
      </div>
    </Paper>
    <div>
      <Footer/>
    </div>
    </div>
  );
}

export default Registro;
