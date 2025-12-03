const UsuarioModel = require ("../Models/UsuarioModel");
const AuthController = require ("./AuthController");

class UsuarioController {

    async create(req, res){
        try {
        
        const{ senha, ...userData } = req.body;

        const hashedpassword = await AuthController.hashsenha(senha);

        const usuario = await UsuarioModel.create({
            ...userData,
            senha: hashedpassword
        });

        const { senha: hashedsenha, ...novoUsuario } = usuario.toObject();

        return res.status(200).json(novoUsuario);
        } catch (error) {   
            res.status(500).json({message: "Erro no cadastro.", error: error.message })
        }
        
    }
 
    async read(req, res){
        try {
        const usuarios = await UsuarioModel.find();

        return res.status(200).json(usuarios)
        } catch (error) {
            res.status(500).json({message: "Deu ruim aqui!!", error: error.message })
        }
    }

    async getById(req,res){
        try {
            const{ id } = req.params;
            const usuario = await UsuarioModel.findById(id);

            if(!usuario){
                return res.status(404).json({ message:"Usuário não encontrado" })
            }

            const { senha, ...usuarioEncontrado } = usuario.toObject();

            return res.status(200).json(usuarioEncontrado);
        } catch (error) {
            if (error.name === 'CastError'){
                return res.status(400).json({ message: "ID de usuário inválido."});
            }
            res.status(500).json({ message: "Erro ao buscar usuário po ID!", error: error.message });
        }
    }

    async update(req, res){
        try {
        const { id } = req.params;

        if (req.body.senha){

        req.body.senha = await AuthController.hashsenha(req.body.senha);}

        const usuariosAtualizado = await UsuarioModel.findByIdAndUpdate(id, req.body, { new:true, runValidators: true });

        if (!usuariosAtualizado) return res.status(404).json({ message: "Usuário não encontrado!" });

        const { senha, ...usuarioAtualizado} = usuario.toObject();

        res.status(200).json(usuarioAtualizado)
        } catch (error) {
            res.status(500).json({message: "Erro ao tentar atualizar o usuário", error: error.message })
        }
    }
    
    async delete(req, res){
        try {
        const { id } = req.params;

        const usuariosDeletado = await UsuarioModel.findByIdAndDelete(id); 
        if (!usuariosDeletado) return res.status(404).json({ message: "Usuário não encontrado!" });

        await usuariosDeletado.deleteOne();

        res.status(200).json({ "mensagem": "Usuario deletado com sucesso!"});
        } catch (error) {
            res.status(500).json({message: "Deu ruim aqui!!", error: error.message })
        }
        
}

}

module.exports = new UsuarioController();