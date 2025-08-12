// Los campos adicionales son para propiedades que adicionare a futuro
import { IsAlphanumeric, IsEmail, IsEnum, IsInt, IsNotEmpty, IsString, Matches, MinLength, } from 'class-validator'; 
const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class CreateCategoriaDto {

@IsString()
@MinLength(2, { message: 'El campo nombre debe tener al menos 2 characteres.' })
@IsNotEmpty()
name: string;


@IsString()
@MinLength(2, { message: 'El campo descripcion debe tener al menos 2 characteres' })
@IsNotEmpty()
descripcion: string;

}
