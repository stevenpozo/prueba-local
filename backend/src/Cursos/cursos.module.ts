import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CursosController } from './cursos.controller';
import { CursosService } from './cursos.service';
import { Curso, CursoSchema } from './curso.model';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Curso.name, schema: CursoSchema }]),
    ],
    controllers: [CursosController],
    providers: [CursosService],
})
export class CursosModule { }
