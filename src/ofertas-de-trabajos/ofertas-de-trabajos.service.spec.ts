import { Test, TestingModule } from '@nestjs/testing';
import { OfertasDeTrabajosService } from './ofertas-de-trabajos.service';

describe('OfertasDeTrabajosService', () => {
  let service: OfertasDeTrabajosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OfertasDeTrabajosService],
    }).compile();

    service = module.get<OfertasDeTrabajosService>(OfertasDeTrabajosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
