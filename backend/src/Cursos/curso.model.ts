import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document,Types } from 'mongoose';
import {Tema} from '../Temas/temas.model'

export type CursoDocument = Curso & Document;

@Schema({ collection: 'Cursos' }) 
export class Curso {

    @Prop({ required: true })
    nombreCurso: string;

    @Prop({ required: true })
    descripcion: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Tema' }] })
    temas: Types.ObjectId[] | Tema[];

}

export const CursoSchema = SchemaFactory.createForClass(Curso);
