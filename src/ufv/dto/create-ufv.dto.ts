import { ApiProperty } from "@nestjs/swagger";

export class CreateUfvDto {
    
    @ApiProperty()
    ufvPresentValue: string;

    @ApiProperty()
    startDate: Date;

    @ApiProperty()
    endingDate: Date
}
