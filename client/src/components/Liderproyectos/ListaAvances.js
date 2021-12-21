import { Paper , TextField, Modal} from "@material-ui/core";
import MaterialTable from "material-table";
import React, { useState } from "react";
import './ObsAvance.css'


function ListaAvances() {
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

  const [modalObservacion, setModalObservacion] = useState(false);

  const toogleObservacion = () => {
    setModalObservacion(!modalObservacion);
  };

  const bodyObservacion = (
    <div className="container-onbservacion">
      <Paper
        className="summary-proyecto"
        style={{ margin: "10px 10%", padding: "25px 50px" }}
      >
          <h2> Detalles de avance</h2>
          <label>ID del avance</label>
          <label>Fecha del avance</label>
          <label>Descripcion del avance</label>
          <TextField
          label="Observacion del avance:"
          name="DespAvance"
          // value={value}
          // onChange={changeHandler}
          multiline
          maxRows={4}
          fullWidth
          autoComplete="off"
          margin="normal"
        />
        <div className="bnts-container">
        <button> Guardar Observacion </button>
        <button onClick={toogleObservacion}> Cancelar </button>
        </div>
        
      </Paper>
    </div>
  );

  return (
    <div>
      <MaterialTable
        columns={columnas}
        data={data}
        title="Lista avances del proyecto"
        actions={[
          {
            icon: "edit",
            tooltip: "Agregar Observacion",
            onClick: (event, rowData) => toogleObservacion(rowData),
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
      <Modal 
      open={modalObservacion}
      onClose={toogleObservacion}>
          {bodyObservacion}

      </Modal>
    </div>
  );
}
export default ListaAvances;
