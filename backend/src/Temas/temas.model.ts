import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TemaDocument = Tema & Document;

@Schema({ collection: 'Temas' }) 
export class Tema {
    @Prop({ required: true })
    nombreTema: string; 

    @Prop({ required: true })
    codigoCurso: string;
}

export const TemaSchema = SchemaFactory.createForClass(Tema);
