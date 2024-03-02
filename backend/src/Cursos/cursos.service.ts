import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Curso, CursoDocument } from './curso.model';

@Injectable()
export class CursosService {
    constructor(@InjectModel(Curso.name) private cursoModel: Model<CursoDocument>) {}

    async createCurso(cursoData: Curso): Promise<Curso> {
        const nuevoCurso = new this.cursoModel(cursoData);
        return nuevoCurso.save();
    }

    async getCursos(): Promise<Curso[]> {
        return this.cursoModel.find().exec();
    }

    async getCurso(id: string): Promise<Curso> {
        return this.cursoModel.findById(id).exec();
    }

    async updateCurso(id: string, cursoData: Curso): Promise<Curso> {
        return this.cursoModel.findByIdAndUpdate(id, cursoData, { new: true }).exec();
    }

    async deleteCurso(id: string): Promise<Curso> {
        return this.cursoModel.findByIdAndDelete(id).exec();
    }
    
}
