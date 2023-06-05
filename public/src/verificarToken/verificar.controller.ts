// import { HttpService } from '@nestjs/axios';
// import { Injectable } from '@nestjs/common';
// import { loginAuthDTO, LoginCentralDTO } from './api.dto';

// @Injectable()
// export class ApiService {
// 	private apiSeguridad = process.env.API_SEGURIDAD;

// 	constructor(
// 		private readonly httpService: HttpService,
// 	) { }

// 	async test() {
// 		return 'Hello from services'
// 	}

// 	async loginAuthCentral(loginCentralDTO: LoginCentralDTO) {
// 		try {
// 			const response = await this.httpService.post(`${this.apiSeguridad}/auth/verifyAppToken`, loginCentralDTO).toPromise()
// 			return response.data	
// 		} catch (error) {
// 			throw error.response?.data
// 		}
// 	}
// }
/*import { Controller, Get, HttpServer, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {  HttpService } from '@nestjs/axios';

@ApiTags('verificarToken')
@Controller('verificarToken')
export class VerificarTokenController {
  
  constructor (private readonly httpService:HttpService){}
  @ApiBearerAuth()
  @Get()
  async verificarToken(@Req() req: Request, @Res() res: Response) {
    try {
      console.log(req)
      const token = req.headers.authorization.split(' ')[1];

      const resp = await this.httpService
        .get('http://10.10.214.219:3100/auth/verifyAppToken', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .toPromise();

      res.send(resp.data);
    } catch (error) {
      if (error.response && error.response.data) {
        const { statusCode, message } = error.response.data;
        res.status(statusCode).send(message);
      } else {
        console.log(error);
        res.status(500).send('Error occurred');
      }
  }
}
} */