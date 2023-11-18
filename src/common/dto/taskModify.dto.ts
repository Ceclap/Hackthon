import { ApiProperty } from "@nestjs/swagger";

export class TaskModifyDto {
  @ApiProperty({ example: 'Write a email' })
  title!:string

  @ApiProperty({ example: 'Write a email to my Harry' })
  text!:string
}