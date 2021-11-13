import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Registro from "./components/Registro/Registro";
import "./App.css";
import Home from "./Pages/Home";
import ActualizarPerfil from "./components/ActualizarPerfil/ActualizarPerfil";
import Proyectos from "./Pages/Proyectos";
import MisProyectos from "./Pages/MisProyectos";
import CrearProyecto from "./Pages/CrearProyecto";
import GestionUsuarios from "./Pages/GestionUsuarios";
import AdminProyectos from "./Pages/AdminProyectos";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";


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
       
          <Route path="/ActualizarPerfil" element={<><Sidebar /> <ActualizarPerfil /><Footer /></>}></Route>
          <Route path="/Proyectos" element={<><Header /><Sidebar /><Proyectos /><Footer /></>}></Route>
          <Route path="/MisProyectos" element={<><Header /><Sidebar /><MisProyectos /><Footer /> </>}></Route>
          <Route path="/CrearProyecto" element={<><Header /><Sidebar /> <CrearProyecto /><Footer /></>}></Route>
          <Route path="/GestionUsuarios" element={<><Header /><Sidebar/><GestionUsuarios /><Footer /></>}></Route>
          <Route path="/AdminProyectos" element={<><Header /> <Sidebar/><AdminProyectos /><Footer /></>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
