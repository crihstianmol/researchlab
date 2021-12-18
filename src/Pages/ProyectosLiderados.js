import { Button, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Modal } from "@mui/material";
import ListaAvances from "../components/Liderproyectos/ListaAvances";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import "./proyectosLiderados.css";

// H13 Listar proyectos a cargo
// H14 Editar la info del proyecto

function ProyectosLiderados() {
  const [modalVerProyecto, setModalVerProyecto] = useState(false);
  const [modalEditarPj, setModalEditarPj] = useState(false);

  const toogleVerpj = () => {
    setModalVerProyecto(!modalVerProyecto);
  };
  const toogleEditarPj = () => {
    setModalEditarPj(!modalEditarPj);
  };

  const bodyProject = (
    <div className="bdy-proyecto">
      <Paper
        className="dtls-proyecto"
        style={{ margin: "10px 10%", padding: "25px 50px" }}
      >
        <div className="cls-button">
          <button> X </button>
        </div>
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
        <div className="bnt-container">
          <button className="btn-Editar" onClick={toogleEditarPj}>
            Editar proyecto
          </button>
        </div>
        <ListaAvances />
      </Paper>
    </div>
  );

  const bodyEditarPj = (
    <div className="body-editar">
      <Paper
        className="editar-container"
        style={{ margin: "10px 10%", padding: "25px 50px" }}
      >
        <div className="close-btn">
          <button> x </button>
        </div>
        <h2>Detalles del proyecto: </h2>

        <TextField
          label="Nombre del proyecto"
          name="ProjectName"
          // value={value}
          // onChange={changeHandler}
          multiline
          maxRows={4}
          fullWidth
          autoComplete="off"
          margin="normal"
        />

        <TextField
          label="Objetivos Generales"
          name="Obj-generales"
          // value={value}
          // onChange={changeHandler}
          multiline
          maxRows={4}
          fullWidth
          autoComplete="off"
          margin="normal"
        />
        <TextField
          label="Objetivos Especificos"
          name="Obj-especificos"
          // value={value}
          // onChange={changeHandler}
          multiline
          maxRows={4}
          fullWidth
          autoComplete="off"
          margin="normal"
        />
        <CurrencyTextField
          label="Presupuesto"
          fullWidth
          name="presupuesto"
          //   value={proyecto.presupuesto}
          //   onChange={changeHandler}
          currencySymbol="$"
          variant="outlined"
          outputFormat="string"
          decimalCharacter="."
          digitGroupSeparator=","
          margin="normal"
        />
        <br />
        <div className="btn-container">
          <button className="grd-btn">Guardar Cambios</button>
          <br />
          <button className="cancelar-bnt" onClick={toogleEditarPj}>
            Cancelar
          </button>
        </div>
      </Paper>
    </div>
  );

  return (
    <div className="contenedor-proyecto">
      <div>
        <h1>Proyectos en curso</h1>
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
          <div className="detalles-ver">
            <Button size="small" variant="text" onClick={toogleVerpj}>
              Ver detalles
            </Button>
          </div>
        </Paper>

        <Modal open={modalVerProyecto} onClose={toogleVerpj}>
          {bodyProject}
        </Modal>
        <Modal open={modalEditarPj} onClose={toogleEditarPj}>
          {bodyEditarPj}
        </Modal>
      </div>
    </div>
  );
}
export default ProyectosLiderados;
