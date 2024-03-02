import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CursosController } from './cursos.controller';
import { CursosService } from './cursos.service';
import { Curso, CursoSchema } from './curso.model';
import { TemasModule } from '../Temas/temas.module'; // Asegúrate de que la ruta sea correcta

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Curso.name, schema: CursoSchema }]),
        TemasModule, // Agrega esta línea
    ],
    controllers: [CursosController],
    providers: [CursosService],
})
export class CursosModule { }
