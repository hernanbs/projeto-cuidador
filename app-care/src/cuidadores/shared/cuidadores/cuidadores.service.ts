import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cuidador } from '../interface/cuidador.interface'

@Injectable()
export class CuidadoresService {

    constructor(@InjectModel('cuidadores') private readonly cuidadorModel: Model<Cuidador>) {}

    async getAll() {
        return await this.cuidadorModel.find().exec()
    }

    getById(id: string) {
        return this.cuidadorModel.findById(id).exec()
    }

    create(cuidador: Cuidador ) {
        const novoCuidador = new this.cuidadorModel(cuidador)
        return novoCuidador.save()
    }

    update(id: string, cuidador: Cuidador ) {
        this.cuidadorModel.updateOne({_id: id}, cuidador).exec()
        return this.getById(id)
    }

    delete(id: string) {
        return this.cuidadorModel.deleteOne({_id: id}).exec()
    }
}
