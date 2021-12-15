import { Paper, TextField } from "@material-ui/core";
import { Modal } from "@mui/material";
import MaterialTable from "material-table";
import React, { useState } from "react";
import "./avance.css";

// HU_21 , HU_22 & HU_23 ListarAvance, agregar y modificar avance

function ListarAvance() {
  const columnas = [
    {
      title: "ID Avance",
      field: "idavance",
    },
    {
      title: "ID Proyecto",
      field: "idproject",
    },
    {
      title: "Fecha Avance",
      field: "fechaAvance",
      type: Date,
    },
    {
      title: "Descripcion avance",
      field: "descripcion",
    },
    {
      title: "Creado por",
      field: "creadoPor",
    },
    {
      title: "Observacion Lider",
      field: "observacion",
    },
  ];
  //  En este espacio se dene realizar la peticion para conectar info de la base de datos
  const data = [
    {
      idavance: "61aee2072cdde3d1729a63cb",
      idproject: "61aee2072cdde3d1729a63c5",
      fechaAvance: "06-12-2021",
      descripcion: "Se avanzó con los Querys de los Usuarios",
      creadoPor: "100610",
      observacion: "",
    },
  ];

  const [modalAgregar, setModalAgregar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);

  // Metodo para abrir y cerrar pop up
  const toogleAgregar = () => {
    setModalAgregar(!modalAgregar);
  };

  const toogleEditar = () => {
    setModalEditar(!modalEditar);
  };

  // Body del pop up agregar avance

  const bodyAgregar = (
    <div className="modal">
      <div onClick={toogleAgregar} className="overlay"></div>
      <div className="modal-content">
        <h2>Agregar nuevo avance :</h2>
        <TextField
          name="avance"
          // value={value}
          label="ID avance"
          fullWidth
          autoComplete="off"
          margin="normal"
          // onChange={changeHandler}
        />
        <TextField
          name="avance"
          // value={value}
          label="ID del proyecto"
          fullWidth
          autoComplete="off"
          margin="normal"
          // onChange={changeHandler}
        />
        <TextField
          name="fchAvance"
          // value={value}
          // onChange={changeHandler}
          label="Fecha del Avance"
          type="date"
          defaultValue="2017-05-24"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <TextField
          label="Descripcion del avance:"
          name="DespAvance"
          // value={value}
          // onChange={changeHandler}
          multiline
          maxRows={4}
          fullWidth
          autoComplete="off"
          margin="normal"
        />
        <br />
        <br />
        <div className="btn-agregar-avance">
          <button className="modal-btn" onClick={toogleAgregar}>
            Guardar avance
          </button>
          <br />
          <br />
          <button className="Cerrar-modal" onClick={toogleAgregar}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );

  //  Body pop up editar avance

  const bodyEditar = (
    <div className="editar-vista-container">
      <Paper className="editar-container">
        <div className="vista-container">
          <h2>Editar avance :</h2>
          <label>ID avance</label>
          <br/>
          <label>ID proyecto</label>
          <br/>
          <br/>
          
          <TextField
            name="fchAvance"
            // value={value}
            // onChange={changeHandler}
            label="Fecha del Avance"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
            margin="dense"
          />
          <br/>
          <br/>
          <TextField
            label="Descripcion del avance:"
            name="DespAvance"
            // value={value}
            // onChange={changeHandler}
            multiline
            maxRows={4}
            fullWidth
            autoComplete="off"
          />
          <div className="btn-cambios">
            <div>
              <button onClick={() => toogleEditar()}>Guardar Cambios</button>
              <button onClick={() => toogleEditar()}>Cancelar</button>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );

  return (
    // body de listar avances
    <div className="container-avance">
      <div className="avance-group">
        <div>
          <button onClick={toogleAgregar} className="btn-modal">
            Agregar avance
          </button>
        </div>
        <div className="avances-tabla">
          <MaterialTable
            columns={columnas}
            data={data}
            title="Lista avances del proyecto"
            actions={[
              {
                icon: "edit",
                tooltip: "Editar avance",
                onClick: (event, rowData) => toogleEditar(rowData),
              },
            ]}
            options={{
              actionsColumnIndex: -1,
            }}
            localization={{
              header: {
                actions: "Acciones",
              },
            }}
          />

          <Modal open={modalAgregar} onClose={toogleAgregar}>
            {bodyAgregar}
          </Modal>

          <Modal open={modalEditar} onClose={toogleEditar}>
            {bodyEditar}
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default ListarAvance;
