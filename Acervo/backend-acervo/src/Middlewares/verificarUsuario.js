function verificarUsuario(req, res, next){
    const logadoId = req.usuarioId;

    const recursoId = req.params.id || req.params.id_usuario || req.body.id_usuario;

    if(!logadoId || logadoId.Id.toString() !== recursoId.toString()){
        return res.status(403).json({ message:"Operação não autorizada."})
    }

    if(req.usuarioId !== usuarioId) return res.status(401).json({ message: "Operação não autorizada" });

    next();
}

module.exports = verificarUsuario;