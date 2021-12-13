import React from 'react';
import MaterialTable from 'material-table';
import Edit from '@material-ui/icons/Edit';

// HU_010 & HU_011 Listar Usuarios y cambiar estado

function ListaInscritos( ) {
    const columnas=[
        {
            title:'ID Proyecto',
            field:'idproject'
        },
        {
            title:'ID Estudiante',
            field:'idstudent'
        },
        {
            title:'Nombre Estudiante',
            field:'studentname'
        },
        {
            title:'Estado Inscripcion',
            field:'estado'
        },
        {
            title:'Fecha de Ingreso',
            field:'ingreso',
            type: Date
        },
        {
            title:'Fecha de Egreso',
            field:'egreso',
            type: Date
        },
    ];

    const data= [
        {idproject: '15ad1s2c1x', idstudent:'1dsd1cds11', studentname: 'Patricia Sambrano', estado:'pediente', ingreso:'10/12/2020',egreso:'12/07/2021'  }
    ];
        
    

    return (
        <div>
            <MaterialTable 
             columns={columnas}
             data={data}
             title = 'Lista de inscritos al proyecto:'
             actions={[
                {
                    icon: 'edit',
                    tooltip: 'Editar estado',
                    onClick: (event, rowData)=>alert('Boton para cambiar estado de aceptado a rechazado' + rowData.estado)
                }
             ]}
             options={{
                 actionsColumnIndex: -1
             }}
             localization={{
                 header:{
                     actions: 'Acciones'
                 }
             }}
             />
           
            
        </div>
    );
}



export default ListaInscritos;