import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OpinionesDeUsuariosService } from './opiniones-de-usuarios.service';
import { CreateOpinionesDeUsuarioDto } from './dto/create-opiniones-de-usuario.dto';
import { UpdateOpinionesDeUsuarioDto } from './dto/update-opiniones-de-usuario.dto';

@Controller('opiniones-de-usuarios')
export class OpinionesDeUsuariosController {
  constructor(private readonly opinionesDeUsuariosService: OpinionesDeUsuariosService) {}

  @Post()
  create(@Body() createOpinionesDeUsuarioDto: CreateOpinionesDeUsuarioDto) {
    return this.opinionesDeUsuariosService.create(createOpinionesDeUsuarioDto);
  }

  @Get()
  findAll() {
    return this.opinionesDeUsuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.opinionesDeUsuariosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOpinionesDeUsuarioDto: UpdateOpinionesDeUsuarioDto) {
    return this.opinionesDeUsuariosService.update(+id, updateOpinionesDeUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.opinionesDeUsuariosService.remove(+id);
  }
}
