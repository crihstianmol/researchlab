import { Paper } from "@mui/material";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import './avance.css'

// Listar los avances (HU_021)

export const ListarAvance = () => {
  const columns = [
    { field: "idAvance", headerName: "ID Avance", width: 130 },
    { field: "idProyecto", headerName: "ID Proyecto", width: 130 },
    { field: "fechaAvance", headerName: "Fecha Avance",type: "date", width: 130 },
    { field: "descripcion", headerName: "Descripcion Avance", width: 230 },
    { field: "creadoPor", headerName: "Creado por", width: 150 },
    { field: "observacion", headerName: "Observacion Lider", width: 230 },
  ];

  const rows = [
    { id: 1, idAvance: "1525", idProyecto: "Jo151n", fechaAvance: "08/12/2021",descripcion:"Inicio muestreo",creadoPor:"Crhistian Molina",observacion:""  },
    { id: 2, idAvance: "1515"},
    { id: 3, idAvance: "45485"},
    { id: 4, idAvance: "545652"},
    { id: 5, idAvance: "418541"},
    { id: 6, idAvance: "12541"},
    { id: 7, idAvance: "45436"},
    { id: 8, idAvance: "45256"},
    { id: 9, idAvance: "545415"},
  ];
  return (
    <div>
      <Paper className="lst-avance">
        <div className="title-dt-grid">
          <h2> Lista de Avances </h2>
        </div>
        <div className="dt-grid">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </Paper>
    </div>
  );
};
