import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Curso, CursoDocument } from './curso.model';
import { Tema, TemaDocument } from 'src/Temas/temas.model';

@Injectable()
export class CursosService {
    constructor(
        @InjectModel(Curso.name) private cursoModel: Model<CursoDocument>,
        @InjectModel(Tema.name) private temaModel: Model<TemaDocument>
    ) { }

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

    /*codigo nuevo*/
    async addTemaToCurso(cursoId: string, temaId: string): Promise<CursoDocument> {
        const tema = await this.temaModel.findById(temaId);
        const curso = await this.cursoModel.findById(cursoId) as CursoDocument; 

        if (!curso.temas) {
            curso.temas = [];
        }
        curso.temas.push(tema._id);
        await curso.save();
        return curso;
    }

    async findTemasByCurso(cursoId: string): Promise<Tema[]> {
        const curso = await this.cursoModel.findById(cursoId).populate('temas');
        return curso.temas as Tema[];
    }



}
