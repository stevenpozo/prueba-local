import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { Curso } from './curso.model';

@Controller('cursos')
export class CursosController {
    constructor(private readonly cursosService: CursosService) { }

    @Post()
    async createCurso(@Body() cursoData: Curso): Promise<Curso> {
        return this.cursosService.createCurso(cursoData);
    }

    @Get()
    async getCursos(): Promise<Curso[]> {
        return this.cursosService.getCursos();
    }

    @Get(':id')
    async getCurso(@Param('id') id: string): Promise<Curso> {
        return this.cursosService.getCurso(id);
    }

    @Put(':id')
    async updateCurso(@Param('id') id: string, @Body() cursoData: Curso): Promise<Curso> {
        return this.cursosService.updateCurso(id, cursoData);
    }

    @Delete(':id')
    async deleteCurso(@Param('id') id: string): Promise<Curso> {
        return this.cursosService.deleteCurso(id);
    }

    /*codigo nuevo*/
    @Post(':cursoId/temas/:temaId')
    addTemaToCurso(@Param('cursoId') cursoId: string, @Param('temaId') temaId: string) {
        return this.cursosService.addTemaToCurso(cursoId, temaId);
    }

    @Get(':id/temas')
    findTemasByCurso(@Param('id') id: string) {
        return this.cursosService.findTemasByCurso(id);
    }
    
}
