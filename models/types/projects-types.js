import { gql } from 'apollo-server-express';

const tiposProyecto = gql`
  type objectiveItem {
    user: String!
    objective: String!
  }
  
  type inscriptionItem {
    studentId: String!
    joinDate: String!
    leftDate: String!
    status: Enum_insProj!
  }
  
  type progressItem {
    date: String!
    description: String!
    observation: String!
    createdBy: String!
  }
  
  input projectFields{
    projectName: String
    budget: Double
    startDate: String
    endDate: String
    leaderId: String
    leaderName: String
    status: String
    phase: String
    generalObj: [objectiveItem]
    specificObj: [objectiveItem]
    inscriptions: [inscriptionItem]
    progress: [progressItem]
  }

  type Project {
    _id: ID!
    projectName: String!
    budget: Double!
    startDate: String!
    endDate: String!
    leaderId: String!
    leaderName: String!
    status: String!
    phase: String!
    generalObj: [objectiveItem]
    specificObj: [objectiveItem]
    inscriptions: [inscriptionItem]
    progress: [progressItem]
  }
  
  type Query {
    Projects: [Project]
  }

  type Mutation {
    createProject(
        projectName: String!
        budget: Double!
        startDate: String!
        endDate: String!
        leaderId: String!
        leaderName: String!
        status: String!
        phase: String!
        generalObj: [objectiveItem]
        specificObj: [objectiveItem]
        inscriptions: [inscriptionItem]
        progress: [progressItem]
    ): Project

    editProject(_id: String!, fields: projectFields!): Project
    
  }
`;

export { tiposProyecto };
