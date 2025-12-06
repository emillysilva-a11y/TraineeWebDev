const ProjetosModel = require("../Models/ProjetosModel");

class ProjetosController{
async create(req, res){
    try {
        const projeto = await ProjetosModel.create(req.body);
        return res.status(201).json(projeto);
    } catch (error) {
        res.status(500).json({
            message: "Erro ao criar projeto",
            error: error.message
        });
    }
};
    
async read(req, res){
    try {
        const projetos = await ProjetosModel.find();

        return res.status(200).json(projetos)
    } catch (error) {
        return res.status(500).json({
            message: "Erro ao buscar projetos"
        });
    }
}

async getById(req, res){
    try {
        const { id } = req.params;
        const projeto = await ProjetosModel.findById(id);

        if(!projeto){
            return res.status(404).json({ message:"Projeto não encontrado" })
        }
        return res.status(200).json(projeto);
    } catch (error) {
        if (error.name === 'CastError'){
            return res.status(400).json({ message: "ID de projeto inválido."});
        }
        res.status(500).json({ 
            message: "Erro ao buscar projeto por ID!", 
            error: error.message
        });
    }
}

async update(req, res){
    try {
        const { id } = req.params;
        const projetoAtualizado = await ProjetosModel.findByIdAndUpdate(id, req.body, { new:true, runValidators: true });
        if (!projetoAtualizado) return res.status(404).json({ message: "Projeto não encontrado!" });
        res.status(200).json(projetoAtualizado)
    } catch (error) {
        res.status(500).json({
            message: "Erro ao tentar atualizar o projeto",
            error: error.message
        });
    }
}
    
async delete(req, res){
    try {
        const { id } = req.params;
        const projetoDeletado = await ProjetosModel.findByIdAndDelete(id); 
        if (!projetoDeletado) return res.status(404).json({ message: "Projeto não encontrado!" });
        return res.status(200).json({ message: "Projeto deletado com sucesso!"});
    } catch (error) {
        if (error.name === 'CastError'){
            return res.status(400).json({ message: "ID de projeto inválido."});
        }
        res.status(500).json({
            message: "Erro ao tentar deletar o projeto", 
            error: error.message 
            });
        } 
    }
}

module.exports = new ProjetosController();