import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { styled } from "@mui/material/styles";
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Button } from "@mui/material";
import "./ListaInscritos.css"

// HU_010 & HU_011 Listar Usuarios y cambiar estado
// H15 Listar insritos
// H16 Aceptar y rechazar inscritos


const ColorButton = styled(Button)({
    backgroundColor: "#0f084b",
  });
  
  const HeadRow = styled(TableRow)({
    backgroundColor: "#C8D6CF",
  });

function ListaInscritos() {

    useEffect(() => {
        getProjects(leaderId);
      }, []);

    const getProjects = (leaderId) => {
      fetch("http://localhost:5000/graphql", {
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
          response.data.Projects.forEach((project) =>
            getInscriptions(project._id)
          );
        });
    };
    
    const getInscriptions = (projectId) => {
      fetch("http://localhost:5000/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
        query Inscriptions($_id: ID!) {
            Inscriptions(_id: $_id) {
            inscriptions{
                id,
                studentId,
                joinDate,
                leftDate,
                status,
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
            console.log(response.data.Inscriptions[0].inscriptions)
          setInscriptions({
            ...Inscriptions,
            [projectId]: response.data.Inscriptions[0].inscriptions,
          });
        });
    };

    const updateInscription = (_idProject,_idInscription,inscription) => {
        fetch("http://localhost:5000/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
            mutation updateInscription($_idProject: ID!,$_idInscription: ID!,$inscription: inscriptionInput) {
                updateInscription(_idProject: $_idProject,_idInscription:$_idInscription,inscription:$inscription) {
                    inscriptions{
                        id,
                        studentId,
                        joinDate,
                        leftDate,
                        status,
                    }
              }
            }
          `,
            variables: {
              _idProject: _idProject,
              _idInscription: _idInscription,
              inscription: inscription,
            },
          }),
        })
          .then((res) => res.json())
          .catch((error) => {
            console.error("There is an error:", error);
          })
          .then((response) => {
            console.info("Success update:", response);
          });
      }

    const isPend = (inscription,project) =>{
    if(inscription.status == "Pendiente"){
        return (
        <TableCell align="right" style={{display: "flex"}}>
            <div style={{marginLeft: "auto"}}>
            <RadioGroup
                row
                aria-label="auth"
                onChange={(event) => addInscription(inscription,project, event.target.value)}
            >
                <FormControlLabel
                value="Aceptado"
                control={<Radio />}
                label="Si"
                />
                <FormControlLabel
                value="Rechazado"
                control={<Radio />}
                label="No"
                />
            </RadioGroup>
            </div>
        </TableCell>
        );
    }
    }

    const addInscription = (inscriptionAut,project,isChecked) =>{
        if(isChecked == "Aceptado"){
          setInscriptionsAut([...InscriptionsAut,[inscriptionAut,project._id]])
          setInscriptionsNoAut(InscriptionsNoAut.filter(inscription=>{
            return inscription[0]["id"] !== inscriptionAut.id
          }))
          
        }else{
          setInscriptionsNoAut([...InscriptionsNoAut,[inscriptionAut,project._id]])
          setInscriptionsAut(InscriptionsAut.filter(inscription=>{
            return inscription[0]["id"] !== inscriptionAut.id
          }))
        }
    }

    const saveChanges= ()=>{
        console.log(InscriptionsAut)
        console.log(InscriptionsNoAut)
        InscriptionsAut.forEach(inscription=>{
            let id = inscription[0]["id"]
            delete inscription[0]["id"]
            console.log("id: " + id)
            inscription[0]["status"] = "Aceptado"
            updateInscription(inscription[1],id,inscription[0])
        })
        InscriptionsNoAut.forEach(inscription=>{
            let id = inscription[0]["id"]
            delete inscription[0]["id"]
            inscription[0]["status"] = "Rechazado"
            updateInscription(inscription[1],id,inscription[0])
        })
        setInscriptions({})
        setInscriptionsAut([])
        setInscriptionsNoAut([])
        getProjects(leaderId)
      }
    
    const [projects, setProjects] = useState([]);
    const [Inscriptions, setInscriptions] = useState({});
    const [InscriptionsAut, setInscriptionsAut] = useState([]);
    const [InscriptionsNoAut, setInscriptionsNoAut] = useState([]);
    const [leaderId, setLeaderId] = React.useState(localStorage.getItem('id') !== undefined && localStorage.getItem('id') !== null ? localStorage.getItem('id') : '')

    return (
      <div className="inscr-container">
        <h1>Lista de Inscritos</h1>
        <div className="inscr-table-container">
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <HeadRow>
                  <TableCell>ID Proyecto</TableCell>
                  <TableCell align="right">Nombre Proyecto</TableCell>
                  <TableCell align="right">ID Estudiante</TableCell>
                  <TableCell align="right">Estado Inscripcion</TableCell>
                  <TableCell align="right">Fecha de Ingreso</TableCell>
                  <TableCell align="right">Fecha de Salida</TableCell>
                  <TableCell align="right">Autorizar</TableCell>
                </HeadRow>
              </TableHead>
              <TableBody>
                {projects.map((project) =>{
                    if(Inscriptions[project._id]){
                        return Inscriptions[project._id].map((inscription) => (
                          <TableRow
                            key={inscription.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {project._id}
                            </TableCell>
                            <TableCell align="right">
                              {project.projectName}
                            </TableCell>
                            <TableCell align="right">
                              {inscription.studentId}
                            </TableCell>
                            <TableCell align="right">
                              {inscription.status}
                            </TableCell>
                            <TableCell align="right">
                              {inscription.joinDate}
                            </TableCell>
                            <TableCell align="right">
                              {inscription.leftDate}
                            </TableCell>
                            {isPend(inscription,project)}
                          </TableRow>
                        ));
                    }
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="inscr-button">
            <ColorButton variant="contained" onClick={()=>saveChanges()}>Guardar Cambios</ColorButton>
          </div>
        </div>
      </div>
    );
}

export default ListaInscritos;
