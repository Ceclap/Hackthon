import {IsString, IsUUID} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class createPost {

    @ApiProperty({ example: '321-231-1231' })
    @IsString()
    @IsUUID()
    author!: string;

    @ApiProperty({ example: 'Reparatie pe strada Cuza Voda' })
    @IsString()
    title!: string;

    @ApiProperty({ example: 'Trebuie de reparat drumul din cauza ca trebuie' })
    @IsString()
    text!: string;
}