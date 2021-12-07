import { gql } from 'apollo-server-express';

const tiposUser = gql`
  type UserReg {
    _id: ID!
    email: String!
    DNI: String!
    name: String!
    lastName: String!
    password: String!
    status: Enum_userStatus!
    role: Enum_userRol!
  }
  
  type User {
    _id: ID!
    email: String!
    DNI: String!
    name: String!
    lastName: String!
    status: Enum_userStatus!
    role: Enum_userRol!
  }

  type LogUser{
    response: String!
    jwt: String!
  }

  type Query {
    Users(
      _id: String
      email: String
      DNI: String
      name: String
      lastName: String
      role: Enum_userRol
      status: Enum_userStatus
    ): [User]

    loginUser(
        email: String!
        password: String!
    ): LogUser
  }

  type Mutation {
    createUser(
        email: String!
        DNI: String!
        name: String!
        lastName: String!
        password: String!
        role: Enum_userRol!
    ): UserReg


    updateUser(
        _id: String!
        email: String
        DNI: String
        name: String
        lastName: String
        password: String
        role: Enum_userRol
    ): UserReg
  }
`;

export { tiposUser };
