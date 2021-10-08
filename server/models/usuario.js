const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
});

const Usuario = mongoose.model("Usuario", userSchema);

module.exports = Usuario;
