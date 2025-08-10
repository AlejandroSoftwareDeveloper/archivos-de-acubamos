import { PartialType } from '@nestjs/swagger';
import { CreateOfertasDeTrabajoDto } from './create-ofertas-de-trabajo.dto';

export class UpdateOfertasDeTrabajoDto extends PartialType(CreateOfertasDeTrabajoDto) {}
