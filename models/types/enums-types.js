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
  
  enum Enum_phaseProj {
    Iniciado
    En_desarrollo
    Finalizado
  }
  
  enum Enum_statusProj {
    Activo
    Inactivo
  }

`;

export { tiposEnums };
