import React, { Component, useState, useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { styled } from "@mui/material/styles";
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import "./GestionUsuarios.css"

// H4 & h5 Gestion Usuarios
// H10 Listar estudiantes registrados
// H11 Cambiar estado de estudiante

const ColorButton = styled(Button)({
  backgroundColor: "#0f084b",
});

const HeadRow = styled(TableRow)({
  backgroundColor: "#C8D6CF",
});

export default function GestionUsuarios() {

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetch('http://localhost:5000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        query Users{
          Users{
            _id,
            email,
            DNI,
            name,
            lastName,
            role,
            status
          }
        }
      `}),
    }).then(res => res.json())
    .catch((error) => {
      console.error("There is an error:", error)
    })
    .then((response) => {
      setUsers(response.data.Users)
    })
  }

  const updateUser = (_id,status) => {
    fetch('http://localhost:5000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
        mutation updateUser($_id: String!,$status:Enum_userStatus) {
          updateUser(_id: $_id,status:$status) {
            _id,
            name,
            status
          }
        }
      `,
        variables: {
          _id: _id,
          status: status
        },
      }),
    }).then(res => res.json())
    .catch((error) => {
      console.error("There is an error:", error)
    })
    .then((response) => {
      console.info("Success update:", response)
      getUsers();
    })
  }

  const isPend = (user) =>{
    if(user.status == "Pendiente" || user.status == "No_Autorizado"){
      return (
        <TableCell align="right" style={{display: "flex"}}>
          <div style={{marginLeft: "auto"}}>
            <RadioGroup
              row
              aria-label="auth"
              onChange={(event) => addUser(user, event.target.value)}
            >
              <FormControlLabel
                value="Autorizado"
                control={<Radio />}
                label="Si"
              />
              <FormControlLabel
                value="No_Autorizado"
                control={<Radio />}
                label="No"
              />
            </RadioGroup>
          </div>
        </TableCell>
      );
    }
  }

  const addUser = (userAut,isChecked) =>{
    if(isChecked == "Autorizado"){
      setUsersAut([...usersAut,userAut._id])
      setUsersNoAut(usersNoAut.filter(user=>{
        return user !== userAut._id
      }))
    }else{
      setUsersNoAut([...usersNoAut,userAut._id])
      setUsersAut(usersAut.filter(user=>{
        return user !== userAut._id
      }))
    }
  }

  const saveChanges= ()=>{
    usersAut.forEach(id =>{
      updateUser(id,"Autorizado")
    })
    usersNoAut.forEach(id =>{
      updateUser(id,"No_Autorizado")
    })
  }

  const [users, setUsers] = useState([])
  const [usersAut, setUsersAut] = useState([])
  const [usersNoAut, setUsersNoAut] = useState([])


  return (
    <div className="gestusu-container">
    <h1>Gestion Usuarios</h1>
    <div className="gestusu-table-container">
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <HeadRow>
            <TableCell>DNI</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Rol</TableCell>
            <TableCell align="right">Estado</TableCell>
            <TableCell align="right">Autorizar</TableCell>
          </HeadRow>
        </TableHead>
        <TableBody>
        {users.map((user) => (
          
            <TableRow
              key={user.DNI}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.DNI}
              </TableCell>
              <TableCell align="right">{user.name+" "+user.lastName}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.role}</TableCell>
              <TableCell align="right">{user.status}</TableCell>
              {isPend(user)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div className="gestusu-button">
      <ColorButton variant="contained" onClick={()=>saveChanges()}>Guardar Cambios</ColorButton>
    </div>
    </div>
    </div>
  );
}

