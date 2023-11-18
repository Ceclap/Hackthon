import { ApiProperty } from "@nestjs/swagger";
import {IsEmail, IsString} from "class-validator";

export class LoginDto {

  @ApiProperty({ example: 'victor@gmail.com' })
  @IsEmail()
  @IsString()
  email!: string;

  @ApiProperty({ example: 'victor' })
  @IsString()
  username!: string;

  @ApiProperty({ example: '@Parola123' })
  @IsString()
  password!: string;
}