import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    
    private users = [
    {
        id: 1,
        name: 'Paola',
        phone: '1234567890'
    },
    {
        id: 2,
        name: 'Nicole',
        phone: '0987654321'
    },
    ];
    
    getUsers() {
        return this.users;
    }
}
