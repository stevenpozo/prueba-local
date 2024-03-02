import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tema, TemaDocument } from './temas.model';

@Injectable()
export class TemasService {
    constructor(@InjectModel(Tema.name) private TemaModel: Model<TemaDocument>) {}

    async createTema(TemaData: Tema): Promise<Tema> {
        const nuevoTema = new this.TemaModel(TemaData);
        return nuevoTema.save();
    }

    async getTemas(): Promise<Tema[]> {
        return this.TemaModel.find().exec();
    }

    async getTema(id: string): Promise<Tema> {
        return this.TemaModel.findById(id).exec();
    }

    async updateTema(id: string, TemaData: Tema): Promise<Tema> {
        return this.TemaModel.findByIdAndUpdate(id, TemaData, { new: true }).exec();
    }

    async deleteTema(id: string): Promise<Tema> {
        return this.TemaModel.findByIdAndDelete(id).exec();
    }
}
