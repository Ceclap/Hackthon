import { ApiProperty } from "@nestjs/swagger";

export class RegisterDto{

  @ApiProperty({ example: 'victor@gmail.com' })
  email!: string;

  @ApiProperty({ example: 'victor' })
  username!: string;

  @ApiProperty({ example: '@Parola123' })
  password!: string;

}