import { ProjectModel } from "../schema/projects-schema.js";

const projectResolvers = {
  Mutation: {
    createProject: async (root, args) => {
      let projectargs = args;
      projectargs.phase = projectargs.phase.replace("_", " ");
      console.log(projectargs);
      const project = await ProjectModel.create({
        projectName: projectargs.projectName,
        budget: projectargs.budget * 1.001,
        startDate: projectargs.startDate,
        endDate: projectargs.endDate,
        leaderId: projectargs.leaderId,
        leaderName: projectargs.leaderName,
        status: projectargs.status,
        phase: projectargs.phase,
      });
      return project;
    },
    updateProjectPhase: async (root, args) => {
      let phaseArgs = args;
      const project = await ProjectModel.updateOne(
        {
          _id: phaseArgs._id,
        },
        {
          phase: phaseArgs.phase,
        }
      );

      return project;
    },
    updateStatusProject: async (root, args) => {
      let statusArgs = args;
      const project = await ProjectModel.updateOne(
        { _id: statusArgs._id },
        { status: statusArgs.status }
      );
      return project;
    },
    createProgress: async (root, args) => {
      let progress = args;
      const project = await ProjectModel.findOneAndUpdate(
        {
          _id: progress._id,
        },
        {
          $addToSet: {
            progress: {
              date: progress.date,
              description: progress.description,
              observation: progress.observation,
              createdBy: progress.createdBy,
            },
          },
        },
        {
          upsert: true,
        }
      );

      return project;
    },
    updateProgress: async (root, args) => {
      let progress = args;
      const project = await ProjectModel.findOneAndUpdate(
        {
          _id: progress._id,
          "progress._id": progress.id_prog,
        },
        {
          $set: { "progress.$.description": progress.description },
        },
        {
          upsert: true,
        }
      );

      return project;
    },
  },
  Query: {
    Project: async (root, args) => {
      const project = await ProjectModel.findOne({ _id: args._id });
      return project;
    },
    Projects: async () => {
      const projects = await ProjectModel.find();
      return projects;
    },
    myProjects: async (root, args) => {
      const projects = await ProjectModel.find({ leaderId: args.leaderId });
      return projects;
    },
    myRequests: async (root, args) => {
      const projects = await ProjectModel.find({ leaderId: args.leaderId });
      const reqs = [];

      projects.forEach((project) => {
        if (!project.inscriptions) return;

        project.inscriptions.forEach((inscription) => {
          if (inscription.status == "Pendiente") {
            const inscriptionCopied = JSON.parse(JSON.stringify(inscription));
            inscriptionCopied["projectId"] = project.id;
            reqs.push(inscriptionCopied);
          }
        });
      });
      return reqs;
    },
  },
};

export { projectResolvers };
