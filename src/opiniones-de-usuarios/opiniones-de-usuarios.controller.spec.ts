import { Test, TestingModule } from '@nestjs/testing';
import { OpinionesDeUsuariosController } from './opiniones-de-usuarios.controller';
import { OpinionesDeUsuariosService } from './opiniones-de-usuarios.service';

describe('OpinionesDeUsuariosController', () => {
  let controller: OpinionesDeUsuariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpinionesDeUsuariosController],
      providers: [OpinionesDeUsuariosService],
    }).compile();

    controller = module.get<OpinionesDeUsuariosController>(OpinionesDeUsuariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
