import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Registro from "./components/Registro/Registro";
import "./App.css";
import Home from "./Pages/Home";
import ActualizarPerfil from "./components/ActualizarPerfil/ActualizarPerfil";
import Proyectos from "./Pages/Proyectos";
import CrearProyecto from "./components/Liderproyectos/CrearProyecto";
import GestionUsuarios from "./components/GestionUsuarios/GestionUsuarios";
import AdminProyectos from "./components/AdminProyectos/AdminProyectos";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import ListaInscritos from "./components/Liderproyectos/ListaInscritos";
import ProyectosStudent from "./components/EstdProyectos/ProyectosStudent";
import EditarProyectos from "./components/EditProyectos/EditProyectos";
import ProyectosLiderados from "./Pages/ProyectosLiderados";



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
       
          <Route path="/ActualizarPerfil" element={<><Header /><div className="body-container"> <Sidebar /> <ActualizarPerfil /></div><Footer /></>}></Route>
          <Route path="/Proyectos" element={<><Header /><div className="body-container"><Sidebar /><Proyectos /></div><Footer /></>}></Route>
          <Route path="/MisProyectos" element={<><Header /><div className="body-container"><Sidebar /><ProyectosStudent /> </div><Footer /> </>}></Route>
          <Route path="/CrearProyecto" element={<><Header /><div className="body-container"><Sidebar /> <CrearProyecto /></div><Footer /></>}></Route>
          <Route path="/GestionUsuarios" element={<><Header /><div className="body-container"><Sidebar/><GestionUsuarios /></div><Footer /></>}></Route>
          <Route path="/AdminProyectos" element={<><Header /> <div className="body-container"><Sidebar/><AdminProyectos /></div><Footer /></>}></Route>
          <Route path="/ListaInscritos" element={<><Header /> <div className="body-container"><Sidebar/><ListaInscritos /></div><Footer /></>}></Route>
          <Route path="/EditarProyectos" element={<><Header /> <div className="body-container"><Sidebar/><EditarProyectos /></div><Footer /></>}></Route>
          <Route path="/proyectosliderados" element={<><Header /> <div className="body-container"><Sidebar /> <ProyectosLiderados /> </div><Footer /></>}></Route>
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
