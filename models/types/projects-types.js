import { gql } from "apollo-server-express";

const tiposProject = gql`
  type objectiveItem {
    id: String!
    user: String!
    objective: String!
  }

  type inscriptionItem {
    id: String!
    studentId: String!
    joinDate: String!
    leftDate: String!
    status: Enum_insProj!
  }

  type inscriptionItemWithProject {
    projectId: String!
    id: String!
    studentId: String!
    joinDate: String!
    leftDate: String!
    status: Enum_insProj!
  }

  type progressItem {
    id: String!
    date: String!
    description: String!
    observation: String!
    createdBy: String!
  }

  input projectFields {
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
    Project(_id: String!): Project
    Projects: [Project]
    myProjects(leaderId: String!): [Project]
    myRequests(leaderId: String!): [inscriptionItemWithProject]
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

    updateProjectPhase(phase: String!, _id: String!): Project

    updateStatusProject(_id: String!, status: String!): Project

    createProgress(
      _id: String!
      date: String!
      description: String!
      observation: String!
      createdBy: String!
    ): progressItem

    updateProgress(
      _id: String!
      id_prog: String!
      description: String!
    ): progressItem

    editProject(_id: String!, fields: projectFields!): Project
  }
`;

export { tiposProject };
