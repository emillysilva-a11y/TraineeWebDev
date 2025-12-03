const SessoesModel = require ("../Models/SessoesModel");
const UsuarioModel = require ("../Models/UsuarioModel");

class SessoesController {

    async create(req, res){
        const id_usuario = req.usuarioId;
        try {
            const sessaoAtiva = await SessoesModel.findOne({
                id_usuario: id_usuario,
                tempo_logout: null
            });
            if(sessaoAtiva){
                return res.status(400).json({ message: "O usuário já possui uma sessão ativa."})
            }

            const novaSessao = await SessoesModel.create({ id_usuario });

            return res.status(201).json({ message: "Sessão iniciada", sessao: novaSessao});
        } catch (error) {
            res.status(500).json({message: "Erro ao tentai iniciar a sessão", error: error.message })
        }
    }

    async sessaoEncerrada(req, res){
        const id_usuario = req.usuarioId;

        try {
            const sessaoAtiva = await SessoesModel.findOne({
                id_usuario: id_usuario,
                tempo_logout: null
            });
            if(!sessaoAtiva){
                return res.status(404).json({ message: "Nenhuma sessão ativa."})
            }
            sessaoAtiva.tempo_logout = new Date();
            await sessaoAtiva.save();

            return res.status(200).json({ message: "Sessão finalizada com sucesso" })
        } catch (error) {
            return res.status(500).json({ message: "Erro ao finalizar a sessão", error: error.message});
        }
    }
 
    async read(req, res){
        const id_usuario = req.usuarioId;

        try {
        const sessoes = await SessoesModel.find({ id_usuario: id_usuario})
        .populate('id_usuario', '-senha').sort({ tempo_login:-1 });

        return res.status(200).json(sessoes)
        } catch (error) {
            res.status(500).json({message: "Erro ao buscar histórico de sessões", error: error.message })
        }
    }
    
    async delete(req, res){
        try {
        const { id_usuario } = req.params;
        
        const sessaoEncontrada = await SessoesModel.findOne({
            id_usuario,
        });
        if(!sessaoEncontrada)
            return res.status(404).json({ message: "Sessão não encontrada" });
            console.log(sessaoEncontrada);
        await sessaoEncontrada.deleteOne();

        res.status(200).json({"mensagem": "Sessão deletada com sucesso!"})
        } catch (error) {
            res.status(500).json({message: "Deu ruim aqui!!", error: error.message });
        }  
    }
}

module.exports = new SessoesController();