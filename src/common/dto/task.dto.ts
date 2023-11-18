import { ApiProperty } from "@nestjs/swagger";

export class TaskDto {
  @ApiProperty({ example: '5fb917b8-2b9f-4c8d-a107-c9b7db61da0d' })
  userId!:string
  @ApiProperty({ example: 'Write a email' })
  title!:string
  @ApiProperty({ example: 'Write a email to my Harry' })
  text!:string
}