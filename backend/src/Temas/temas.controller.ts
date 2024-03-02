import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TemasService } from './temas.service';
import { Tema } from './temas.model'; 

@Controller('Temas')
export class TemasController {
    constructor(private readonly TemasService: TemasService) {}

    @Post()
    async createTema(@Body() TemaData: Tema): Promise<Tema> {
        return this.TemasService.createTema(TemaData);
    }

    @Get()
    async getTemas(): Promise<Tema[]> {
        return this.TemasService.getTemas();
    }

    @Get(':id')
    async getTema(@Param('id') id: string): Promise<Tema> {
        return this.TemasService.getTema(id);
    }

    @Put(':id')
    async updateTema(@Param('id') id: string, @Body() TemaData: Tema): Promise<Tema> {
        return this.TemasService.updateTema(id, TemaData);
    }

    @Delete(':id')
    async deleteTema(@Param('id') id: string): Promise<Tema> {
        return this.TemasService.deleteTema(id);
    }
}
