import { Paper } from "@mui/material";
import React from "react";
import './inscripciones.css'



// HU_020:Como estudiante, general una solicitud de inscripcion

function Inscripciones() {
  return (
    <div className="detalles-proyecto">
      <Paper className="contenedor-detalles" style={{ margin: "10px 10%", padding: "25px 50px" }}>
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
        <div className="Btn-inscribirse">
        <button>Inscribirse</button>
        </div>
      </Paper>
    </div>

    //     <div className="pop-label-title">
    //       <label>{"Id del Proyecto: "+project._id}</label>
    //       <label>{"Nombre del Proyecto: "+ project.projectName}</label>
    //     </div>
    //   </div>
    //   <div className="pop-update-label pop-body">
    //     <div className="pop-projectdata">
    //       <label>{"Nombre del Lider: "+project.leaderName}</label>
    //       <label>{"Presupuesto: "+project.budget}</label>
    //       <label>{"Fecha de Inicio: "+project.startDate}</label>
    //       <label>{"Fecha de Terminacion: "+project.endDate}</label>
    //       <label>{"Objetivos generales: "+project.generalObj}</label>
    //       <label>{"Objetivos especificos: "+project.specificObj}</label>
    //       <label>{"Estado: "+project.status}</label>
    //       <label>{"Fase: "+project.phase}</label>

    //     </div>
    //     <div className="inscripcion">
    //       <ColorButton
    //         variant="contained"
    //         onClick={() => close(project.inscriptions)}
    //       >
    //         Inscribirse
    //       </ColorButton>
    //     </div>
    //   </div>
    // </div>
    // </div>
  );
}

export default Inscripciones;
