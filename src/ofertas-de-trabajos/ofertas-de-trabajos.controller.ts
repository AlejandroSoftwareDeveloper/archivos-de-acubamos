import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OfertasDeTrabajosService } from './ofertas-de-trabajos.service';
import { CreateOfertasDeTrabajoDto } from './dto/create-ofertas-de-trabajo.dto';
import { UpdateOfertasDeTrabajoDto } from './dto/update-ofertas-de-trabajo.dto';

@Controller('ofertas-de-trabajos')
export class OfertasDeTrabajosController {
  constructor(private readonly ofertasDeTrabajosService: OfertasDeTrabajosService) {}

  @Post()
  create(@Body() createOfertasDeTrabajoDto: CreateOfertasDeTrabajoDto) {
    return this.ofertasDeTrabajosService.create(createOfertasDeTrabajoDto);
  }

  @Get()
  findAll() {
    return this.ofertasDeTrabajosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ofertasDeTrabajosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOfertasDeTrabajoDto: UpdateOfertasDeTrabajoDto) {
    return this.ofertasDeTrabajosService.update(+id, updateOfertasDeTrabajoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ofertasDeTrabajosService.remove(+id);
  }
}
