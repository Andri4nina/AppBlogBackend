import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService:JwtService,
    ){}

    async Login(loginDto: LoginDto ): Promise<{token: string }> {
        const { email_user, mdp_user } = loginDto;

        const user = await this.userModel.findOne({email_user})
        if (!user || mdp_user !== user.mdp_user) {
            throw new UnauthorizedException('Email ou mot de passe invalide');
          }
          
        const token = this.jwtService.sign({ id: user._id });
  
        return { token };
    }
    
    async decodeToken(token: string): Promise<User | null> {
        try {
            const decodedToken = this.jwtService.verify(token);
            const userId = decodedToken['id'];
            return await this.userModel.findById(userId).exec();
        } catch (error) {
            // Token is invalid or expired
            return null;
        }
    }
    
    

}
