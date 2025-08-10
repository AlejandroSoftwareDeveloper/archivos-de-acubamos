import { Module } from '@nestjs/common';
import { OpinionesDeUsuariosService } from './opiniones-de-usuarios.service';
import { OpinionesDeUsuariosController } from './opiniones-de-usuarios.controller';

@Module({
  controllers: [OpinionesDeUsuariosController],
  providers: [OpinionesDeUsuariosService],
})
export class OpinionesDeUsuariosModule {}
