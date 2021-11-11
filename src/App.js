import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Registro from "./components/Registro/Registro";
import "./App.css";
import Home from "./Pages/Home";
import ActualizarPerfil from "./Pages/ActualizarPerfil";
import Proyectos from "./Pages/Proyectos";
import MisProyectos from "./Pages/MisProyectos";
import CrearProyecto from "./Pages/CrearProyecto";
import GestionUsuarios from "./Pages/GestionUsuarios";
import AdminProyectos from "./Pages/AdminProyectos";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registro" element={<Registro />}></Route>
          <Route path="/Home" element={<Home />}></Route>


          {/* Sidebar Routes */}
          <Route path="/ActualizarPerfil" element={<><Sidebar /> <ActualizarPerfil /></>}></Route>
          <Route path="/Proyectos" element={<><Sidebar /><Proyectos /></>}></Route>
          <Route path="/MisProyectos" element={<><Sidebar /><MisProyectos /> </>}></Route>
          <Route path="/CrearProyecto" element={<><Sidebar /> <CrearProyecto /></>}></Route>
          <Route path="/GestionUsuarios" element={<><Sidebar/><GestionUsuarios /></>}></Route>
          <Route path="/AdminProyectos" element={<> <Sidebar/><AdminProyectos /></>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
