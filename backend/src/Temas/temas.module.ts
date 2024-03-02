import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TemasController } from './temas.controller';
import { TemasService } from './temas.service';
import { Tema, TemaSchema } from './temas.model';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Tema.name, schema: TemaSchema }]),
    ],
    controllers: [TemasController],
    providers: [TemasService],
    exports: [MongooseModule.forFeature([{ name: Tema.name, schema: TemaSchema }])],
})
export class TemasModule { }
