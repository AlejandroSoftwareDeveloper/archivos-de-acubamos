import { IsAlphanumeric, IsEmail, IsEnum, IsInt, IsNotEmpty, IsString, Matches, MinLength, } from 'class-validator'; 
const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class CreateOpinioneDto {
@IsString()
@MinLength(10, { message: 'El campo nombre y apellidos debe tener al menos 10 characteres.' })
@IsNotEmpty()
fullname: string;


@IsString()
@MinLength(10, { message: 'El campo area de trabajo debe tener al menos 10 characteres' })
@IsNotEmpty()
workarea: string;

@IsString()
@MinLength(10, { message: 'El campo commentarios debe tener al menos 10 characteres' })
@IsNotEmpty()
comment: string;

}
