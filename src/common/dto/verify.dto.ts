import { ApiPropertyOptional } from "@nestjs/swagger";
import {IsEmail, IsString} from "class-validator";

export class VerifyDto {


  @ApiPropertyOptional()
  @IsString()
  username!: string

  @ApiPropertyOptional()
  @IsString()
  @IsEmail()
  email!:string
}