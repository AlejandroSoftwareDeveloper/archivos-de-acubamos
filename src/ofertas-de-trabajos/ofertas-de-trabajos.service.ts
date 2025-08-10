import { Injectable } from '@nestjs/common';
import { CreateOfertasDeTrabajoDto } from './dto/create-ofertas-de-trabajo.dto';
import { UpdateOfertasDeTrabajoDto } from './dto/update-ofertas-de-trabajo.dto';

@Injectable()
export class OfertasDeTrabajosService {
  create(createOfertasDeTrabajoDto: CreateOfertasDeTrabajoDto) {
    return 'This action adds a new ofertasDeTrabajo';
  }

  findAll() {
    return `This action returns all ofertasDeTrabajos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ofertasDeTrabajo`;
  }

  update(id: number, updateOfertasDeTrabajoDto: UpdateOfertasDeTrabajoDto) {
    return `This action updates a #${id} ofertasDeTrabajo`;
  }

  remove(id: number) {
    return `This action removes a #${id} ofertasDeTrabajo`;
  }
}
