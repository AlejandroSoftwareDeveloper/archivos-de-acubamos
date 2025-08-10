import { Test, TestingModule } from '@nestjs/testing';
import { OfertasDeTrabajosController } from './ofertas-de-trabajos.controller';
import { OfertasDeTrabajosService } from './ofertas-de-trabajos.service';

describe('OfertasDeTrabajosController', () => {
  let controller: OfertasDeTrabajosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfertasDeTrabajosController],
      providers: [OfertasDeTrabajosService],
    }).compile();

    controller = module.get<OfertasDeTrabajosController>(OfertasDeTrabajosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
