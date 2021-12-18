import { Button, Modal, Paper } from "@mui/material";
import React, { useState } from "react";
import "./Proyectos.css";
import '../components/EstdProyectos/inscripciones.css'

// HU_019:Como estudiante podré ver la lista de los proyectos registrados en la plataforma
// HU_020:Como estudiante, general una solicitud de inscripcion


function Proyectos() {
  const [modalInscripciones, setModalInscripciones] = useState(false);

  const toogleInscribir = () => {
    setModalInscripciones(!modalInscripciones);
  };

  const bodyInscribir = (
    <div className="detalles-proyecto">
      <Paper
        className="contenedor-info"
        style={{ margin: "10px 10%", padding: "25px 50px" }}
      >
        <h2>Detalles del proyecto: </h2>
        <label>Id del proyecto:</label>
        <label>Nombre del proyecto:</label>
        <label>Nombre del lider:</label>
        <label>Objetivos generales:</label>
        <label>Objetivos especificos:</label>
        <label>Presupuesto:</label>
        <label>Fecha de Inicio</label>
        <label>Fecha de finalizacion:</label>
        <label>Id Lider</label>
        <label>Nombre del Lider</label>
        <label>Estado</label>
        <label>Fase</label>
        <br />
        <div className="Btn-inscribirse">
          <button onClick={toogleInscribir}>Inscribirse</button>
          <br />
          <button onClick={toogleInscribir}>Cancelar</button>
        </div>
      </Paper>
    </div>
  );
  return (
    <div className="Contenedor-Proyecto">
      <h1>Proyectos disponibles</h1>
      <div className="Info-container">
        <Paper
          className="project-form"
          style={{ margin: "10px 10%", padding: "25px 50px" }}
        >
          <div className="Info-project">
            {/* <h4>{project.projectName}</h4>
              <p>{"ID: " + project._id}</p> */}
            {/* <p>{"Fecha de inicio: " + project.startDate}</p> */}
            <h4>Nombre del proyecto:</h4>
            <p>ID Proyecto: </p>
            <p>Fecha de inicio: </p>
          </div>
          <div className="detalles-button">
            <Button size="small" variant="text" onClick={toogleInscribir}>
              Ver detalles
            </Button>
          </div>
        </Paper>

        <Modal
        open={modalInscripciones}
        onClose={toogleInscribir}>
          {bodyInscribir}
        </Modal>
      </div>
    </div>
  );
}

export default Proyectos;
