import React, { useState } from "react";
import "./proyectostudent.css";
import { Button, Modal, Paper } from "@material-ui/core";
import ListarAvance from "./ListarAvance";



function ProyectosStudent() {
 

  const [modalVer, setModalVer] = useState(false);

  const toogleVer = () => {
    setModalVer(!modalVer);
  };

  const bodyInfoproject = (
    <div className="detalles-proyecto">
       <div>
        <button on onClick={() => toogleVer()}>
          X
        </button>
      </div>
      <Paper
        className="summary-proyecto"
        style={{ margin: "10px 10%", padding: "25px 50px" }}
      >
        <h2>Detalles del proyecto: </h2>
        <label>Objetivos generales:</label>
        <label>Objetivos especificos:</label>
        <label>Presupuesto:</label>
        <label>Fecha de Inicio</label>
        <label>Fecha de finalizacion:</label>
        <label>Id Lider:</label>
        <label>Nombre del Lider:</label>
        <label>Estado:</label>
        <label>Fase:</label>
        <ListarAvance />
      </Paper>
    </div>
  );

  return (
    <div className="contenedor-proyecto">
      <div>
        <h1>Lista de mis proyectos en curso</h1>
      </div>
      <div className="detalles-proyecto">
           <Paper
        className="project-form"
        style={{ margin: "10px 10%", padding: "25px 50px" }}
      >
        <div className="Info-project">
          <h4>Nombre del proyecto:</h4>
          <p>ID Proyecto: </p>
          <p>Fecha de inicio: </p>
        </div>
        <div className="detalles-button">
          <Button size="small" variant="text" onClick={toogleVer}>
            Ver detalles
          </Button>
        </div>
      </Paper>
      <div>
      </div>
    </div>
      <div>
        <Modal open={modalVer} onClose={toogleVer}>
          {bodyInfoproject}
        </Modal>
      </div>
    </div>
  );
}

export default ProyectosStudent;
