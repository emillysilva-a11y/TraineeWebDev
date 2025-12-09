const { Router } = require("express");
const UsuarioController = require("./Controllers/UsuarioController");
const SessoesController = require("./Controllers/SessoesController");
const AuthController = require("./Controllers/AuthController");
const ProjetosController = require("./Controllers/ProjetosController");
const UsuarioValidator = require("./Validators/UsuarioValidator");
const SessoesValidator = require("./Validators/SessoesValidator");
const AuthValidator = require("./Validators/AuthValidator");
const ProjetosValidator = require("./Validators/ProjetosValidator");
const verificarJwt = require("./Middlewares/verificarJwt");
const verificarUsuario = require("./Middlewares/verificarUsuario");

const rotas = Router();

//USUARIOS
rotas.post('/usuarios',UsuarioValidator.create, UsuarioController.create);
rotas.get('/usuarios', verificarJwt, UsuarioController.read);
rotas.delete('/usuarios/:id', verificarJwt, verificarUsuario, UsuarioValidator.destroy,  UsuarioController.delete);
rotas.put('/usuarios/:id', verificarJwt, verificarUsuario, UsuarioValidator.update, UsuarioController.update)
rotas.post('/api/cadastro', UsuarioController.create);

//PROJETOS
rotas.post('/projetos', verificarJwt, ProjetosValidator.create, ProjetosController.create);
rotas.get('/projetos', verificarJwt, ProjetosController.read);
rotas.get('/projetos/:id', verificarJwt, ProjetosValidator.destroy, ProjetosController.getById);
rotas.put('/projetos/:id', verificarJwt, ProjetosValidator.update, ProjetosController.update);
rotas.delete('/projetos/:id', verificarJwt, ProjetosValidator.destroy, ProjetosController.delete);

//SESSOES
rotas.post('/sessoes', verificarJwt, SessoesValidator.create, SessoesController.create);
rotas.put('/sessoes/start', verificarJwt, SessoesValidator.create, SessoesController.create);
rotas.put('/sessoes/end',verificarJwt, SessoesValidator.sessaoEncerrada, SessoesController.sessaoEncerrada)
rotas.get('/sessoes', verificarJwt, SessoesController.read);
rotas.delete('/sessoes/:id_usuario', verificarJwt, verificarUsuario, SessoesValidator.destroy, SessoesController.delete);

//AUTH
rotas.post("/login", AuthValidator.login, AuthController.login)


module.exports = rotas;