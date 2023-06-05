import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Ufv>;

@Schema()
export class Ufv {
    @Prop()
    ufvPresentValue: string;

    @Prop()
    startDate: Date;

    @Prop()
    endingDate: Date;

    @Prop()
    asset:boolean
    
}

export const UfvSchema = SchemaFactory.createForClass(Ufv);