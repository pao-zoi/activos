import { Body, Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { ApiService } from './api.service';
import { LoginAuthDTO} from './api.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Request, Response, response } from 'express';
import { HttpService } from '@nestjs/axios';

@ApiTags('apiAuth')
@Controller('api')
export class ApiController {
    constructor(
        private apiService:ApiService,
        private readonly httpService:HttpService, 
    ){}
    @Post('login-central')
	async loginCentral(@Req() req: Request, @Res() res: Response, @Body() loginCentralDTO:LoginAuthDTO ) {
		try {
			console.log(loginCentralDTO)
			const response = await this.apiService.loginAuthCentral(loginCentralDTO)
			console.log("respondioendo!!!")
			res.send( response);
		} catch (error) {
			console.log(error)
			throw error
			
		}
	}
}