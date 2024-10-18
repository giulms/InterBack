import mongoose from "mongoose";

const usuariosSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, require: true },
    sobrenome: { type: String, require:true },
    email: { type: String, require:true },
    senha: { type: String, require:true },
}, {versionKey: False});

const usuarios = mongoose.model("Usuarios", usuariosSchema);

export default usuarios;