import { Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import "./Proyectos.css";

// HU_019:Como estudiante podré ver la lista de los proyectos registrados en la plataforma

function Proyectos() {
  // useEffect(() => {
  //   getProjects();
  // }, []);

  // const getProjects = () => {
  //   fetch('https://researchlab-app.herokuapp.com/graphql', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       query: `
  //       query Projects{
  //           Projects{
  //           _id,
  //           projectName,
  //           budget,
  //           startDate,
  //           endDate,
  //           leaderId,
  //           leaderName,
  //           status,
  //           phase
  //         }
  //       }
  //     `,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .catch((error) => {
  //       console.error("There is an error:", error);
  //     })
  //     .then((response) => {
  //       setProjects(response.data.Projects)
  //     });
  // }

  // const saveInscipcion = (_id,status,inscriptions) => {
  //   const variables={
  //     _id:_id,
  //     status:status,
  //   }
  //   if(inscriptions){
  //     variables.inscriptions=inscriptions
  //   }
  //   fetch('https://researchlab-app.herokuapp.com/graphql', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       query:`
  //       mutation createInscription(
  //         $_idProject: ID!
  //         inscription: inscriptionInput
  //       ): ProjectInscriptions`,
  //       variables: variables,
  //     }),
  //   })
  //   .then(res => res.json())
  //   .catch((error) => {
  //     console.error("There is an error:", error)
  //   })
  //   .then((response) => {
  //     console.info("Success update:", response)
  //     getProjects()
  //   }),

  return (
    <div className="Contenedor-Proyecto">
      <h1>Proyectos disponibles</h1>
      <div className="Info-container">
        <Paper
          className="project-form"
          style={{ margin: "10px 10%", padding: "25px 50px" }}
        >
          <div className="Info-project">
            {/* <h4>{project.projectName}</h4>
              <p>{"ID: " + project._id}</p> */}
            {/* <p>{"Fecha de inicio: " + project.startDate}</p> */}
            <h4>Nombre del proyecto:</h4>
            <p>ID Proyecto: </p>
            <p>Fecha de inicio: </p>
          </div>
          <div className="detalles-button">
            <Button size="small" variant="text">
            <Link to="/Detatallesproject"> Ver detalles  </Link>

              Ver detalles
            </Button>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default Proyectos;
