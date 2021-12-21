import { gql } from "apollo-server-express";

const tiposProject = gql`
  type objectiveItem {
    id: ID!
    user: String!
    objective: String!
  }

  type inscriptionItem {
    id: ID!
    studentId: String!
    joinDate: String!
    leftDate: String!
    status: Enum_insProj!
  }

  type progressItem {
    id: ID!
    date: String!
    description: String!
    observation: String
    createdBy: String!
  }
  
  input objectiveInput {
    user: String
    objective: String
  }

  input inscriptionInput {
    studentId: String
    joinDate: String
    leftDate: String
    status: Enum_insProj
  }

  input progressInput {
    date: String
    description: String
    observation: String
    createdBy: String
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

  type ProjectProgress {
    progress: [progressItem]
  }
  type ProjectInscriptions {
    inscriptions: [inscriptionItem]
  }
  type ProjectGenObjectives {
    generalObj: [objectiveItem]
  }
  type ProjectSpecObjectives {
    specificObj: [objectiveItem]
  }

  type Query {
    Projects(
      _id: ID
      projectName: String
      budget: Float
      startDate: String
      endDate: String
      leaderId: String
      leaderName: String
      status: Enum_statusProj
      phase: Enum_phaseProj
    ): [Project]
    
    Inscriptions(
      _id: ID
    ): [ProjectInscriptions]
    
    Progress(
      _id: ID
    ): [ProjectProgress]
    
    GeneralObjectives(
      _id: ID
    ): [ProjectGenObjectives]
    
    SpecificObjectives(
      _id: ID
    ): [ProjectSpecObjectives]
  }
  
  type Mutation {
    createProject(
      projectName: String!
      budget: Float!
      startDate: String!
      endDate: String!
      leaderId: String!
      leaderName: String!
      status: Enum_statusProj
      phase: Enum_phaseProj
      generalObj: [objectiveInput]
      specificObj: [objectiveInput]
      inscriptions: [inscriptionInput]
      progress: [progressInput]
    ): Project

    updateProject(
      _id: ID!
      projectName: String
      budget: Float
      startDate: String
      endDate: String
      leaderId: String
      leaderName: String
      status: Enum_statusProj
      phase: Enum_phaseProj
    ): Project

    createInscription(
      _idProject: ID!
      inscription: inscriptionInput
    ): ProjectInscriptions
    
    updateInscription(
      _idProject: ID!
      _idInscription: ID!
      inscription: inscriptionInput
    ): ProjectInscriptions
    
    createProgress(
      _idProject: ID!
      progress: progressInput
    ): ProjectProgress
    
    updateProgress(
      _idProject: ID!
      _idProgress: ID!
      progress: progressInput
    ): ProjectProgress
    
    createGeneralObjective(
      _idProject: ID!
      objective: objectiveInput
    ): ProjectGenObjectives
    
    updateGeneralObjective(
      _idProject: ID!
      _idGeneralObjective: ID!
      objective: objectiveInput
    ): ProjectGenObjectives
    
    createSpecificObjective(
      _idProject: ID!
      objective: objectiveInput
    ): ProjectSpecObjectives
    
    updateSpecificObjective(
      _idProject: ID!
      _idSpecificObjective: ID!
      objective: objectiveInput
    ): ProjectSpecObjectives
  }
`;

export { tiposProject };
