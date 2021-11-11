import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <button><Link to="/Home">Entrar a Home (Test Porpuses)</Link></button>
      <button><Link to="/Registro">Entrar a Registro (Test Porpuses)</Link></button>
    </div>
  );
}

export default Login;
