import { ApiProperty } from "@nestjs/swagger";
import { Asset } from "src/asset/schema/asset.schema";

export class CreateSupplierDto {

    @ApiProperty()
    name: string;

    @ApiProperty()
    address: string;
  
    @ApiProperty()
    phone: number;

    @ApiProperty()
    assetname: Asset; 
}
