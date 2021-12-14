import { Paper, TextField } from "@material-ui/core";
import MaterialTable from "material-table";
import React, { useState } from "react";
import "./avance.css";

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

  const data = [
    {
      idavance: "61aee2072cdde3d1729a63cb",
      idproject: "61aee2072cdde3d1729a63c5",
      fechaAvance: "06-12-2021",
      descripcion: "Se avanzó con los Querys de los Usuarios",
      creadoPor: "1006108674",
      observacion: "",
    },
  ];

  const [modalAgregar, setModalAgregar] = useState(false);

  const toogleAgregar = () => {
    setModalAgregar(!modalAgregar);
  };
  if (modalAgregar) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
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
                onclick: (event, rowData) =>
                  "Boton para agregar update enelavance" + rowData.descripcion,
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
        </div>
      </div>

      {modalAgregar && (
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
            <br/>
            <br/>
             <div className="btn-agregar-avance">
            <button className="modal-btn" onClick={toogleAgregar}>
              Guardar avance
            </button>
            <br/>
            <br/>
            <button className="Cerrar-modal" onClick={toogleAgregar}>
              Cancelar
            </button>
          </div>
          </div>
         
        </div>
      )}
    </div>
  );
}

export default ListarAvance;
