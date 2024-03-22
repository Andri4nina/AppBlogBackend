import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/user/schemas/user.schema';

import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor( private authService: AuthService ){}

    @Post('/login')
    login(@Body() loginDto: LoginDto): Promise< {token: string} >{
        return this.authService.Login(loginDto)
    }
    
   
    @Get('profile/:token')
    async getProfile(@Param('token') token: string): Promise<User | null> {
        if (!token) {
            return null; // Le token est absent ou incorrectement formaté
        }

        return await this.authService.decodeToken(token);
    }
}
