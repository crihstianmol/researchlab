import { gql } from 'apollo-server-express';

const tiposProject = gql`
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
    budget: Float
    startDate: String
    endDate: String
    leaderId: String
    leaderName: String
    status: Enum_statusProj
    phase: Enum_phaseProj
  }

  type Project {
    _id: ID!
    projectName: String!
    budget: Float!
    startDate: String!
    endDate: String!
    leaderId: String!
    leaderName: String!
    status: Enum_statusProj!
    phase: Enum_phaseProj!
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
        budget: Float!
        startDate: String!
        endDate: String!
        leaderId: String!
        leaderName: String!
        status: Enum_statusProj!
        phase: Enum_phaseProj!
    ): Project

    editProject(_id: String!, fields: projectFields!): Project
    
  }
`;

export { tiposProject };
