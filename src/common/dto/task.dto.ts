import { ApiProperty } from "@nestjs/swagger";
import {IsString} from "class-validator";

export class TaskDto {
  @ApiProperty({ example: '5fb917b8-2b9f-4c8d-a107-c9b7db61da0d' })
  @IsString()
  userId!:string
  @ApiProperty({ example: 'Write a email' })
  @IsString()
  title!:string
  @ApiProperty({ example: 'Write a email to my Harry' })
  @IsString()
  text!:string
}