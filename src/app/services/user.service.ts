import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private user: User = {
        name: "Ochoa Hyde",
        coins: 100,
        // moves: []
    }

    constructor() { }

    getUser(): User {
        return this.user
    }
}
