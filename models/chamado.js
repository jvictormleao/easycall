const mongoose = require('../database/dbConnection')

const ChamadoSchema = new mongoose.Schema(
  {
    assunto: {
      type: String,
      index: true
    },
    descricao: {
      type: String,
      required: true
    },
    andamento: {
      type: String,
      enum: ['Aberto', 'Capturado', 'Em atendimento', 'Concluido'],
      default: 'Aberto'
    },
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users'
    },
    dataAbertura: {
      type: String,
      required: true
    },
    horaAbertura: {
      type: String,
      required: true
    },
    atendente: {
      type: String,
      required: false
    },
    createdAt: {
      type: String
    }
  },
  {
    versionKey: false // You should be aware of the outcome after set to false
  }
)
const Chamados = mongoose.model('Chamados', ChamadoSchema)
module.exports = Chamados
