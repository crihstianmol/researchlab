import { Button, Paper } from "@mui/material";
import React, { Component, useState, useEffect } from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from "@mui/material/styles";
import usePopUp from "../../hooks/usePopUp";
import "./AdminProyectos.css"
import AdminProyectosPopup from "./AdminProyectosPopUp"

// H6 LISTA TODOS LOS PROYECTOS
// H7 APROBAR CREACION DEL PROYECTO
// H8 ACTUALIZAR ESTADO
// H9 ACTUALIZAR FASE


const ColorButton = styled(Button)({
  backgroundColor: "#0f084b",
});



function AdminProyectos() {

    useEffect(() => {
        getProjects();
      }, []);
    
    const getProjects = () => {
      fetch('https://researchlab-app.herokuapp.com/graphql', {
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
      if(project.status === "Inactivo"){
        return<FormControlLabel
          control={
            <Checkbox
              onChange={(event) =>
                autorizeProject(event.target.checked, project)
              }
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="Autorizar"
        />
      }else{
        return<>
        <AdminProyectosPopup isOpen={isOpenModal} close={close} project={project} />
        <Button size="small" variant="text" onClick={() =>openModal()} >Ver detalles</Button>
        </>
      }
    }

    const autorizeProject = (checked,project) =>{ 
      if(checked){
        setAutProjects([...autProjects,project._id])
        console.log([...autProjects,project._id])
      }else{
        setAutProjects(autProjects.filter(pr=>{
          return pr._id == project._id
        }))
        console.log(autProjects.filter(pr=>{
          return pr._id == project._id
        }))
      }
    }

    const saveChanges= ()=>{
      autProjects.forEach(id=>{
        updateProject(id,"Activo")
      })
    }

    const close= (_id,status,phase)=>{
      if(status && phase){
        updateProject(_id,status,phase)
      }

      closeModal()
    }
  
    const [projects, setProjects] = useState([])
    const [autProjects, setAutProjects] = useState([])
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
                <p>{"Fecha de inicio: " + project.startDate}</p>
                <p>{"Fecha de fin: " + project.endDate}</p>
              </div>
              <div className="Lista-opciones">{printOptions(project)}</div>
            </Paper>
          ))}
        </div>
        <div className="gestusu-button">
          <ColorButton variant="contained" onClick={() => saveChanges()}>
            Guardar Cambios
          </ColorButton>
        </div>
      </div>
    );
}

export default AdminProyectos
