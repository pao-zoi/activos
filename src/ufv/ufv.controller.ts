import { Controller, Get, Post, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UFV } from './ufv.module';


@Controller('ufvs')
export class UFVsController {
  constructor(@InjectModel('UFV') private ufvModel: Model<UFV>) {}

  @Get()
  async findAll(): Promise<UFV[]> {
    return this.ufvModel.find().exec();
  }

  @Post()
  async create(@Body() ufvsDto: UFV): Promise<UFV> {
    const createdUFV = new this.ufvModel(ufvsDto);
    return createdUFV.save();
  }
}

