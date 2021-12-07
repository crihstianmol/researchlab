import { Link } from "react-router-dom";
import LoginImage from "../../assets/images/loginImage.png";
import Header from "../../Pages/Header";
import Footer from "../../Pages/Footer";
import "./Login.css";
import React from "react";
import { Button, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// Ventana de Login  HU_002

function Login() {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-container-body">
      <Header />
      <div className="login-container">
        <div className="login-image-container">
          <img src={LoginImage} width="600" height="600" />
        </div>
        <div className="login-form-container">
          <div className="login-card">
            <br/>
            <h4>Iniciar sesión</h4>
            <form>
              <div className="input-container">
                <TextField
                  id="login-email"
                  label="Correo electrónico:"
                  fullWidth
                  autoComplete="off"
                  type={values.email ? "text" : "email"}
                  value={values.email}
                  onChange={handleChange("email")}
                  margin="normal"
                />
              </div>

              {/* Password input */}

              <div className="password-container">
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    fullWidth
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? (
                            <VisibilityOff fontSize="small" />
                          ) : (
                            <Visibility fontSize="small" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </div>

              {/* Botones */}
              <div className="btn-container">
                <div className="btn-login">
                  <button> Iniciar sesión </button>
                </div>
                <div className="btn-Registro">
                  <button> Registrarse</button>
                </div>
              </div>
              <label>¿Olvidó su contraseña?</label>
            </form>
          </div>
        </div>
      </div>

      {/*   <h1>Login</h1>
      <button><Link to="/Home">Entrar a Home (Test Porpuses)</Link></button>
      <button><Link to="/Registro">Entrar a Registro (Test Porpuses)</Link></button> */}
      <Footer />
    </div>
  );
}

export default Login;
