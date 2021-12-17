import React from "react";
import { Paper } from "@mui/material";
import './proyectostudent.css'
import ListarAvance from "./ListarAvance";

function InfoProyecto() {
  return (
    <div className="detalles-proyecto">
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
}
export default InfoProyecto;
