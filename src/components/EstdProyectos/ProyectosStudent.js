import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListarAvance from "./ListarAvance";
import InfoProyecto from "./InfoProyecto";
import { Paper } from "@mui/material";
import './infoProyecto.css'

function ProyectosStudent() {
  return (
    <div className="contenedor-proyecto">
      <Accordion className="contenedor-desplegable">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="header-proyecto-detalles"
        >
          <h2>Nombre del proyecto :</h2>
          
        </AccordionSummary>
        <AccordionDetails>

          <div>
          <InfoProyecto />
          </div>
          <div>  
            <ListarAvance />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ProyectosStudent;
