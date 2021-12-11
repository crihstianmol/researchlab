import { Button, Paper } from "@mui/material";
import React, { Component, useState, useEffect } from 'react'
import "./Proyectos.css";

function AdminProyectos() {

    useEffect(() => {
        getProjects();
      }, []);
    
      const getProjects = () => {
        fetch("https://researchlab-app.herokuapp.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
            query Projects{
                Projects{
                _id,
                projectName,
                budget,
                startDate,
                endDate,
                leaderId,
                leaderName,
                status,
                phase
              }
            }
          `,
          }),
        })
          .then((res) => res.json())
          .catch((error) => {
            console.error("There is an error:", error);
          })
          .then((response) => {
              setProjects(response.data.Projects)
          });
      }


      const [projects, setProjects] = useState([])

    return (
        <div className="Contenedor-proyectos">
      <h1>Proyectos disponibles</h1>
      {projects.map(project =>(
          <Paper style={{ margin: "10px 10%", padding: "25px 50px" }}>
          <div className="vistaPrevia-prj">
            <h4>{project.projectName}</h4>
            <p>{"budget: "+project.budget}</p>
            <p>{"Fecha de inicio: "+project.startDate}</p>
            <p>{"Fecha de fin: "+project.endDate}</p>
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
      ))}
      
    </div>
    )
}

export default AdminProyectos
