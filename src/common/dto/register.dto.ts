import { ApiProperty } from "@nestjs/swagger";
import {IsEmail, IsString} from "class-validator";

export class RegisterDto{

  @ApiProperty({ example: 'victor@gmail.com' })
  @IsString()
  @IsEmail()
  email!: string;

  @ApiProperty({ example: 'victor' })
  @IsString()
  username!: string;

  @ApiProperty({ example: '@Parola123' })
  @IsString()
  password!: string;

}