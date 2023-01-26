const mongoose = require('../database/dbConnection')

const UserSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      index: true
    },
    email: {
      type: String,
      required: true
    },
    login: {
      type: String,
      required: true,
      index: true
    },
    senha: {
      type: String,
      required: true
    },
    createdAt: {
      type: String
    }
  },
  {
    versionKey: false // You should be aware of the outcome after set to false
  }
)
const Users = mongoose.model('Users', UserSchema)
module.exports = Users
