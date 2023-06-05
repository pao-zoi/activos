import { HttpException, Injectable } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Asset } from './schema/asset.schema';
import { Model } from 'mongoose';

@Injectable()
export class AssetService {

  
  constructor(
    @InjectModel(Asset.name) private AssetModel: Model<Asset>, 
    ) {}
    async create(objectAsset: CreateAssetDto) {
      //const res = await this.AssetModel.create(objectAsset);
      const nuevoActivo = await new  this.AssetModel(objectAsset);
      
      const createAssetDto = await nuevoActivo.save();
      return createAssetDto;
      // Establecer el estado deseado (por ejemplo, 'En proceso')
  
    }   
    
    async findAll() {
      return await this.AssetModel.find();
    }

    async findOne(id: string) {
      return await this.AssetModel.findById(id);
    }

    async update(id: string, updateAssetDto) {
      return await this.AssetModel.findByIdAndUpdate(id,updateAssetDto,{new:true}) ;
    }

    async darDeBaja(_id: string) {
      const asset = await this.AssetModel.findOne({_id});
      if (!asset) {
        throw new Error('activo no encontrado');
      }

    asset.asset = false; // Cambiar el estado del activo a inactivo
    return asset.save();
  }
  async updateEstado(activoId: string, estado: string): Promise<void> {
    await this.AssetModel.findOneAndUpdate({ _id: activoId }, { estado });
  }
}
