import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const projectSchema = new Schema(
  {
    projectName: {
      type: String,
      required: true
    },
    budget: {
      type: Number,
      required: true,
    },
    startDate: {
      type: String,
      required: true
    },
    endDate: {
      type: String,
      required: true
    },
    leaderId: {
      type: String,
      required: true
    },
    leaderName: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['Activo', 'Inactivo'],
      default: 'Inactivo'
    },
    phase: {
      type: String,
      enum: ['Iniciado', 'En desarrollo', 'Finalizado', null],
      default: null
    },
    generalObj: [
      {
        user: {
          type: String,
          required: true
        },
        objective: {
          type: String,
          required: true
        },
      }
    ],
    specificObj: [
      {
        user: {
          type: String,
          required: true
        },
        objective: {
          type: String,
          required: true
        },
      }
    ],
    inscriptions: [
      {
        studentId: {
          type: String,
          required: true
        },
        joinDate: {
          type: String,
          required: true
        },
        leftDate: {
          type: String,
          required: true
        },
        status: {
          type: String,
          enum: ['Pendiente', 'Aceptado', 'Rechazado'],
          required: true
        },
      }
    ],
    progress: [
      {
        date: {
          type: String,
          required: true
        },
        description: {
          type: String,
          required: true
        },
        observation: {
          type: String
        },
        createdBy: {
          type: String,
          required: true
        },
      }
    ]
  },
  {
    versionKey: false,
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
  }
);

const ProjectModel = model('projects', projectSchema);

export { ProjectModel };
