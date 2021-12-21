import { ProjectModel } from "../schema/projects-schema.js";

const projectResolvers = {
  Mutation: {
    createProject: async (root, args) => {
      let projectargs = args;
      if (projectargs.phase == undefined) {
        projectargs.phase = "Iniciado"
      } else {
        projectargs.phase = projectargs.phase.replace("_", " ");
      }
      if (projectargs.status == undefined) {
        projectargs.status = "Inactivo"
      }
      if (projectargs.budget) {
        projectargs.budget = (projectargs.budget * 1.01).toFixed(2)
      }
      const project = await ProjectModel.create(projectargs);
      return project;
    },
    updateProject: async (root, args) => {
      let projectargs = args;
      if (projectargs.phase) {
        projectargs.phase = projectargs.phase.replace("_", " ");
      }
      if (projectargs.budget) {
        projectargs.budget = (projectargs.budget * 1.01).toFixed(2)
      }
      let project = await ProjectModel.findOneAndUpdate({ _id: projectargs._id }, projectargs);
      project = await ProjectModel.findOne({ _id: projectargs._id })
      project.phase = project.phase.replace(" ","_")
      return project;
    },
    createInscription: async (root, args) => {
      let inscription = args.inscription
      let inscriptions = await ProjectModel.findOneAndUpdate(
        {
          _id: args._idProject
        },
        {
          $addToSet: {
            inscriptions: {
              $each: [ inscription ]
            }
          }
        }
      )
      inscriptions = await ProjectModel.findOne({ _id: args._idProject }).select({ "inscriptions": 1, "_id": 0 });
      return inscriptions
    },
    updateInscription: async (root, args) => {
      let inscription = args.inscription
      let inscriptionReg = {}
      if (inscription.studentId) {
        inscriptionReg = {
          "inscriptions.$.studentId": inscription.studentId
        }
      }
      if (inscription.status) {
        inscriptionReg = {
          ...inscriptionReg,
          "inscriptions.$.status": inscription.status
        }
      }
      if (inscription.joinDate) {
        inscriptionReg = {
          ...inscriptionReg,
          "inscriptions.$.joinDate": inscription.joinDate
        }
      }
      if (inscription.leftDate) {
        inscriptionReg = {
          ...inscriptionReg,
          "inscriptions.$.leftDate": inscription.leftDate
        }
      }
      let inscriptions = await ProjectModel.findOneAndUpdate(
        {
          _id: args._idProject,
          "inscriptions._id": args._idInscription
        },
        {
          $set: inscriptionReg
        }
      )
      inscriptions = await ProjectModel.findOne({ _id: args._idProject }).select({ "inscriptions": 1, "_id": 0 });
      return inscriptions
    },
    createProgress: async (root, args) => {
      let progress = args.progress
      let progresses = await ProjectModel.findOneAndUpdate(
        {
          _id: args._idProject
        },
        {
          $addToSet: {
            progress: {
              $each: [{
                date: progress.date,
                description: progress.description,
                createdBy: progress.createdBy
              }]
            }
          }
        }
      )
      progresses = await ProjectModel.find({ _id: args._idProject }, { progress: 1 });
      return progresses
    },
    updateProgress: async (root, args) => {
      let progres = args.progress
      let progresReg = {}
      if (progres.date) {
        progresReg = {
          "progress.$.date": progres.date
        }
      }
      if (progres.description) {
        progresReg = {
          ...progresReg,
          "progress.$.description": progres.description
        }
      }
      if (progres.createdBy) {
        progresReg = {
          ...progresReg,
          "progress.$.createdBy": progres.createdBy
        }
      }
      if (progres.observation) {
        progresReg = {
          ...progresReg,
          "progress.$.observation": progres.observation
        }
      }
      let progress = await ProjectModel.findOneAndUpdate(
        {
          _id: args._idProject,
          "progress.id": args._idProgress
        },
        {
          $set: progresReg
        }
      )
      progress = await ProjectModel.findOne({ _id: args._idProject }).select({ "progress": 1, "_id": 0 });
      return progress
    },
    createGeneralObjective: async (root, args) => {
      let genObjective = args.objective
      let objectives = await ProjectModel.findOneAndUpdate(
        {
          _id: args._idProject
        },
        {
          $addToSet: {
            generalObj: {
              $each: [{
                user: genObjective.user,
                objective: genObjective.objective
              }]
            }
          }
        }
      )
      objectives = await ProjectModel.find({ _id: args._idProject }, { generalObj: 1 });
      return objectives
    },
    updateGeneralObjective: async (root, args) => {
      let genObj = args.objective
      let genObjReg = {}
      if (genObj.user) {
        genObjReg = {
          "generalObj.$.user": genObj.user
        }
      }
      if (genObj.objective) {
        genObjReg = {
          ...genObjReg,
          "generalObj.$.objective": genObj.objective
        }
      }
      let generalObj = await ProjectModel.findOneAndUpdate(
        {
          _id: args._idProject,
          "generalObj._id": args._idGeneralObjective
        },
        {
          $set: genObjReg
        }
      )
      generalObj = await ProjectModel.findOne({ _id: args._idProject }).select({ "generalObj": 1, "_id": 0 });
      return generalObj
    },
    createSpecificObjective: async (root, args) => {
      let specObjective = args.objective
      let objectives = await ProjectModel.findOneAndUpdate(
        {
          _id: args._idProject
        },
        {
          $addToSet: {
            specificObj: {
              $each: [{
                user: specObjective.user,
                objective: specObjective.objective
              }]
            }
          }
        }
      )
      objectives = await ProjectModel.find({ _id: args._idProject }, { specificObj: 1 });
      return objectives
    },
    updateSpecificObjective: async (root, args) => {
      let specObj = args.objective
      let specObjReg = {}
      if (specObj.user) {
        specObjReg = {
          "specificObj.$.user": specObj.user
        }
      }
      if (specObj.objective) {
        specObjReg = {
          ...specObjReg,
          "specificObj.$.objective": specObj.objective
        }
      }
      let specificObj = await ProjectModel.findOneAndUpdate(
        {
          _id: args._idProject,
          "specificObj._id": args._idSpecificObjective
        },
        {
          $set: specObjReg
        }
      )
      specificObj = await ProjectModel.findOne({ _id: args._idProject }).select({ "specificObj": 1, "_id": 0 });
      return specificObj
    },
  },
  Query: {
    Projects: async (root, args) => {
      let filtro = {
      }
      if (args._id) {
        filtro._id = args._id
      }
      if (args.projectName) {
        filtro.projectName = args.projectName
      }
      if (args.budget) {
        filtro.budget = args.budget
      }
      if (args.startDate) {
        filtro.startDate = args.startDate
      }
      if (args.endDate) {
        filtro.endDate = args.endDate
      }
      if (args.leaderId) {
        filtro.leaderId = args.leaderId
      }
      if (args.leaderName) {
        filtro.leaderName = args.leaderName
      }
      if (args.status) {
        filtro.status = args.status
      }
      if (args.phase) {
        filtro.phase = args.phase
      }
      let projects = await ProjectModel.find(filtro);
      projects = projects.map(project =>{
        project.phase = project.phase.replace(" ","_")
        return project
      })
      console.log(projects)
      return projects;
    },
    Inscriptions: async (root, args) => {
      let filtro = {
      }
      if (args._id) {
        filtro._id = args._id
      }
      const projects = await ProjectModel.find(filtro, { inscriptions: 1 });
      return projects;
    },
    Progress: async (root, args) => {
      let filtro = {
      }
      if (args._id) {
        filtro._id = args._id
      }
      const projects = await ProjectModel.find(filtro, { progress: 1 });
      return projects;
    },
    SpecificObjectives: async (root, args) => {
      let filtro = {
      }
      if (args._id) {
        filtro._id = args._id
      }
      const projects = await ProjectModel.find(filtro, { specificObj: 1 });
      return projects;
    },
    GeneralObjectives: async (root, args) => {
      let filtro = {
      }
      if (args._id) {
        filtro._id = args._id
      }
      const projects = await ProjectModel.find(filtro, { generalObj: 1 });
      return projects;
    },
  },
};

export { projectResolvers };
