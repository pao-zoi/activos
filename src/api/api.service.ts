import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { LoginAuthDTO } from './api.dto';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';


@Injectable()
export class ApiService {
    private readonly API_SEGURIDAD = process.env.API_SEGURIDAD
    constructor(
        private readonly httpService:HttpService,
    ){}
    async loginAuth(loginAuthDTO:LoginAuthDTO): Promise<Observable<AxiosResponse<any[]>>>{
        // console.log(`${this.API_SEGURIDAD}/auth/login`)
        // const response = await this.httpService.post(`${this.API_SEGURIDAD}/auth/login`,loginAuthDTO).toPromise()

        const response = await this.httpService.post(`${this.API_SEGURIDAD}https://billowing-wave-7639.fly.dev/api`, loginAuthDTO).toPromise()
        return response.data
    }
    async loginAuthCentral(loginCentralDTO: LoginAuthDTO) {
		try {
			const response = await this.httpService.post(`${this.API_SEGURIDAD}https://billowing-wave-7639.fly.dev/api`, loginCentralDTO).toPromise()
			return response.data	
		} catch (error) { 
			throw error.response?.data
		}
	}
}
