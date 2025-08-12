import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OpinionesService } from './opiniones.service';
import { CreateOpinioneDto } from './dto/create-opinione.dto';
import { UpdateOpinioneDto } from './dto/update-opinione.dto';

@Controller('opiniones')
export class OpinionesController {
  constructor(private readonly opinionesService: OpinionesService) {}

  @Post()
  create(@Body() createOpinioneDto: CreateOpinioneDto) {
    return this.opinionesService.create(createOpinioneDto);
  }

  @Get()
  findAll() {
    return this.opinionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.opinionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOpinioneDto: UpdateOpinioneDto) {
    return this.opinionesService.update(+id, updateOpinioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.opinionesService.remove(+id);
  }
}
