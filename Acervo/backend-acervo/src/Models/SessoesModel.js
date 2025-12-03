const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SessoesSchema = new Schema ({
    id_usuario: {
        type: Schema.Types.ObjectId,
        ref: 'usuarios',
        required:[true, "O Id do usuário é obrigatório"]
    },
    tempo_login: {
        type: Date,
        default: Date.now,
        required: true
    },
    tempo_logout: {
        type: Date,
        default: null
    }
}, {
    timestamps: true
})

const SessoesModel = mongoose.model('sessoes', SessoesSchema);


module.exports = SessoesModel;