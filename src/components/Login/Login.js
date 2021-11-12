import { Link } from "react-router-dom";
import LoginImage from '../../assets/images/loginImage.png';
import Header from '../../Pages/Header'
import Footer from '../../Pages/Footer'
import "./Login.css";

function Login() {
  return (
    <div className="login-container-body">
      <Header/>
      <div className="login-container">       
      <div className="login-image-container">
        <img src={LoginImage} width="600" height="600"/>
      </div>
      <div className="login-form-container">
        <div className="login-card">
          <h4>Iniciar sesión</h4>
          <form>
            <div className="input-container">
              <label>Usuario</label>
              <input type="text" placeholder="Ingrese el usuario"/>
            </div>
            <div className="input-container">
              <label>Contraseña</label>
              <input type="password" placeholder="Ingrese la contraseña"/>
            </div>
            <div className="input-container">
              <button type="password" placeholder="Ingrese la contraseña">Iniciar sesión</button>
            </div>
            <div className="input-container">
              <button type="password" placeholder="Ingrese la contraseña">Registrarse</button>
            </div>
            <label>¿Olvidó su contraseña?</label>
          </form>
        </div>
      </div>
        </div>

    {/*   <h1>Login</h1>
      <button><Link to="/Home">Entrar a Home (Test Porpuses)</Link></button>
      <button><Link to="/Registro">Entrar a Registro (Test Porpuses)</Link></button> */}
      <Footer/>
    </div>
  );
}

export default Login;
