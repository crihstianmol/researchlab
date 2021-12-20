import React, { useState, useEffect } from "react";
import "./proyectostudent.css";
import { Button, Modal, Paper } from "@material-ui/core";
import ListarAvance from "./ListarAvance";
import { listProjects } from "../../modules/Projects.js"

function ProyectosStudent() {
  const [projectexc, setprojectexc] = useState(false)
  const [modalVer, setModalVer] = useState(false);
  const [projects, setProjects] = useState([])

  useEffect(() => {
    if (!projectexc) {
      setprojectexc(true)
      listProjects({}).then((projectos) => {
        setProjects(projectos)
        console.log(projectos)
      })
    }
  })

  const toogleVer = () => {
    setModalVer(!modalVer);
  };

  const bodyInfoproject = (
    <div className="display-proyecto">
      <Paper
        className="info-proyecto"
        style={{ margin: "10px 10%", padding: "25px 50px" }}
      >
        <div className="close-window">
          <button on onClick={() => toogleVer()}>
            X
          </button>
        </div>
        <h2>Detalles del proyecto:</h2>
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
      {projects.map((p) =>
        <div className="detalles-proyecto">
          <Paper
            className="project-form"
            style={{ margin: "10px 10%", padding: "25px 50px" }}
          >
            <div className="Info-project">
              <h4>Nombre del proyecto: {p.projectName}</h4>
              <p>ID Proyecto:{p._id} </p>
              <p>Fecha de inicio: {p.startDate} </p>
            </div>
            <div className="detalles-button">
              <Button
                className="dtl-button"
                size="small"
                variant="text"
                onClick={toogleVer}
              >
                Ver detalles
              </Button>
            </div>
          </Paper>
        </div>
      )}
      <div>
        <Modal open={modalVer} onClose={toogleVer}>
          {bodyInfoproject}
        </Modal>
      </div>
    </div>
  );
}

export default ProyectosStudent;
