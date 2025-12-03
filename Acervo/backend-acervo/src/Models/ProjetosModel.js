const mongoose = require("mongoose");

const ProjetoSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: [true, 'O nome do projeto é obrigatório.'],
        unique: true,
        trim: true
    },

    cor: {
        type: String,
        match: [/^#([0-9A-Fa-f]{3}){1,2}$/, "O formato da cor deve ser hexadecimal"],
        default: '#cccccc'
    }

},{
    timestamps: true
});

const Projetos = mongoose.model('Projetos', ProjetoSchema);

module.exports = Projetos;