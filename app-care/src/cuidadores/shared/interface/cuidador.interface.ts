
import { Document }  from 'mongoose'
export interface Cuidador extends Document {
    nome: string,
    email: string,
    telefone: string,
    observacao: string,
    experiencia: number,
    entrada: Date,
    saida: Date,
    diaria: number
}
