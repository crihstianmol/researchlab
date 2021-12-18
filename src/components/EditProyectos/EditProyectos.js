import { Button, Paper } from "@mui/material";
import React, {useState, useEffect } from 'react'
import { styled } from "@mui/material/styles";
import usePopUp from "../../hooks/usePopUp";
import EditProyectosPopup from "./EditProyectosPopUp"
import "./EditProyectos.css"

const ColorButton = styled(Button)({
  backgroundColor: "#0f084b",
});

let leaderId = "1006108674"

function EditarProyectos() {

    useEffect(() => {
        getProjects(leaderId);
      }, []);

    const getProjects = (leaderId) => {
      fetch("https://researchlab-app.herokuapp.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
        query Projects($leaderId: String) {
            Projects(leaderId: $leaderId) {
                _id,
                projectName,
                budget,
                status
            }
        }
        `,
          variables: {
            leaderId: leaderId,
          },
        }),
      })
        .then((res) => res.json())
        .catch((error) => {
          console.error("There is an error:", error);
        })
        .then((response) => {
          setProjects(response.data.Projects);
          response.data.Projects.forEach((project) => {
              getObjectives(project._id)
          })
        });
    };

    const getObjectives = (projectId) => {
        fetch("https://researchlab-app.herokuapp.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
          query Objectives($_id: ID!) {
            GeneralObjectives(_id: $_id) {
                generalObj{
                    id,
                    user,
                    objective,
                }
              }
            SpecificObjectives(_id: $_id) {
                specificObj{
                    id,
                    user,
                    objective,
                }
              }
          }
          `,
            variables: {
              _id: projectId,
            },
          }),
        })
          .then((res) => res.json())
          .catch((error) => {
            console.error("There is an error:", error);
          })
          .then((response) => {
            setGenObj({...genObj,[projectId]:response.data.GeneralObjectives[0].generalObj})
            setSpecObj({...specObj,[projectId]:response.data.SpecificObjectives[0].specificObj})
          });
      };
  

    const updateProject = (_id,status,phase) => {
      const variables={
        _id:_id,
        status:status,
      }

      if(phase){
        variables.phase=phase
      }

      fetch('https://researchlab-app.herokuapp.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
          mutation updateProject($_id: ID!,$status:Enum_statusProj,$phase:Enum_phaseProj) {
            updateProject(_id: $_id,status:$status,phase:$phase) {
              _id,
              projectName,
              status,
              phase
            }
          }
        `,
          variables: variables,
        }),
      }).then(res => res.json())
      .catch((error) => {
        console.error("There is an error:", error)
      })
      .then((response) => {
        console.info("Success update:", response)
        getProjects()
      })
    }

    const printOptions = (project) =>{
      if(project.status === "Activo"){
        return<>
        <EditProyectosPopup isOpen={isOpenModal} close={()=>closeModal()} project={project} />
        <Button size="small" variant="text" onClick={() =>openModal()} >Ver detalles</Button>
        </>
      }
    }
  
    const [projects, setProjects] = useState([])
    const [genObj, setGenObj] = useState({})
    const [specObj, setSpecObj] = useState({})
    const [isOpenModal, openModal, closeModal] = usePopUp();

    
    return (
      <div className="Contenedor-proyectos">
        <h1>Proyectos disponibles</h1>
        <div className="projects-container">
          {projects.map((project) => (
            <Paper
              key={project._id}
              className="project-item"
              style={{ margin: "10px 10%", padding: "25px 50px" }}
            >
              <div className="vistaPrevia-prj">
                <h4>{project.projectName}</h4>
                <p>{"budget: " + project.budget}</p>
              </div>
              <div className="Lista-opciones">{printOptions(project)}</div>
            </Paper>
          ))}
        </div>
      </div>
    );
}

export default EditarProyectos
