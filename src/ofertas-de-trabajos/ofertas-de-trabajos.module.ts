import { Module } from '@nestjs/common';
import { OfertasDeTrabajosService } from './ofertas-de-trabajos.service';
import { OfertasDeTrabajosController } from './ofertas-de-trabajos.controller';

@Module({
  controllers: [OfertasDeTrabajosController],
  providers: [OfertasDeTrabajosService],
})
export class OfertasDeTrabajosModule {}
