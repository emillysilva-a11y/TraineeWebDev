const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");


const login = validateRequest({
    body: z.object({
         email: z.string({required_error: "O email é obrigatório"})
        .email({message: "O email é inválido"}),
        senha: z.string({required_error: "A senha é obrigatória"}),
    })
})

const createUser = validateRequest({
    body: z.object({
        nome: z.string({
            required_error:"O nome é obrigatório"
        }),
        email: z.string({
            required_error: "O email é obrigatório"
        }).email({ message: "O email é inválido" }),
        senha: z.string({
            required_error: "A senha é obrigatória"
        }).min(6, "A senha deve ter no mínimo 6 caracteres"),
        cargo: z.string({
            required_error: "O cargo é obrigatório"
        }),
        status: z.string({
            required_error: "O status é obrigatório"
        })

    })
})

module.exports = {
    login, 
    createUser,
}