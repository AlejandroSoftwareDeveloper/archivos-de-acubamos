import { Injectable } from '@nestjs/common';
import { CreateOpinioneDto } from './dto/create-opinione.dto';
import { UpdateOpinioneDto } from './dto/update-opinione.dto';

@Injectable()
export class OpinionesService {
  create(createOpinioneDto: CreateOpinioneDto) {
    return 'This action adds a new opinione';
  }

  findAll() {
    return `This action returns all opiniones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} opinione`;
  }

  update(id: number, updateOpinioneDto: UpdateOpinioneDto) {
    return `This action updates a #${id} opinione`;
  }

  remove(id: number) {
    return `This action removes a #${id} opinione`;
  }
}
