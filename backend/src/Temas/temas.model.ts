import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import {Curso} from '../Cursos/curso.model'

export type TemaDocument = Tema & Document;

@Schema({ collection: 'Temas' }) 
export class Tema {
    @Prop({ required: true })
    nombreTema: string; 

    @Prop({ required: true })
    estado: string;

    @Prop({ required: true })
    instructor: string;
    
}

export const TemaSchema = SchemaFactory.createForClass(Tema);
