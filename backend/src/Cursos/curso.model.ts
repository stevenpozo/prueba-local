import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CursoDocument = Curso & Document;

@Schema({ collection: 'Cursos' }) 
export class Curso {
    @Prop({ required: true })
    codigoCurso: string; 

    @Prop({ required: true })
    nombreCurso: string;

    @Prop({ required: true })
    descripcion: string;
}

export const CursoSchema = SchemaFactory.createForClass(Curso);
