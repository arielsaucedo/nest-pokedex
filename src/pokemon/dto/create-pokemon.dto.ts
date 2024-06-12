import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @IsInt({ message: 'No debe ser un numero entero' })
  @IsPositive({ message: 'No debe ser un numero positivo' })
  @Min(1, { message: 'No debe ser un numero mayor a 0' })
  no: number;

  @IsString({ message: 'Name debe ser un string' })
  @MinLength(1, { message: 'Name debe tener al menos 1 caracteres' })
  name: string;
}
