import { ProjectModel } from '../schema/projects-schema.js';

const projectResolvers = {
    Mutation:{
        createProject: async(root,args)=>{
            let projectargs = args;
            projectargs.phase = projectargs.phase.replace("_"," ");
            console.log(projectargs)
            const project = await ProjectModel.create({
                projectName: projectargs.projectName,
                budget: projectargs.budget * 1.001,
                startDate: projectargs.startDate,
                endDate: projectargs.endDate,
                leaderId: projectargs.leaderId,
                leaderName: projectargs.leaderName,
                status: projectargs.status,
                phase: projectargs.phase
            });
            return project;
        }
    },
    Query:{
        Project:async(root,args) =>{
            const project = await ProjectModel.findOne({_id:args._id})
            return project
        },
        Projects: async() =>{
            const projects = await ProjectModel.find()
            return projects
        },
        myProjects: async(root,args) =>{
            const projects = await ProjectModel.find({leaderId: args.leaderId})
            return projects
        },
        myRequests: async(root,args) =>{
            const projects = await ProjectModel.find({leaderId: args.leaderId})
            const reqs = []

            projects.forEach(project =>{
                if(!project.inscriptions)return

                project.inscriptions.forEach(inscription =>{
                    if(inscription.status == 'Pendiente'){
                        const inscriptionCopied = JSON.parse(JSON.stringify(inscription))
                        inscriptionCopied["projectId"] = project.id
                        reqs.push(inscriptionCopied)
                    }
                })
            })
            return reqs
        }
    }
};

export {projectResolvers};