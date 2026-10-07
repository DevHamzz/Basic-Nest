import {
  IsAlphanumeric,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty({ message: 'Username Required' })
  @MaxLength(20, { message: 'Username should not be more than 20 characters' })
  readonly name: string;

  @IsAlphanumeric()
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password should be at least 6 characters' })
  readonly password: string;

  @IsOptional()
  readonly createdAt?: string;
}
