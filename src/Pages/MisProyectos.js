import React, { useState } from 'react'
import CrearProyecto from '../components/Crearproyecto/CrearProyecto';
import Proyectos from './Proyectos';

function MisProyectos() {

    const [proyectos, setProyectos] = useState([]);
    

    function addProyecto(proyecto){
        setProyectos(preProyectos => {
            return[...preProyectos, proyecto]
        })

    }
    return (
        <div>
            <h1>Mis Proyectos</h1>
            <CrearProyecto addProyecto={addProyecto}/>
            {proyectos.map(proyecto => (
                <Proyectos 
                nombreProyecto={proyecto.nombreProyecto}
                objGenerales={proyecto.objGenerales}
                objEspecificos={proyecto.objEspecificos}
                presupuesto={proyecto.presupuesto}
                fchInicio={proyecto.fchInicio}
                fchFinal={proyecto.fchFinal}
                nombreLider={proyecto.nombreLider}
                idLider={proyecto.idLider}
            />
            ))}

        </div>
    )
}

export default MisProyectos
