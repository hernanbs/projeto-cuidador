import * as mongoose from 'mongoose'

export const CuidadorSchema = new mongoose.Schema({
    nome: String,
    email: String,
    telefone: String,
    observacao: String,
    experiencia: Number,
    entrada: String,
    saida: String,
    diaria: Number
})