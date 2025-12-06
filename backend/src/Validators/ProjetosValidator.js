const mongoose = require("mongoose");
const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");

const create = validateRequest({
    body: z.object({
    nome: z.string({
        required_error: "O nome do projeto é obrigatório"
    }).min(1, "O nome não pode ser vazio"),
    cor: z.string().optional(),
    }),
});

const destroy = validateRequest({
        params: z.object({
        id: z.custom(mongoose.isValidObjectId, "O ID do projeto não é válido"), 
    }),
});

const update = validateRequest({
    body: z.object({
        nome: z.string().optional(),
        cor: z.string().optional(),
        }).strict().refine(data => data.nome !== undefined || data.cor !== undefined, {
            message: "Pelo menos um campo (nome ou cor) deve ser fornecido para atualização",
            path: ["body"],
    }),
    params: z.object({
        id: z.custom(mongoose.isValidObjectId, "O ID do projeto não é válido"),
    })
});

module.exports = {
    create,
    destroy,
    update,
};
    
