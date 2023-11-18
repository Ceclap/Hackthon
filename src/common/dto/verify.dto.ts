import { ApiPropertyOptional } from "@nestjs/swagger";

export class VerifyDto {

  @ApiPropertyOptional()
  username!: string

  @ApiPropertyOptional()
  email!:string
}