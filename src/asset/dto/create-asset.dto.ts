import { ApiProperty } from "@nestjs/swagger";

export class CreateAssetDto {
    @ApiProperty()
    name: string; //nombre del activo
    
    @ApiProperty()
    description: string;//descripcion del activo

    @ApiProperty()
    responsible:string; //responsable del activo
    
    @ApiProperty()
    amount:number; //cantidad del activo

    @ApiProperty()
    supplier:string; //proveedor del activo

    @ApiProperty()
    location:string;//ubicacion del activo

    @ApiProperty()
    worth: number; //valor del activo

    @ApiProperty()
    dateacquisition: Date;// fecha de adquision 

    @ApiProperty()
    warrantyxpirationdate: Date; //fecha de vencimiento de la garantia del activo
    
    
}
