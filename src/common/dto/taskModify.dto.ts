import { ApiProperty } from "@nestjs/swagger";
import {IsString} from "class-validator";

export class TaskModifyDto {
  @ApiProperty({ example: 'Write a email' })
  @IsString()
  title!:string

  @ApiProperty({ example: 'Write a email to my Harry' })
  @IsString()
  text!:string
}