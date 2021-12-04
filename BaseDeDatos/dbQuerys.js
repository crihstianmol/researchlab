//Buscar Proyecto, enviando cualquier parametro como filtro
db.projects.find({
    //Aqui van los parametros
    projectName: "MINTIC Research Lab"
})

//Insertando un Proyecto, con los campos NECESARIOS
db.projects.insertOne({
    projectName: "MINTIC Research Lab",
    budget: Double("2000000"),
    startDate: "2021-12-01",
    endDate: "2021-12-18",
    leaderId: "1006108674",
    leaderName: "Crihstian Camilo Molina Castro",
    status: "Activo",
    phase: "Iniciado"
})

//Actualizando una propiedad de un proyecto
db.projects.updateOne({
    _id: ObjectId("61a7c36f4cd3b3e7b0981bbd")
},
    {
        $set: {
            projectName: "MINTIC Research Project"
        }
    }
)

//Ingresando un Objetivo general al Proyecto
db.projects.updateOne({
    _id: ObjectId("61a7c36f4cd3b3e7b0981bbd")
},
    {
        $addToSet: {
            generalObj: {
                $each: [{
                    id: ObjectId(),
                    user: "1006108674",
                    objective: "Terminarlo"
                }]
            }
        }
    }
)

//Actualizar una propiedad de un Objetivo general
db.projects.updateOne({
    "generalObj.id": ObjectId("61a7ca794cd3b3e7b0981bc1")
},
    {
        $set: {
            "generalObj.$.objective": "Prueba Update"
        }
    }
)

//Eliminando un Objetivo general del Proyecto
db.projects.updateOne({
    _id: ObjectId("61a7c36f4cd3b3e7b0981bbd")
},
    {
        $pull: {
            generalObj: {
                id: ObjectId("61a7c4a44cd3b3e7b0981bbf")
            }
        }
    }
)

//Ingresando un Objetivo especifico al Proyecto
db.projects.updateOne({
    _id: ObjectId("61a7c36f4cd3b3e7b0981bbd")
},
    {
        $addToSet: {
            specificObj: {
                $each: [{
                    id: ObjectId(),
                    user: "1006108674",
                    objective: "Iniciar la investigación"
                }]
            }
        }
    }
)

//Actualizar una propiedad de un Objetivo specifico
db.projects.updateOne({
    "specificObj.id": ObjectId("61a7ca794cd3b3e7b0981bc1")
},
    {
        $set: {
            "specificObj.$.objective": "Prueba Update"
        }
    }
)

//Eliminando un Objetivo especifico del Proyecto
db.projects.updateOne({
    _id: ObjectId("61a7c36f4cd3b3e7b0981bbd")
},
    {
        $pull: {
            specificObj: {
                id: ObjectId("61a7c4a44cd3b3e7b0981bbf")
            }
        }
    }
)

//Ingresando una Inscripcion al Proyecto
db.projects.updateOne({
    _id: ObjectId("61a7c36f4cd3b3e7b0981bbd")
},
    {
        $addToSet: {
            inscriptions: {
                $each: [{
                    id: ObjectId(),
                    studentId: "1006108674",
                    joinDate: "2021-12-01",
                    leftDate: "2021-12-18",
                    status: "Pendiente"
                }]
            }
        }
    }
)

//Actualizar una propiedad de una Inscripcion
db.projects.updateOne({
    "inscriptions.id": ObjectId("61a7ca794cd3b3e7b0981bc1")
},
    {
        $set: {
            "inscriptions.$.status": "Rechazado"
        }
    }
)

//Eliminando una Inscripcion del Proyecto
db.projects.updateOne({
    _id: ObjectId("61a7c36f4cd3b3e7b0981bbd")
},
    {
        $pull: {
            inscriptions: {
                id: ObjectId("61a7c4a44cd3b3e7b0981bbf")
            }
        }
    }
)

//Ingresando un Avance al Proyecto
db.projects.updateOne({
    _id: ObjectId("61a7c36f4cd3b3e7b0981bbd")
},
    {
        $addToSet: {
            progress: {
                $each: [{
                    id: ObjectId(),
                    date: "2021-12-01",
                    description: "Descripcion",
                    observation: "OBS",
                    createdBy: "1006108674"
                }]
            }
        }
    }
)

//Actualizar la descripcion de un avance del Proyecto
db.projects.updateOne({
    _id: ObjectId("61a7c36f4cd3b3e7b0981bbd")
},
    {
        $set: {
            progress: {
                $each: [{
                    date: "2021-12-01",
                    description: "Descripcion",
                    observation: "OBS",
                    createdBy: "1006108674"
                }]
            }
        }
    }
)

//Actualizar una propiedad de una Inscripcion
db.projects.updateOne({
    "progress.id": ObjectId("61a7ca794cd3b3e7b0981bc1")
},
    {
        $set: {
            "progress.$.observation": "Rechazado"
        }
    }
)

//Eliminando un Avance del Proyecto
db.projects.updateOne({
    _id: ObjectId("61a7c36f4cd3b3e7b0981bbd")
},
    {
        $pull: {
            progress: {
                id: ObjectId("61a7c4a44cd3b3e7b0981bbf")
            }
        }
    }
)

//Insertar Usuario
db.users.insertOne({
    email: "crihstianmol@gmail.com",
    DNI: "1006108674",
    name: "Crihstian Camilo",
    lastName: "Molina Castro",
    password: "password123",
    status: "Pendiente",
    role: "Admin"
})

//Buscar usuario por Nombre
db.users.find({ name: "Crihstian" })

//Actualizar el estado de un usuario a Autorizado
db.users.updateOne({

    //Es bueno intentar hacerlo por una propiedad unica, ya sea email, DNI o _id
    _id: ObjectId("61a7cee54cd3b3e7b0981bc2")
},
    {
        $set: { status: "Autorizado" }
    }
)

//Elimin un usuario por id
db.users.deleteOne({
    //Es bueno intentar hacerlo por una propiedad unica, ya sea email, DNI o _id
    _id: ObjectId("61a7cee54cd3b3e7b0981bc2")
})

//Actualizar estado de un Proyecto
db.projects.updateOne({
    _id: ObjectId("61a7c36f4cd3b3e7b0981bbd")
},
    { 
        $set:{
            status:"Activo" 
        }

    }
)
//Actualizar fase de un Proyecto
db.projects.updateOne({
    _id: ObjectId("61a7c36f4cd3b3e7b0981bbd")
},
    { 
        $set:{
            phase:"Iniciado" 
        }

    }
)
