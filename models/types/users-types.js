import { gql } from 'apollo-server-express';

const tiposUser = gql`
  type User {
    _id: ID!
    email: String!
    DNI: String!
    name: String!
    lastName: String!
    password: String!
    status: Enum_userStatus!
    role: Enum_userRol!
  }

  type Query {
    Users: [User]
    User(_id: String!): User
    Students: [User]
  }

  type Mutation {
    createUser(
        email: String!
        DNI: String!
        name: String!
        lastName: String!
        password: String!
        status: Enum_userStatus!
        role: Enum_userRol!
    ): User

    editUser(
        _id: String!
        email: String!
        DNI: String!
        name: String!
        lastName: String!
        password: String!
        status: Enum_userStatus!
    ): User

    deleteUser(_id: String, email: String): User
  }
`;

export { tiposUser };
