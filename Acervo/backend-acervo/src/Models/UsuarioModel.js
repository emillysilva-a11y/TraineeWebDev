const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsuariosSchema = new Schema ({
    email : {
        type: String,
        required: true,
        unique: true,
    },
    senha : {
        type: String,
        required: true,
        select: false,
    },
    nome : { 
        type: String,
        required: true,
        unique: true,
    },
    cargo : String,
    status : String
});

const UsuarioModel = mongoose.model('usuarios', UsuariosSchema);

module.exports = UsuarioModel;