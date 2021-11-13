import { Button, Paper } from "@mui/material";
import React, { useState } from "react";
import "./Proyectos.css";

function Proyectos({ nombreProyecto }) {
  return (
    <div className="Contenedor-proyectos">
      <h1>Proyectos disponibles</h1>
      <Paper style={{ margin: "10px 10%", padding: "25px 50px" }}>
        <div className="vistaPrevia-prj">
          {/* <h4>{nombreProyecto}</h4> */}
          <h4>Nombre proyecto</h4>
          <p>ID del proyecto</p>
          <p>Detalles</p>
        </div>
        <div className="Lista-opciones">
          {/* Al buscar proyecto se debe ver los detalles y la opcion de inscripcion(Estudiantes) */}
          <Button size="small" variant="text" >
            Ver detalles
          </Button>
          <Button size="small" variant="text">
            Inscribirse
          </Button>
          {/* Una vrez inscrito el estudiante podra ver el avance */}
          <Button size="small" variant="text">
            Agregar Avance
          </Button>
          {/* Los estudiantes podran ver el historial de avances y los lideres tambien */}
          {/* Los lideres podran ver una opcion para agregar su observacion sobre el avance */}
          <Button size="small" variant="text">
            Ver Avance
          </Button>
          {/* los lideres y admin podran ver los inscritos a proyecto */}
          <Button size="small" variant="text">
            Ver Inscritos
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default Proyectos;
