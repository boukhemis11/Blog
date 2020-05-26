import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../models/user.entity';
import { Repository } from 'typeorm';
import { User } from '../models/user.interface';
import { Observable, from } from 'rxjs';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly usersRepository: Repository<UserEntity>
    ){}

    create(user: User):Observable<User>{
        return from(this.usersRepository.save(user));
    }

    findAll(): Observable<User[]> {
        return from(this.usersRepository.find());
      }
    
    findOne(id: number): Observable<User> {
    return from(this.usersRepository.findOne(id));
    }

    deleteOne(id: number): Observable<any> {
        return from(this.usersRepository.delete(id));
    }

    updateOne(id: number, user: User): Observable<any> {
        return from(this.usersRepository.update(id, user));
    }
}
