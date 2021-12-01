import { gql } from 'apollo-server-express';

const tiposEnums = gql`
  enum Enum_userStatus {
    Pendiente
    Autorizado
    No_Autorizado
  }

  enum Enum_userRol {
    Estudiante
    Lider
    Admin
  }
  
  enum Enum_insProj {
      Aceptado
      Rechazado
  }

`;

export { tiposEnums };
