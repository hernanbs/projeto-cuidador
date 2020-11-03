import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CuidadoresService } from './shared/cuidadores/cuidadores.service';
import { Cuidador } from './shared/interface/cuidador.interface';

@Controller('cuidadores')
export class CuidadoresController {
    constructor(private cuidadorService: CuidadoresService) {}

    @Get()
    async getAll(): Promise<Cuidador[]> {
        return this.cuidadorService.getAll()
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Cuidador> {
        return this.cuidadorService.getById(id)
    }

    @Post()
    create(@Body() cuidador: Cuidador): Promise<Cuidador> {
        return this.cuidadorService.create(cuidador)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() cuidador: Cuidador): Promise<Cuidador> {
        return this.cuidadorService.update(id, cuidador)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        this.cuidadorService.delete(id)
    }

}
