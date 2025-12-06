const mongoose = require("mongoose");
const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");

const simpleAction = validateRequest({
    body:z.object({}).strict()
});

const validateSessaoId = validateRequest({
    params: z.object({
        id_sessao: z.custom(mongoose.isValidObjectId, "O id da sessão não é válido"),
    }),
});


module.exports = {
    create: simpleAction,
    sessaoEncerrada: simpleAction,
    destroy: validateSessaoId
};