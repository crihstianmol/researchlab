import { Paper } from '@mui/material'
import React, { useState } from 'react'

function Proyectos({nombreProyecto}) {
    
    return (
        <div>
            <Paper style={{ margin: "10px 10%", padding: "25px 50px" }} >
                <h1>Proyectos disponibles</h1>
                <h4>{nombreProyecto}</h4>
                <p>ID del proyecto</p>
                <p>Detalles</p>


            </Paper>
            
        </div>
    )
}

export default Proyectos
