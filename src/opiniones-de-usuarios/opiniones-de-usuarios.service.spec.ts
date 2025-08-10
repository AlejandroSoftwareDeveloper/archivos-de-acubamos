import { Test, TestingModule } from '@nestjs/testing';
import { OpinionesDeUsuariosService } from './opiniones-de-usuarios.service';

describe('OpinionesDeUsuariosService', () => {
  let service: OpinionesDeUsuariosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpinionesDeUsuariosService],
    }).compile();

    service = module.get<OpinionesDeUsuariosService>(OpinionesDeUsuariosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
