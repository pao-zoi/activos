import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFile, Put } from '@nestjs/common';
import { AssetService } from './asset.service';
import { CreateAssetDto } from './dto/create-asset.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('asset')
@Controller('asset')//registrar nuevos activos
export class AssetController {
  activoModel: any;
  constructor(private readonly assetService: AssetService) {}

  @Post('upload')
    async create(@Body() createAssetDto: CreateAssetDto) {
    return await this.assetService.create(createAssetDto);
  
  }
  
  @Get()
  @ApiQuery({name: 'location', required: false, description: 'asset location'})
	@ApiQuery({name: 'amount', required: false, description: 'amount of the asset'})
	@ApiQuery({name: 'responsible', required: false, description: 'responsible for the asset'})
  @ApiQuery({name: 'name', required: false, description: 'asset name'})
  async findAll() {
    return await this.assetService.findAll();
  }

  @Get(':id')  
  async findOne(@Param('id') id: string) {
    return await this.assetService.findOne(id);
   
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateAssetDto: CreateAssetDto) {
    return await this.assetService.update(id, updateAssetDto);
  }

  @Delete(':id')
  async darDeBaja(@Param('id') id: string) {
    return await this.assetService.darDeBaja(id );
  }
}





