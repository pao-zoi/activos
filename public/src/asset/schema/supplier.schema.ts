// import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
// import { ApiProperty } from '@nestjs/swagger';
// import { Document } from 'mongoose';
// import mongoose from 'mongoose';
// import { Asset } from './asset.schema';

// export type SupplierDocument = Supplier & Document;

// @Schema()
// export class Supplier {
//   @Prop()
//   name: string;

//   @Prop()
//   address: string;

//   @Prop()
//   phone: number;

//   @Prop({ type: mongoose.Schema.Types.String, ref: 'Asset' }) 
//   assetname: Asset; 
// }

// export const SupplierSchema = SchemaFactory.createForClass(Supplier);