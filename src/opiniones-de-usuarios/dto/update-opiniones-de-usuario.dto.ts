import { PartialType } from '@nestjs/swagger';
import { CreateOpinionesDeUsuarioDto } from './create-opiniones-de-usuario.dto';

export class UpdateOpinionesDeUsuarioDto extends PartialType(CreateOpinionesDeUsuarioDto) {}
