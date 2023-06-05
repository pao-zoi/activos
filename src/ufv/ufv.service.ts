import { Injectable } from '@nestjs/common';
import { CreateUfvDto } from './dto/create-ufv.dto';


@Injectable()
export class UfvService {
  UfvModule: any;
  ufvService: any;
  async create(objectUfv: CreateUfvDto) {
    return this.UfvModule.create(objectUfv) ;
  }

  async findAll() {
    return await this.UfvModule.find();
  }

  async findOne(id: number) {
    return await this.UfvModule.findById(id);
  }

  async update(id: string, updateUfvDto: CreateUfvDto) {
    return this.UfvModule.findByIdAndUpdate(id,updateUfvDto,{new: true});
  }

  async darDeBaja(_id: string) {
    const asset = await this.UfvModule.findOne({_id});
    if (!asset) {
      throw new Error('activo no encontrado');
    }

  asset.asset = false; // Cambiar el estado del activo a inactivo
  return asset.save();
}
  
}
