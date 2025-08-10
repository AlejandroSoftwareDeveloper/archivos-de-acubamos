import { PartialType } from '@nestjs/swagger';
import { CreateLicitacioneDto } from './create-licitacione.dto';

export class UpdateLicitacioneDto extends PartialType(CreateLicitacioneDto) {}
