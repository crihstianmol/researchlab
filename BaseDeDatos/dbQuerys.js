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