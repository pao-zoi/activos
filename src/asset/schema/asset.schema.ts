import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Asset>;

@Schema()
export class Asset {

    @Prop()
    name: string; //nombre del activo
    
    @Prop()
    description: string;//descripcion del activo

    @Prop()
    responsible:string; //responsable del activo
    
    @Prop()
    amount:number; //cantidad del activo

    // @Prop([SupplierSchema])
    // supplier:Supplier[]; //proveedor del activo
    @Prop()
    supplier:string;

    @Prop()
    location:string;//ubicacion del activo

    @Prop()
    worth: number; //valor del activo

    @Prop()
    dateacquisition: Date;// fecha de adquision 

    @Prop()
    warrantyexpirationdate: Date; //fecha de vencimiento de la garantia del activo

    @Prop({ default: true })
    asset: boolean; 

   // @Prop()
   // image: string;

}

export const AssetSchema = SchemaFactory.createForClass(Asset);

