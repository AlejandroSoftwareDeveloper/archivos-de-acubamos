import { Injectable } from '@nestjs/common';
import { CreateOpinionesDeUsuarioDto } from './dto/create-opiniones-de-usuario.dto';
import { UpdateOpinionesDeUsuarioDto } from './dto/update-opiniones-de-usuario.dto';

@Injectable()
export class OpinionesDeUsuariosService {
  create(createOpinionesDeUsuarioDto: CreateOpinionesDeUsuarioDto) {
    return 'This action adds a new opinionesDeUsuario';
  }

  findAll() {
    return `This action returns all opinionesDeUsuarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} opinionesDeUsuario`;
  }

  update(id: number, updateOpinionesDeUsuarioDto: UpdateOpinionesDeUsuarioDto) {
    return `This action updates a #${id} opinionesDeUsuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} opinionesDeUsuario`;
  }
}
